import { Link } from '@remix-run/react'
import React from 'react'
import { BsBank } from 'react-icons/bs'
import { FiArrowRight } from 'react-icons/fi'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { config } from '~/lib/lib'

const ResultItem = ({ listing, index }: any) => {
    function isOdd(num: number): boolean {
        return num % 2 !== 0;
    }

    let url = config.IMG_BASE_URL + listing.image_url

    if (listing?.image_url === "" || listing?.image_url === null) {
        url = "/images/imgplaceholder.jpg"
    }



    return (

        <div className={` cursor-pointer my-2`}>
            <div className={`flex rounded  gap-x-2 p-2
             hover:bg-blue-100 hover:shadow-md  
             ${isOdd(index) ? 'bg-blue-50' : ''}
                `}>
                {/** left */}
                <div className={`relative min-w-[50px] w-[50px] h-[50px]
                    rounded-full overflow-hidden border`}>
                    <img
                        src={url}
                        alt={listing.title}
                        className={`object-cover w-full h-full text-sm
                             `}
                    />
                </div>

                {/** right */}
                <div className=' w-full'>
                    <Link to={`/web/account/portfolio/${listing.gid}`}>
                        <div className={`md:flex md:place-content-between 
                w-full md:gap-x-[4px]`}>
                            {/** left */}
                            <div className={`w-full md:w-[60%] -space-y-1`}>
                                <div className={`font-normal text-[14px] text-brown-800 `}>
                                    {listing.title}
                                </div>

                                <div className={`font-normal text-[11.5px] flex place-items-center gap-1`}>

                                    <div className={`capitalize flex place-items-center `}>
                                        {listing.category}
                                    </div>

                                </div>

                                <div className={`font-normal text-[11px] 
                                    flex place-items-center gap-1 `}>
                                    {Boolean(listing.active_status) ? 'Active' : 'Inactive'}
                                </div>


                            </div>

                            {/** right */}
                            <div className={`w-full lg:w-[40%] hidden 
                                sm:block`}>
                                <div className={`flex flex-col place-items-end place-content-end font-normal text-black tracking-tighter`}>
                                    {listing.phone}
                                </div>
                                <div className={`flex flex-col text-end text-[12px]
                                leading-[1.2em]`}>
                                    {listing?.address_one}
                                    {
                                        listing?.address_two ? `, ${listing?.address_two}` : ''
                                    }
                                    {
                                        listing?.city_name ? `, ${listing?.city_name}` : ''
                                    }
                                    {
                                        listing?.state_name ? `, ${listing?.state_name}` : ''
                                    }
                                    {
                                        listing?.country_name ? `, ${listing?.country_name}` : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}




export default ResultItem
