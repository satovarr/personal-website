import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalContainer from './Modal';

export default function Skills() {
    const [jobs, setJobs] = useState([]);
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const fetchExperienceData = async function () {
        const jobsData = [];
        const coursesData = [];
        const result = await axios.get("http://localhost:8080/experience")
        result.data.forEach((el) => {
            el.type === 'job' ? jobsData.push(el) : coursesData.push(el);
        })
        return [jobsData, coursesData]
    }

    const experienceRenderer = (experiences) => {
        return experiences.map((experience, index) =>
            <>
                <div key={experience.id + "l"} className=
                    {index > 0 ?
                        "h-14 w-px ml-7 my-2 bg-slate-50" : ""}
                >
                </div>
                <div key={experience.id} className='flex gap-1 h-14 cursor-pointer  my-2 ' onClick={() => handleExperienceClick(experience)}>
                    <div className='bg-[#8CA085] h-14 rounded-full w-14'></div>
                    <p className='leading-3 pt-1.5 px-2 rounded-md hover:bg-neutral-900'><span className='font-semibold text-lg'>{experience.name}</span><br /> {experience.entity}</p>
                </div>
            </>)
    }



    useEffect(() => {
        fetchExperienceData().then(
            ([jobsData, coursesData]) => {
                setJobs(jobsData)
                setCourses(coursesData)
            }
        )
    }, []);


    const handleExperienceClick = (el) => {
        setModalContent(el)
        setShowModal(true)
    }

    return (
        <>
            <div className='h-[90vh] flex' id='skills'>
                <div className='basis-1/2 flex gap-6 pl-24 pt-24'>
                    <div className='basis-1/2'>
                        <p className='text-4xl pb-8'>Experiencia</p>
                        <div className='grid'>
                            {jobs && experienceRenderer(jobs)}

                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <p className='text-4xl pb-8'>Certificados</p>
                        <div className='grid'>
                            {courses && experienceRenderer(courses)}
                        </div>
                    </div>

                </div>
                <div className='basis-1/2 flex flex-col justify-around m-6'>
                    <div>
                        <p className='text-2xl font-semibold'>Soft skills</p>
                        <p className='text-lg'>Scrum, Team leadership </p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Databases</p>
                        <p className='text-lg'>SQL, Firebase </p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Back End</p>
                        <p className='text-lg'>Flask, Django, FastApi, NodeJS, .NET, SpringBoot </p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Front End</p>
                        <p className='text-lg'>React, TailwindCSS, Bootstrap, Axios</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Architecture and Serverless</p>
                        <p className='text-lg'>Docker, AWS, micro services </p>
                    </div>
                </div>
            </div>
            <ModalContainer showModal={showModal} setShowModal={setShowModal} modalContent={modalContent} setModalContent={setModalContent} />
        </>
    )
}
