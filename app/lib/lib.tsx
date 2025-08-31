import { FaFacebookSquare, FaLinkedinIn, FaPinterestSquare, FaVimeoSquare, FaYoutubeSquare } from "react-icons/fa"
import { AddVideoType, Category, City, ContactType, Country, Rating, State, UserProfile } from "./types"
import CryptoJS from 'crypto-js'
import { BsInstagram, BsLinkedin, BsPinterest, BsTwitterX } from "react-icons/bs"
import { CgFacebook } from "react-icons/cg"
import { GrYoutube } from "react-icons/gr"
import { categories } from "./json/categories"

export const config = {
    BASE_URL: import.meta.env.VITE_SITE_BASE_URL,
    IMG_BASE_URL: import.meta.env.VITE_IMG_BASE_URL,
    MAIL_SERVICE: import.meta.env.VITE_MAIL_SERVICE,
    SITENAME: import.meta.env.VITE_SITENAME,
    FORMATTED_SITENAME: import.meta.env.VITE_SITENAME,
    SESSION_SECRET: import.meta.env.VITE_SESSION_SECRET
}

export const appConfig = {
    NAVBAR_HEIGHT: 60
}

export const getSiteLogo = () => {
    return (
        <span className={` 
         `}>
            Garssete
        </span>
    )
}

export const headers = {
    "Access-Control-Allow-Origin": "*",  // Allow all origins
    "Access-Control-Allow-Methods": "*",  // Allow specific methods
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specific headers
    "Access-Control-Allow-Credentials": "true", // Optional: if using cookies/auth
    "Content-Type": "application/json",
    "Cache-Control": "no-store" // Note: "cache" isn't valid; use "Cache-Control"
};

export function DoResponse(json: any, code: number = 500) {
    return new Response(
        JSON.stringify(json),
        {
            status: code,
            headers: headers
        }
    )
}

export function GetResponse(data: any, success: boolean = false, code: number = 200) {

    const response = {
        success: success,
        rspcode: code,
        data: data
    }

    return new Response(
        JSON.stringify(response),
        {
            status: code,
            headers: headers
        }
    )
}

export const HashPwd = (input: string): any => {
    return CryptoJS.SHA256(input).toString();
}

export const GenerateRandomHash = () => {
    const randomBytes = CryptoJS.lib.WordArray.random(16);
    const hash = CryptoJS.SHA256(randomBytes).toString();
    return hash
};


export const getBusinessProfile = async (criteria: string | null): Promise<ContactType[] | null> => {

    const endpoint = "/api/listing/" + criteria
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ContactType[] = await response.json();
        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        console.log(error.message)
        return null
    }
}

