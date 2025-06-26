import { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { query } from "../DB";
import { config, DoResponse, GenerateRandomHash, HashPwd, sendEmail } from "~/lib/lib"
import { IAddUser, LoginType, ResetPasswordType } from "~/lib/types";
import { RequestStatus, RequestType } from "~/lib/types";
import { getResetPasswordEmailCompleted } from "~/lib/emails";

export const loader: LoaderFunction = async ({ request, params }) => {
    const contentType = request.headers.get("Content-Type")

    if (contentType !== "application/json") {
        return DoResponse(
            { error: "Invalid content type. Expected JSON." }
        )
    }


}

export async function action({ request, params }: ActionFunctionArgs) {
    const contentType = request.headers.get("Content-Type")
    if (contentType !== "application/json") {
        return DoResponse({ error: "Invalid content type. Expected JSON." }, 500)
    }

    if (request.method === "PUT") {
        try {

            const body: LoginType = await request.json()
            let userGuid = params.guid

            if (!body.password) {
                return DoResponse({ error: "Enter password!" }, 400)
            }

            {/** check if user exists */ }
            let rows: any = await query(`SELECT * FROM tbl_user WHERE user_guid = ?`, [userGuid])
            if ((rows as any[]).length <= 0) {
                return DoResponse(
                    {
                        exists: false,
                        message: "User with id does not exist!"
                    },
                    404
                )
            }
            const user = rows[0]

            {/** set the params */ }
            const password = body.password
            const hashedPassword = HashPwd(password)

            {/** update the password */ }
            {/** check if open request exists */ }
            rows = await query(`SELECT * FROM tbl_requests 
                WHERE
                owner = ?
                AND
                status = ?
                AND
                type = ?`, [userGuid, RequestStatus.OPEN, RequestType.PASSWORD_RESET])

            if ((rows as any[]).length <= 0) {
                return DoResponse(
                    {
                        exists: false,
                        message: "Link has expired! Initiate another password reset request."
                    },
                    405
                )
            }

            let result = await query(`UPDATE tbl_user 
                    SET
                    password = ? 
                    WHERE
                    user_guid = ?`,
                [hashedPassword, userGuid])

            {/** update the request table */ }
            result = await query(`UPDATE tbl_requests 
                    SET
                    status = ? 
                    WHERE
                    owner = ?
                    AND
                    type = ?
                    AND
                    status = ?`,
                [
                    RequestStatus.CLOSED,
                    userGuid,
                    RequestType.PASSWORD_RESET,
                    RequestStatus.OPEN
                ])

            const emailData = {
                subject: `${config.SITENAME} Password Reset`,
                to: user.email,
                msg: getResetPasswordEmailCompleted(user.first_name)
            }

            await sendEmail(emailData)

            const data = {
                success: true,
                message: 'password reset is successful'
            }

            return DoResponse(data, 200)

        } catch (error: any) {
            //console.log(error.message + ">>>]")
            return DoResponse({ error: error.message }, 500)
        }
    }

    return DoResponse({ error: "method not allowed" }, 200)
}