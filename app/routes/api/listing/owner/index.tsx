import { LoaderFunction } from "@remix-run/node"
import { query } from "../../DB"
import { DoResponse, GetResponse } from "~/lib/lib"

export const loader: LoaderFunction = async ({ request, params }) => {
    const contentType = request.headers.get("Content-Type")

    if (contentType !== "application/json") {
        return new Response(JSON.stringify({ error: "Invalid content type. Expected JSON." }))
    }

    try {
        const owner = params.guid

        const rows: any = await query(`SELECT DISTINCT
            d.*, bi.* 
            FROM tbl_dir d
            LEFT JOIN tbl_business_profile_image bi ON bi.business_guid = d.gid
            WHERE
            d.owner = ?
            ORDER BY d.date_created
            DESC
            `, [owner])

        if ((rows as any[]).length <= 0) { return DoResponse({}, 200) }

        const listings: any[] = rows.map((listing: any) => { return (listing) })

        return GetResponse(listings, true, 200)

    } catch (error: any) {
        console.log(error.message)
        return GetResponse({ "error": error.message }, false, 200)
    }

}