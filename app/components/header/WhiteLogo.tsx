import { Link } from "@remix-run/react"
import { getSiteLogo } from "~/lib/lib"


export const WhiteLogo = () => {
    return (
        <Link to={`/`}>
            <div className={`font-[900] text-[24px]
                cursor-pointer tracking-tight relative
                top-[-1px] `}>
                {/* <img src="/images/gruthe4.png" alt=""
                    className={`h-[22px] `}
                /> */}
                {getSiteLogo()}
            </div>
        </Link>
    )
}