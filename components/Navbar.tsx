import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import {AiOutlineLogout} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {GoogleLogin, googleLogout} from "@react-oauth/google"
import {IoMdAdd} from "react-icons/io"
import Logo from "../utils/logo.png"
import { createOrGetUser } from '../utils'
import  useAuthStore from "../store/authStore"

const Navbar = () => {
  const {userProfile, addUser, removeUser} = useAuthStore()
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4' >
        <Link href="/">
        <div className='w-[100px] md:w-[130px]' >
            <Image src={Logo} alt="logo" className="cursor-pointer" />
        </div>
        
        </Link>
        <div>Search</div>
        <div>
          {userProfile ? (
            <div className='flex gap-5 md:gap-10 '>
              <Link href="/upload">
                <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2 '>
                  <IoMdAdd className='text-xl' /> {" "}
                  <span className='hidden md:block' >Upload</span>
                </button>
              </Link>
              {/* @ts-expect-error */}
             {userProfile.image && <Link href="/">
              <>
                {/* @ts-expect-error */}
              <Image width={40} height={40} src={userProfile.image} alt="profile Photo" className='rounded-full cursor-pointer' />
              </>
            </Link>}
            <button type='button' onClick={()=>{googleLogout();removeUser()}}>
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
            </div>
          ): (
            <GoogleLogin onSuccess={(response)=> createOrGetUser(response, addUser) }
            
            onError={() => console.log("error")} />
          )}
        </div>
    </div>
  )
}

export default Navbar