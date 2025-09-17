import React from 'react'
import CardTitle from '../../../assets/CardTitle'
import { Link } from '@remix-run/react'
import { PortfolioSearchBox } from './PortfolioSearchBox'
import { CgChevronDoubleRight } from 'react-icons/cg'
import { BiMenu } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { GrLaunch } from 'react-icons/gr'

const CardHeaderWithSearch = ({ base_url, title, q }: any) => {
    return (
        <div>
            <div className={`bg-gray-100 w-full  
                            flex place-content-between rounded-lg
                            place-items-center h-auto py-3 gap-[5px]
                            leading-[1.5em] px-[15px]`}>
                <div className={`h-full`}>

                    <div className="flex items-center text-blue-800 text-[18px] font-poppins tracking-tight font-bold  ">
                        <GrLaunch className="mr-1 flex-shrink-0" size={25} />
                        <span className="line-clamp-1 overflow-hidden">
                            {title}
                        </span>
                    </div>
                </div>
                <div className={`grow flex place-content-end`}>
                    <PortfolioSearchBox query={q} />
                </div>

            </div>
        </div>
    )
}

export default CardHeaderWithSearch
