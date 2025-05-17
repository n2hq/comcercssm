import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import Logo from '../header/Logo'
import { Link } from '@remix-run/react'

const discover = [
    {
        title: "New York"
    },
    {
        title: "London"
    },
    {
        title: "Dubai"
    },
    {
        title: "Chicago"
    },
    {
        title: "Brussels"
    },
    {
        title: "Germany"
    },
    {
        title: "Abu Dhabi"
    }
]

const Footer = () => {
    return (
        <>
            <div className={`h-[100px]`}></div>
            <div className=' pt-10 pb-12 bg-black w-full px-[15px]'>
                <div className={`max-w-[1100px] mx-auto w-full`}>
                    <div>
                        <Logo theme='dark' />
                    </div>
                    <hr className={`border-b-0 border-t-[1px] border-gray-500/50`} />
                    <p className=' text-center mt-4 text-sm text-white/40 font-extralight'>
                        Copyright 2025 &copy; | <a href='/'>comcerc.com</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
