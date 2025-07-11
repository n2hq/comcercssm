import { createContext, useContext, useState } from "react";
import { useNotification } from "./NotificationContext";

const AddPhotoDialogContext = createContext<any | null>(null)

export function useAddPhotoDialogContext() {
    const context = useContext(AddPhotoDialogContext)
    /* if (!context) {
        throw new Error("useAddPhotoDialogContext must be used within an AuthProvider")
    } */
    return context
}

export function AddPhotoDialogProvider({ children }: any) {
    const [working, setWorking] = useState<any>(false)
    const [dialog, setDialog] = useState<any>(false)
    const [imgSrc, setImgSrc] = useState<any>(null)
    const [userGuid, setUserGuid] = useState<any>(null)
    const [businessGuid, setBusinessGuid] = useState<any>(null)
    const [isImgSelected, setIsImageSelected] = useState<any>(false)
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const notification = useNotification()


    const handleCloseDialog = () => {
        setDialog(false)
        setImgSrc(null)
    }

    const handleUpload = async () => {
        setWorking(true)
        //await new Promise((resolve) => setTimeout(resolve, 1000));

        let imageTitle = document.getElementById("image_title") as HTMLInputElement

        if (isImgSelected) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('guid', userGuid)
            formData.append('bid', businessGuid)
            formData.append('image_title', imageTitle.value)

            notification.notify()
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL
            const endpoint = "/business_gallery_pic_upload"
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
                    notification.alertReload('', 'Image uploaded successfully!')

                }

            } catch (error) {
                return undefined
            } finally {
                setWorking(false)
            }
        } else {
            alert('Please select an image to continue.')
            setWorking(false)
        }
    }

    let vals = {
        dialog, setDialog,
        imgSrc, setImgSrc,
        handleCloseDialog,
        userGuid, setUserGuid,
        businessGuid, setBusinessGuid,
        isImgSelected, setIsImageSelected,
        selectedFile, setSelectedFile
    }


    return (
        <AddPhotoDialogContext.Provider value={vals}>
            {
                dialog &&
                <div

                    className={`flex w-screen h-screen z-[3000] 
                fixed top-0 left-0 right-0 bottom-0 bg-black/30
                place-content-center place-items-center`}>
                    <div className={`relative w-[90%] h-[80%] bg-white 
                        rounded-[8px] overflow-hidden z-[3000]`}
                        onClick={(event) => {
                            event.preventDefault()
                        }}
                    >
                        <div className={`relative w-full h-[75%] bg-black`}>
                            <img
                                src={imgSrc}
                                alt=""
                                className={`object-scale-down w-full h-full`}
                            />
                        </div>

                        { /** description */}
                        <div>
                            <input
                                id='image_title'
                                placeholder={`Enter picture description.`}
                                type="text"
                                className={`w-full bg-gray-100 px-3  h-[60px]`}
                            />
                        </div>

                        <div className={`flex place-content-end px-3 gap-2`}>
                            <button
                                onMouseDown={() => handleCloseDialog()}
                                className={`bg-gray-800 text-white px-3 py-1.5 rounded-md
                                    shadow-md mb-2 mt-4`}
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => handleUpload()}
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
            }
            {children}
        </AddPhotoDialogContext.Provider>
    )
}