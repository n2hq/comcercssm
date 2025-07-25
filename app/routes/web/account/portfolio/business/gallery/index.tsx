import React, { useEffect, useState } from 'react'
import AccountLayout from '../../../assets/AccountLayout'
import ContentLayout from '../../../assets/ContentLayout'
import { getBusinessGallery, getBusinessProfile, getGallery } from '~/lib/lib'
import { useParams } from '@remix-run/react'
import BusinessMenu from '../assets/BusinessMenu'
import AddPhoto from './gallery/AddPhoto'
import Gallery from './gallery/Gallery'
import { useAuth } from '~/context/AuthContext'
import CardTitle from '../../../assets/CardTitle'

const index = () => {
    const [businessGuid, setBusinessGuid] = useState('')
    const [userGuid, setUserGuid] = useState('')
    const [gallery, setGallery] = useState<any | null>(null)
    const [data, setData] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)
    const { business_guid, user_guid } = useParams();
    const [businessProfile, setBusinessProfile] = useState<any | null>(null)
    const auth = useAuth()
    if (!auth) { return null }

    useEffect(() => {
        const getAllData = async (businessGuid: string, userGuid: string) => {

            setBusinessGuid(businessGuid)
            setUserGuid(userGuid)
            const gallery = await getGallery(businessGuid, userGuid)
            setGallery(gallery)
            const businessProfile = await getBusinessProfile(businessGuid || "")
            setBusinessProfile(businessProfile)
        }
        if (business_guid && user_guid) {
            getAllData(business_guid, user_guid)
        }
    }, [business_guid, user_guid])

    useEffect(() => {


        if (businessGuid && userGuid && gallery && businessProfile) {

            const data = {
                businessGuid: businessGuid,
                userGuid: userGuid,
                gallery: gallery,
                businessProfile: businessProfile
            }
            setData(data)
            setLoading(false)
        }
    }, [businessGuid, userGuid, gallery, businessProfile])



    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        )
    }
    return (
        <AccountLayout>
            <ContentLayout title={'Gallery Settings'}>
                <CardTitle
                    baseUrl='/web/account/portfolio/'
                    guid={businessGuid}>
                    {data?.businessProfile?.title}
                </CardTitle>


                {
                    businessGuid && userGuid &&
                    <BusinessMenu guid={businessGuid} userGuid={userGuid} />
                }

                {
                    businessGuid && userGuid &&
                    <AddPhoto userGuid={userGuid} businessGuid={businessGuid} />
                }

                {
                    gallery.length > 0 ?
                        <div className='z-0'>
                            <Gallery
                                gallery={gallery}
                                userGuid={userGuid}
                                businessGuid={businessGuid}
                            />
                        </div> :
                        (<div className=' mt-2 border-[1px] rounded-lg p-3 mb-6'>
                            Gallery is empty
                        </div>)
                }



            </ContentLayout>
        </AccountLayout>
    )
}

export default index
