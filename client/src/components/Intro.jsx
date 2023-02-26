import React from 'react';
import introPicture from '../assets/intro-picture.png'

export default function Intro() {

    const stack_summary = ["aws", "flask", "django", "fastapi", "scrum", "docker"];

    return (
        <>
            <div className='container max-w-full h-[85vh] columns-2'>
                <div className='container h-full pt-32 pl-12 grid grid-rows-12'>
                    <h1 className='text-6xl font-semibold row-span-2'>Full Stack Engineer</h1>
                    <h5 className='text-4xl row-span-3 leading-none'>SANTIAGO <br />TOVAR</h5>
                    <div className='grid gap-2 grid-cols-3 row-span-4'>
                        {stack_summary.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </div>
                    <div className='row-span-2'></div>
                    <div className='flex gap-2 justify-around text-2xl font-semibold underline-offset-4 decoration-1 underline'>
                        <a href="#blog"><p className=''>Blog</p></a>
                        <a href="#skills"><p className=''>Projects</p></a>
                        <a href="#skills"><p className=''>Skills</p></a>
                    </div>
                </div>
                <img className='object-cover h-full ml-auto' src={introPicture} alt="" />
            </div>
            <div className='sticky z-40 top-0 w-full h-20 bg-black'></div>
        </>
    )
}
