import React, { useEffect, useState } from 'react'
import { config, getBusinessProfileImageData } from '~/lib/lib'

const Products = ({ listing }: any) => {
    const [img, setImg] = useState('')

    useEffect(() => {
        if (listing.gid) {
            let imgdata = getBusinessProfileImageData(listing.gid)
            imgdata.then((data) => {

                setImg(config.IMG_BASE_URL + data.image_url)
            })
        }
    }, [listing])
    return (
        <div className='mt-12'>
            <div className={`font-bold text-xl
                border-b`}>
                Products
            </div>


            <div className={`flex flex-col gap-y-5 text-[14px] mt-4 whitespace-pre-wrap`}>
                {listing?.products}
            </div>
        </div>
    )
}

export default Products
