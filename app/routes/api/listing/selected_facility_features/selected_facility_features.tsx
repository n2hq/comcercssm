import { ActionFunctionArgs, LoaderFunction } from "@remix-run/node"
import { query } from "../../DB"
import { ListingType } from "~/lib/Interfaces"
import { DoResponse, GenerateRandomHash } from "~/lib/Lib"




export const loader: LoaderFunction = async ({ request, params }) => {
    const contentType = request.headers.get("Content-Type")

    /* if (contentType !== "application/json") {
        return new Response(JSON.stringify({ error: "Invalid content type. Expected JSON." }))
    } */

    const businessGuid = params.business_guid
    const userGuid = params.user_guid

    try {
        const rawdata: any = await query(`SELECT * FROM tbl_selected_facility_features 
            WHERE
            user_guid = ?
            AND
            business_guid = ?`,
            [
                userGuid,
                businessGuid
            ])

        return DoResponse(rawdata, 200)

    } catch (error: any) {
        return DoResponse({ "error": error.message }, 500)
    }

}