import React, { useState, useEffect } from 'react'
import axios from 'axios'
import linkedinLogo from '../assets/linkedin-logo.svg'
import githubLogo from '../assets/github-logo.svg'
import youtubeLogo from '../assets/youtube-logo.svg'
import { Carousel } from 'flowbite-react'

export default function SocialIntro() {

    const [media, setMedia] = useState([]);

    const fetchMediaData = async function () {
        const result = await axios.get("http://localhost:8080/media")
        return result.data
    }

    useEffect(() => {
        fetchMediaData().then(
            mediaData => setMedia(mediaData)
        )
    }, []);

    const cardRenderer = (mediaData) => {
        return mediaData.map((mediaItem, index) =>
            <div className="h-full">
                <a href={media.link}>
                    <img className='absolute left-1/2 -translate-x-1/2 z-10 h-4/5' src={mediaItem.image} alt="" /></a>
                <div className='bg-neutral-700 absolute h-2/5  w-full rounded-2xl top-3/5 pt-3/20 grid grid-rows-2 px-10'>
                    <p className='pt-4 mx-auto text-ellipsis w-full truncate'><span className='rounded-md py-1 px-2 bg-[#8CA085] text-white'>{mediaItem.tag}</span> {mediaItem.title}</p>
                </div>
            </div>
        )
    }

    const dummyMediaRenderer = (media) => {
        return <Carousel>
            {cardRenderer(media)}
        </Carousel>
    }

    const dummyIframe = (classes) => <iframe className={classes} width="560" height="315" src="https://www.youtube.com/embed/zAnO83iRcFs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    return (

        <div className='bg-white h-[90vh] grid grid-rows-12 grid-cols-12 pt-10' id='blog'>
            <div className='relative row-start-3 col-start-2 row-span-7 col-span-5'>
                {dummyIframe('absolute z-10')}
                <div className='bg-neutral-500 absolute right-0 bottom-0 h-1/3 w-4/5 mr-5 pt-14 pl-5 text-4xl font-semibold'> Watch my last video</div>
            </div>
            <div className="bg-neutral-100 rounded-md p-2 row-start-2 col-start-8 col-span-4 flex">
                <a href="https://www.linkedin.com/in/santiago-tovar/" target="_blank">
                    <img src={linkedinLogo} alt="" className='h-full w-full outline-orange-300' />
                </a>
                <a href="https://github.com/satovarr/" target="_blank">
                    <img src={githubLogo} alt="" className='h-full w-full' />
                </a>
                <a href="https://www.youtube.com/@dumio8480/videost" target="_blank">
                    <img src={youtubeLogo} alt="" className='h-full w-full p-1' />
                </a>
            </div>
            <div className="row-start-4 col-start-8 row-span-7 col-span-4">
                {/* <img className='absolute left-1/2 -translate-x-1/2 z-10 h-4/5' src={dummyPicture} alt="" />
              <div className='bg-neutral-500 absolute h-2/5 left-1/12 w-5/6 rounded-2xl top-3/5 px-6 pt-3/20 grid grid-rows-2'>
                  <p className='pt-3 mx-auto'><span className='rounded-md py-1 px-2 bg-[#8CA085] text-black'>video</span>  Qué es la vida? | podcast #1</p>
              </div> */}
                {media && dummyMediaRenderer(media)}

            </div>

        </div>
    )
}
