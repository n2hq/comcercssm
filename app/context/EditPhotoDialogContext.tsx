import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { headers } from "~/lib/lib";
import { useNotification } from "./NotificationContext";


const EditPhotoDialogContext = createContext<any | null>(null)

export function useEditPhotoDialogContext() {
    const context = useContext(EditPhotoDialogContext)
    /* if (!context) {
        throw new Error("useEditPhotoDialogContext must be used within an EditPhotoDialogProvider")
    } */
    return context
}

export function EditPhotoDialogProvider({ children }: any) {

    const [working, setWorking] = useState<any>(false)
    const [dialog, setDialog] = useState<any>(false)
    const [imgSrc, setImgSrc] = useState<any>(null)
    const [userGuid, setUserGuid] = useState<any>(null)
    const [businessGuid, setBusinessGuid] = useState<any>(null)
    const [isImgSelected, setIsImageSelected] = useState<any>(false)
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [imageTitle, setImageTitle] = useState<any>(null)
    const [imageGuid, setImageGuid] = useState<any>(null)
    const [formData, setFormdata] = useState<any | null>(null)

    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const notification = useNotification()

    const handleCloseDialog = () => {
        setDialog(false)
        setImgSrc(null)
        setWorking(false)
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setImgSrc(imageUrl)
            setSelectedFile(file)
            setIsImageSelected(true)
        }
    }

    const handleUpdate = async () => {
        notification.notify()
        setWorking(true)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        let imageTitle = document.getElementById("image_title") as HTMLInputElement

        const formData = new FormData();

        if (isImgSelected) {
            formData.append('file', selectedFile);
        }

        formData.append('guid', userGuid)
        formData.append('bid', businessGuid)
        formData.append('image_title', imageTitle.value)
        formData.append('image_guid', imageGuid)

        const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL
        const endpoint = "/business_gallery_pic_update"
        const url = IMG_BASE_URL + endpoint

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"
                },
                body: (formData)
            })

            if (!response.ok) {
                let error = response.json().then((data) => {
                    notification.alert('', data.message)
                })

            } else {
                notification.alert('Image Update', 'Image updated successfully!')
            }

        } catch (error) {
            return undefined
        } finally {
            setWorking(false)

        }

    }

    const deletePhoto = async (userGuid: string, businessGuid: string, imageGuid: string) => {
        const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL
        const endpoint = `/delete_business_gallery_pic`
        const url = IMG_BASE_URL + endpoint

        const data = {
            guid: userGuid,
            bid: businessGuid,
            image_guid: imageGuid
        }

        setWorking(true)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                let error = response.json().then((data) => {
                    notification.alert(data.message)
                })

            } else {
                notification.alertReload('', 'Image deleted successfully!')
            }

        } catch (error: any) {
            return alert(error.message)
        } finally {
            setWorking(false)

        }
    }


    let vals = {
        dialog, setDialog,
        handleCloseDialog,
        imgSrc, setImgSrc,
        userGuid, setUserGuid,
        businessGuid, setBusinessGuid,
        isImgSelected, setIsImageSelected,
        selectedFile, setSelectedFile,
        imageTitle, setImageTitle,
        imageGuid, setImageGuid,
        deletePhoto
    }

    return (
        <EditPhotoDialogContext.Provider value={vals}>
            {
                dialog &&
                <div className={`fixed w-screen h-screen bg-black/30 z-[3000]`}>
                    <div className={`fixed w-screen h-screen z-[3000] 
                 top-0 left-0 right-0 bottom-0 bg-black/30
                place-content-center place-items-center`}>
                        <div className={`relative max-w-[90%] w-[90%] h-[80%] bg-white 
                        rounded-[8px] overflow-hidden z-[3100] mx-auto `}

                        >
                            <div className={`w-full h-full overflow-y-auto`}>
                                <div className={`relative w-full h-[75%] bg-black`}>
                                    <img
                                        src={imgSrc}
                                        alt=""
                                        className={`object-scale-down w-full h-full`}
                                    />
                                    <input type="file"
                                        accept='image/*'
                                        ref={fileInputRef}
                                        className='hidden'
                                        onChange={handleFileChange}
                                    />

                                    <div
                                        className={`flex place-content-center place-items-center
                                        bg-black/10 w-full h-full absolute z-0 top-0 object-cover
                                        text-white/80 `}
                                        onMouseDown={handleImageClick}
                                    >
                                        <div className={`w-[60px] h-[60px] flex flex-col
                                        place-content-center place-items-center bg-white/50
                                        hover:cursor-pointer hover:bg-white/50
                                        rounded-full transition duration-300 ease-in-out`}>
                                            <MdEditSquare className=' text-[30px]' />
                                        </div>
                                    </div>
                                </div>

                                <div className={`h-[25%]`}>

                                    <textarea
                                        onChange={(e) => setImageTitle(e.target.value)}
                                        id='image_title'
                                        value={imageTitle}
                                        placeholder={`Enter picture description.`}
                                        className={`w-full bg-gray-100 px-3  h-[100px] py-3`}
                                    ></textarea>

                                    <div className={`flex place-content-end px-3 gap-2`}>
                                        <button
                                            onMouseDown={() => handleCloseDialog()}
                                            className={`bg-gray-800 text-white px-3 py-1.5 rounded-md
                                    shadow-md mb-2 mt-4`}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            onClick={() => handleUpdate()}
                                            className={`bg-blue-800 text-white px-3 py-1.5 rounded-md
                                    shadow-md mb-2 mt-4`}
                                        >
                                            {
                                                working ? 'Working...' : 'Submit'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            }
            {children}
        </EditPhotoDialogContext.Provider>
    )
}