export const getSearch: any = async (criteria: string) => {

    const endpoint = "/api/listing/search?q=" + criteria

    console.log(criteria)
    const url = config.BASE_URL + endpoint
    console.log(url)


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getFeaturedListing: any = async () => {

    const endpoint = `/api/listing/featured_listing`
    const url = config.BASE_URL + endpoint

    console.log(url)


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getListingByCategory = async (category: string, limit: number) => {

    const endpoint = `/api/listing/listing_by_category/${category}/${limit}`
    const url = config.BASE_URL + endpoint

    //console.log(url)

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getRating = async (userGuid: string | null, businessGuid: string | null) => {

    const endpoint = `/api/rating/${userGuid}/${businessGuid}`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data

    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getBusinessProfileImageData = async (guid: string | null): Promise<any | undefined> => {

    const endpoint = "/api/listing/business_profile_image/" + guid
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getBusinessGallery = async (businessGuid: string | null) => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/listing/business_gallery/${businessGuid}`
    const url = BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data

    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getRatingsReviews = async (businessGuid: string | null) => {
    const endpoint = `/api/rating/ratings_reviews/${businessGuid}`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();
        return data

    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getPage: any = async (criteria: string) => {

    const endpoint = "/api/listing/" + criteria
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return data
    } catch (error: any) {
        return ({ "message": error.message })
    }
}

export const getBusinessRatings = async (businessGuid: string | null): Promise<any | undefined> => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/rating/business_ratings/${businessGuid}`
    const url = BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getLocalDate = (date: string) => {
    const localDate = new Date(date)
    const formatted = localDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })
    return formatted
}

export const getBusinessFeatures = async (businessGuid: string | null): Promise<any | undefined> => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/listing/business_facility_features/${businessGuid}`
    const url = BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getSocialMediaByBusinessGuid = async (businessGuid: string | null): Promise<any | undefined> => {

    const endpoint = `/api/listing/business_social_media/${businessGuid}`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const generate7DigitNumber = (): number => {
    return Math.floor(1000000 + Math.random() * 9000000); // Range: 1000000 - 9999999
};

export const getCountries = async (): Promise<Country[] | undefined> => {

    const endpoint = "/api/util/country"
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Country[] = await response.json();
        const finaldata: any = data.map((country) => {
            return {
                name: country.name,
                id: country.id
            }
        })


        return data
    } catch (error: any) {
        return undefined
    }
}

export const getStates = async (countryCode: string | null): Promise<State[] | undefined> => {

    const endpoint = "/api/util/state?country_code=" + countryCode
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: State[] = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getCities = async (countryCode: string | null, stateCode: string | null): Promise<City[] | undefined> => {

    const endpoint = "/api/util/city?country_code=" + countryCode + "&state_code=" + stateCode
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: City[] = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getCategories = async (): Promise<Category[] | undefined> => {

    const endpoint = "/api/util/category"
    const url = config.BASE_URL + endpoint
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Category[] = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getUserProfile = async (guid: string | null): Promise<UserProfile[] | undefined> => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = "/api/user/" + guid
    const url = BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: UserProfile[] = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getUserProfileImageData = async (guid: string | null): Promise<UserProfile[] | undefined> => {

    const endpoint = "/api/user/user_profile_image/" + guid
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getPortfolio = async (guid: string, q?: string): Promise<any | null> => {
    let businessesEndpoint = `/api/listing/owner?guid=${guid}&q=${q}`

    if (q && q.trim() !== "") {
        businessesEndpoint += `&q=${encodeURIComponent(q)}`
    }

    let url = config.BASE_URL + businessesEndpoint

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return null
    }
}

export const getOperatingHours = async (businessGuid: string | null, userGuid: string | null): Promise<UserProfile[] | undefined> => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/listing/operating_hours?business_guid=${businessGuid}&user_guid=${userGuid}`
    const url = BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        console.log(error.message)
        return undefined
    }
}

export const saveOperatingHours = async (openStatus: any, workingHours: any, businessGuid: any, userGuid: any) => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/listing/operating_hours?business_guid=${businessGuid}&user_guid=${userGuid}`
    const url = BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({ openStatus, workingHours })
        })

        if (!response.ok) {
            await response.json().then((data) => {
                console.log(data)
                throw new Error(`HTTP error! Status: ${response.status}, ${data.message}`);
            })

        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        console.log(error.message)
        return new Promise((resolve) => setTimeout(() => {

            resolve({ message: error.message })
        }, 10))

    }
}

export const getGallery = async (businessGuid: string | null, userGuid: string | null): Promise<UserProfile[] | undefined> => {

    const endpoint = `/api/listing/gallery/${businessGuid}/${userGuid}`
    const url = config.BASE_URL + endpoint
    //console.log(url)
    //console.log("|||")

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();


        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const deleteGalleryImage = async (guid: string | null, bid: string | null, image_guid: string | null): Promise<any | undefined> => {
    const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL
    const endpoint = `/delete_business_gallery_pic`
    const url = IMG_BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = {
            status: true
        }

        return new Promise((resolve) => setTimeout(() => {
            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getSysFacilityFeatures = async (): Promise<any | undefined> => {

    const endpoint = `/api/listing/sys_facility_features`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getSelectedFacilityFeatures = async (userGuid: string | null, businessGuid: string | null): Promise<any | undefined> => {
    const BASE_URL = import.meta.env.VITE_SITE_BASE_URL
    const endpoint = `/api/listing/selected_facility_features/${userGuid}/${businessGuid}`
    const url = BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getSysSocialMedia = async (): Promise<any | undefined> => {

    const endpoint = `/api/listing/sys_social_media`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getSelectedSocialMedia = async (userGuid: string | null, businessGuid: string | null): Promise<any | undefined> => {

    const endpoint = `/api/listing/selected_social_media/${userGuid}/${businessGuid}`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getBusiness = async (userGuid: string | null, businessGuid: string | null): Promise<any | undefined> => {

    const endpoint = `/api/listing/activate/${userGuid}/${businessGuid}`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const getRecents = async (): Promise<any | undefined> => {

    const endpoint = `/api/listing/recents`
    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'b';
    }
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
}

export function getFirstChar(word: string): string {
    if (!word || typeof word !== "string") return "";
    return word.trim().charAt(0);
}

export function toSentenceCase(text: string): string {
    return text
        .toLowerCase()
        .replace(/([^.!?]*[.!?])(\s+|$)/g, (match) =>
            match.charAt(0).toUpperCase() + match.slice(1)
        );
}

export const changeEmail = async (guid: string, email: string): Promise<any> => {

    const endpoint = `/api/user/change_email?guid=${guid}&email=${email}`
    const url = config.BASE_URL + endpoint

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: headers,
        }
        )
        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}

export const sendEmail = async (data: any) => {
    const endpoint = config.MAIL_SERVICE

    const qs = new URLSearchParams(data).toString();
    const url = endpoint + "?" + qs

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const rsp: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {
            console.log(rsp)
            resolve(rsp)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}


export function escapeRegex(str: string): string {
    // Escape characters with special meaning in regex
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const IsAuthenticated = (localStorage: any) => {
    const tokens = localStorage.getItem("authTokens")
    if (tokens === null) {
        window.location.href = "/web/signin"
    }
}


export function getDateInTimeZone(timeZone: any) {
    //const now = new Date();
    const adjustment = 0;
    const timeObject = new Date(Date.now() - adjustment);

    // Format to parts in target timezone
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(timeObject);

    // Extract parts
    const dateParts: any = {};
    for (const { type, value } of parts) {
        if (type !== "literal") dateParts[type] = value;
    }

    // Construct a Date from the parts (in local machine time)
    return new Date(
        `${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}`
    );
}


export function getDateInTimeZoneX(timeZone: any) {
    //const now = new Date();
    const adjustment = 0;
    const timeObject = new Date(Date.now() - adjustment);

    // Format to parts in target timezone
    const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long"
    }).format(timeObject);

    const displayFormattedTime = <span className={`space-x-1 tracking-tight`}>
        <span className={`font-bold underline`}>Local Time:</span>
        <span>{formattedTime}</span>
    </span>

    // Construct a Date from the parts (in local machine time)
    return displayFormattedTime
}


export function getCardIcon(media: any) {
    let icon = null

    switch (media) {
        case "facebook":
            icon = <CgFacebook size={20} />
            break;
        case "twitterx":
            icon = <BsTwitterX size={14} />
            break;
        case "linkedin":
            icon = <FaLinkedinIn size={15} />
            break;
        case "instagram":
            icon = <BsInstagram size={15} />
            break;
        case "pinterest":
            icon = <BsPinterest size={18} />
            break;
        case "youtube":
            icon = <GrYoutube size={20} />
            break;
        case "vimeo":
            icon = <FaVimeoSquare size={18} />
            break;


    }
    return icon
}


export function strToList(str: string, separator: string) {
    const list = str.split(separator)
        .map(item => item.trim())
        .filter(item => item.length > 0);
    return list
}


export const saveVideo = async (video: AddVideoType): Promise<any> => {

    const endpoint = `/api/listing/save_video_link`

    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(video)
        })

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}


export const getVideoGallery = async (businessGuid: string | null, userGuid: string | null): Promise<AddVideoType[] | null> => {

    let endpoint: string = ""

    if (businessGuid !== "" && userGuid !== "") {
        endpoint = `/api/listing/video_links/${businessGuid}/${userGuid}`
    } else {
        alert('Contact admin.')
    }




    const url = config.BASE_URL + endpoint
    //console.log(url)
    //console.log("|||")

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {

            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();


        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return null
    }
}


export const getYoutubeId = (videoUrl: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = videoUrl?.match(regex);
    let videoId = match ? match[1] : null;
    return videoId
}


export const updateVideo = async (video: AddVideoType): Promise<any> => {

    const endpoint = `/api/listing/save_video_link`

    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(video)
        })

        const data: any = await response.json();

        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return undefined
    }
}


export const getBusinessVideoGallery = async (businessGuid: string | null): Promise<AddVideoType[] | null> => {

    let endpoint: string = ""

    if (businessGuid !== "") {
        endpoint = `/api/listing/video_links/${businessGuid}`
    } else {

        throw new Error(`Error: Contact Admin`);

    }




    const url = config.BASE_URL + endpoint


    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers,
        }
        )
        if (!response.ok) {

            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: any = await response.json();


        return new Promise((resolve) => setTimeout(() => {

            resolve(data)
        }, 10))
    } catch (error: any) {
        return null
    }
}


export const searchCategories = (searchTerm: string) => {
    const foundCategory = categories.find(
        (cat: Category) => cat.id.toLowerCase() === searchTerm.toLowerCase()
    );
    return foundCategory
}