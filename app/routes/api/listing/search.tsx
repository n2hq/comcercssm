import { LoaderFunction } from "@remix-run/node"


import { DoResponse, escapeRegex } from "~/lib/lib"
import { query } from "../DB"

export const loader: LoaderFunction = async ({ request, params }) => {

    try {
        const url = new URL(request.url)
        let criteria = url.searchParams.get("q") as string

        if (criteria === "" || criteria === null || criteria === undefined) {
            criteria = ""
        } else {
            criteria = escapeRegex(criteria);
        }

        /* let rawdata: any = await query(`SELECT * FROM tbl_dir d
            LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid
            WHERE 
            MATCH(d.title, d.short_description, d.category) AGAINST (? IN NATURAL LANGUAGE MODE)
            OR city_id IN (SELECT id FROM tbl_city WHERE name RLIKE ?)
            OR state_code IN (SELECT iso2 FROM tbl_state WHERE name RLIKE ?)
            OR country_code IN (SELECT iso2 FROM tbl_country WHERE name RLIKE ?);
            `, [criteria, criteria, criteria, criteria]) */

        let rawdata: any = null

        if (!criteria || criteria.trim() === "" || criteria === null || criteria === undefined || criteria === "") {
            rawdata = await query(`SELECT
                d.id,
                d.gid,
                d.title,
                d.username,
                d.short_description,
                d.phone,
                d.category,
                d.established,
                d.address_one,
                d.address_two,
                d.website,
                d.date_created,
                (SELECT name FROM tbl_country co WHERE co.iso2 = d.country_code LIMIT 1) AS country_name,
                (SELECT name FROM tbl_state st WHERE st.iso2 = d.state_code LIMIT 1) AS state_name,
                (SELECT name FROM tbl_city ci WHERE ci.id = d.city_id LIMIT 1) AS city_name,
                b.image_url,
                r.average_rating,
                r.total_reviews

                FROM tbl_dir d

                LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid

                LEFT JOIN (
                    SELECT 
                        business_guid,
                        ROUND(AVG(rating), 1) AS average_rating,
                        COUNT(*) AS total_reviews
                    FROM tbl_rating
                    GROUP BY business_guid
                ) r ON d.gid = r.business_guid

                WHERE d.active_status = true
                ORDER BY d.date_created ASC
                LIMIT 50`)
        } else {
            rawdata = await query(`SELECT
                d.id,
                d.username,
                d.gid,
                d.title,
                d.short_description,
                d.phone,
                d.category,
                d.established,
                d.address_one,
                d.address_two,
                d.website,
                d.date_created,
                (SELECT name FROM tbl_country co WHERE co.iso2 = d.country_code LIMIT 1) AS country_name,
                (SELECT name FROM tbl_state st WHERE st.iso2 = d.state_code LIMIT 1) AS state_name,
                (SELECT name FROM tbl_city ci WHERE ci.id = d.city_id LIMIT 1) AS city_name,
                b.image_url,
                r.average_rating,
                r.total_reviews

                FROM tbl_dir d

                LEFT JOIN tbl_business_profile_image b ON d.gid = b.business_guid

                LEFT JOIN (
                    SELECT 
                        business_guid,
                        ROUND(AVG(rating), 1) AS average_rating,
                        COUNT(*) AS total_reviews
                    FROM tbl_rating
                    GROUP BY business_guid
                ) r ON d.gid = r.business_guid

                WHERE
                (d.title RLIKE ?
                OR d.short_description RLIKE ?
                OR d.category RLIKE ?)
                AND
                d.active_status = true
                ORDER BY d.date_created ASC
                LIMIT 50`, [criteria, criteria, criteria])
        }

        const listings = rawdata.map((listing: any) => {
            delete (listing.date_created)
            delete (listing.last_updated)
            return (listing)
        })

        //console.log(listings)

        return DoResponse(listings, 200)

    } catch (error: any) {
        console.log(error.message)
        return DoResponse({ "error": error.message }, 500)
    }

}