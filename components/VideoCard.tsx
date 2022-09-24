import React,{useState, useEffect, useRef} from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
import Image from "next/image"
import Link from "next/link"
import {HiVolumeUp, HiVolumeOff} from "react-icons/hi"
import {BsFillPlayFill, BsFillPauseFill,BsPlay} from "react-icons/bs"
import {GoVerified} from "react-icons/go"


interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {

  const [isHover, setisHover] = useState(false)
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onVideoPress = () => {
    if(play) {
      // @ts-expect-error
      videoRef?.current.pause()
      setPlay(false)
    }
    else {
      // @ts-expect-error
      videoRef?.current.play()
      setPlay(true)
    }
  }

  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h16 w-10 h-10">
            <Link href="/">
              <>
              <Image width={62} height={62} src={post.postedBy.image} alt="profile Photo" className='rounded-full' layout='responsive' />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className='flex items-center gap-2'>
               <p className='flex gap-2 items-center md: text-md font-bold text-primary'>
                {post.postedBy.userName}
               <GoVerified className='text-blue-400 
               text-md' />
               </p>
               <p>
               {post.postedBy.userName}
              </p> 
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:ml-20 flex gap-4 relative">
        <div
        onMouseEnter={()=> {setisHover(true)}}
        onMouseLeave={()=> {setisHover(false)}}
        className="rounded-3xl">
          <Link href={`/detail/${post._id}`} >
            <video src={post.video.asset.url} loop ref={videoRef} className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100 '></video>
          </Link>

          {isHover && (
            <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg: justify-between w-[100px] md:w-[50px] p-3' >
              {play ?( <button onClick={onVideoPress} className='text-blac text-2xl lg: text-4xl'><BsFillPauseFill/></button>) :  (<button
              onClick={onVideoPress} className='text-blac text-2xl lg: text-4xl'><BsFillPlayFill/></button>)}

              {muted ?( <button onClick={()=> setMuted(false)} className='text-blac text-2xl lg: text-4xl'><HiVolumeOff/></button>) :  (<button 
              onClick={()=> setMuted(true)}
              className='text-blac text-2xl lg: text-4xl'><HiVolumeUp/></button>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoCard