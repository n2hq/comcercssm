import React, { useEffect } from 'react'
import { useAuth } from '~/context/AuthContext'
import { useNotification } from '~/context/NotificationContext'
import { useRating } from '~/context/RatingContext'
import { ListingType } from '~/lib/Interfaces'
import { getRating } from '~/lib/Lib'

const Review = ({ listing }: any) => {
    const rating = useRating()
    const { user } = useAuth()
    const notification = useNotification()


    useEffect(() => {
        if (listing?.gid && user?.guid) {

            rating.setListing(listing)
            getRating(user.guid, listing.gid).then((data) => {
                if (data?.length !== 0) {
                    rating.reset(data)
                    rating.setRatingData(data)
                } else {
                    rating.validateData(data, user)
                }



            })
        }
    }, [listing, user])

    const handleDialogResult = (confirmed: boolean) => {
        if (confirmed) {
            alert('confirmed')
        } else {
            alert('not confirmed')
        }
    }

    const handleResult = (confirmed: boolean) => {
        if (confirmed) {
            notification.cancel()
            window.location.href = "/signin"
        } else {
            notification.cancel()
        }
    }


    const handleShow = () => {
        if (user?.guid === null || user?.guid === undefined) {
            notification.confirm('Login to continue', handleResult)
        } else {
            rating.setShow(true)
        }

        /*  if (user?.guid === null || user?.guid === undefined) {
             notification.confirm('Login to continue', handleDialogResult)
         }
         else {
             rating.setShow(true)
         } */
    }


    return (
        <div className={`mx-auto w-full sm:w-[60%] lg:w-full mt-3`}>
            <button
                onClick={() => handleShow()}
                className={`bg-blue-500 text-white flex flex-col
                items-center py-2 w-full `}>
                Write Review
            </button>
        </div>
    )
}

export default Review
