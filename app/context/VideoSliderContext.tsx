import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgMaximize } from "react-icons/cg";
import { FaMaximize, FaMinimize } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { getYoutubeId } from "~/lib/lib";
import { AddVideoType } from "~/lib/types";

const VideoSliderContext = createContext<any | null>(null)

export function useVideoSliderContext() {
    const context = useContext(VideoSliderContext)
    /* if (!context) {
        throw new Error("useSliderContext must be used within a SliderProvider")
    } */
    return context
}

const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL

export const VideoSliderProvider = ({ children }: any) => {
    const [dialog, setDialog] = useState<any>(false)
    const [selectedSlide, setSelectedSlide] = useState<any>(null)
    const [slides, setGallery] = useState<AddVideoType[] | []>([])
    const [currentSlide, setCurrentSlide] = useState<any>(0)
    const [listing, setListing] = useState<any>(null)
    const slideStep = useRef(0)
    const counter = useRef(0)
    let slideIncrement = 0

    const [maximized, setMaximized] = useState(false)

    const handleTouchStart = (e: any) => {
        slideStep.current = e.touches[0].clientX;
    }

    const handleTouchEnd = (e: any) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = slideStep.current - endX;

        if (deltaX > 50) {
            // swipe left
            setCurrentSlide((i: any) => (i + 1) % slides.length);
        } else if (deltaX < -50) {
            // swipe right
            setCurrentSlide((i: any) => (i - 1 + slides.length) % slides.length);
        }
    };

    const handleClose = () => { setDialog(false) }
    const handleOpen = () => { setDialog(true) }

    const prev = () => {
        {/** current count */ }
        let currentCount = currentSlide
        const currentVideo = slides[currentCount]
        const currentIframe: any = document.getElementById(currentVideo?.video_guid)
        currentIframe.src = ""

        let prevCount = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1
        const prevVideo = slides[prevCount]
        const iframeObject: any = document.getElementById(prevVideo?.video_guid)
        const videoId: string | null = getYoutubeId(prevVideo?.video_url)
        iframeObject.src = `https://www.youtube.com/embed/${videoId}`



        setCurrentSlide((currentSlide: any) => {
            return (currentSlide === 0) ? slides.length - 1 : currentSlide - 1
        })
    }

    const next = () => {

        {/** current count */ }
        let currentCount = currentSlide
        const currentVideo = slides[currentCount]
        const currentIframe: any = document.getElementById(currentVideo?.video_guid)
        currentIframe.src = ""

        {/** next count */ }

        let nextCount = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1
        const nextVideo = slides[nextCount]
        const iframeObject: any = document.getElementById(nextVideo?.video_guid)
        const videoId: string | null = getYoutubeId(nextVideo?.video_url)

        iframeObject.src = `https://www.youtube.com/embed/${videoId}`


        setCurrentSlide((currentSlide: any) => {
            return (currentSlide === slides.length - 1) ? 0 : currentSlide + 1
        })
    }

    useEffect(() => {
        if (selectedSlide !== null) {
            setCurrentSlide(selectedSlide - 1)
        }
    }, [selectedSlide])

    let vals = {
        dialog, setDialog,
        selectedSlide, setSelectedSlide,
        slides, setGallery,
        setListing
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose()
            }
        }

        if (dialog) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [dialog])

    return (
        <VideoSliderContext.Provider value={vals}>
            {
                dialog &&
                <div className={`flex w-screen h-screen bg-white z-[20001] 
                fixed top-0 left-0 right-0 bottom-0 `}>
                    <div className={`grid grid-cols-12 gap-0 w-full`}>
                        <div className={`${maximized ? 'col-span-12' : 'col-span-12 md:col-span-9'}  w-full h-full relative bg-black flex`}>
                            <div className={` w-full h-screen flex overflow-hidden`}>
                                {
                                    slides && selectedSlide &&
                                    slides.map((slide: AddVideoType, index: number) => {
                                        console.log(slide?.video_url)
                                        const videoId = getYoutubeId(slide?.video_url)
                                        const videoSrc = `https://www.youtube.com/embed/${videoId}`
                                        const uniqueId = Date.now().toString() + videoId
                                        return (
                                            <div

                                                key={index}
                                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                                className="object-scale-down w-full h-full 
                   block flex-shrink-0 flex-grow-0 transition-transform 
                   ease-in-out duration-1000 relative"
                                            >
                                                <iframe
                                                    id={slide?.video_guid}
                                                    src={videoSrc}
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button onMouseDown={() => {

                                prev()
                            }} className={`block absolute top-0 bottom-0 
                                                p-[1rem] cursor-pointer left-0 group h-full 
                                                transition duration-1000 ease-in-out`}>
                                <div className={`w-[50px] h-[50px] bg-white/60 rounded-full flex place-content-center place-items-center group-hover:bg-white/30
                                                        transition duration-500 ease-in-out`}>
                                    <BiChevronLeft className=' stroke-white fill-black w-[2rem] h-[2rem]' />
                                </div>

                            </button>
                            <button onMouseDown={next} className={`block absolute top-0 bottom-0 
                                                    p-[1rem] cursor-pointer ${maximized ? 'right-5' : 'right-5 md:right-0'}  group 
                                                     transition duration-1000 ease-in-out`}>
                                <div className={`w-[50px] h-[50px] bg-white/60 rounded-full flex place-content-center place-items-center group-hover:bg-white/30
                                                        transition duration-500 ease-in-out`}>
                                    <BiChevronRight className=' stroke-white fill-black w-[2rem] h-[2rem]' />
                                </div>
                            </button>

                            {/** close button handle */}
                            <div
                                onMouseDown={() => handleClose()}
                                className={`w-[50px] h-[50px] z-[300] bg-white
                                                    flex place-content-center place-items-center
                                                    rounded-full absolute left-2 top-2 cursor-pointer
                                                    hover:bg-white/40 transition duration-1000 ease-in-out`}>
                                <IoClose className={`text-[30px]`} />
                            </div>

                            {/** Maximize or Minimize */}
                            <div
                                onClick={() => { setMaximized(!maximized) }}
                                className={`w-[50px] h-[50px] z-[300] bg-white flex place-content-center place-items-center rounded-full absolute ${maximized ? 'right-10' : 'right-10 md:right-5'} top-20 cursor-pointer hover:bg-white/40 transition duration-1000 ease-in-out`}>
                                {
                                    maximized ?
                                        <FaMinimize className={`text-[30px]`} />
                                        :
                                        <FaMaximize className={`text-[30px]`} />
                                }
                            </div>
                        </div>
                        <div className={`${maximized ? 'hidden' : 'hidden md:block md:col-span-3'}   px-5 overflow-x-hidden overflow-y-auto h-full bg-blue-200`}>
                            <h1 className=' text-[22px] my-4 font-sans font-extrabold tracking-tight leading-[24px]'>Videos for {listing && listing.title}</h1>
                            <div className=' my-4 '>{currentSlide + 1} / {slides.length}</div>
                            <hr />
                            <div className={`my-4 whitespace-pre-line border-b pb-2`}>{slides[currentSlide].video_title}</div>

                            {
                                slides[currentSlide].video_description &&
                                <div className={`my-4 whitespace-pre-line  pt-0 pb-8 `}>
                                    <div className={`font-bold text-lg mb-3`}>
                                        Description
                                    </div>
                                    <div>
                                        {slides[currentSlide].video_description}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {children}
        </VideoSliderContext.Provider>
    )
}