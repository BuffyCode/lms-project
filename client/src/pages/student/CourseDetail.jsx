import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeInfo, PlayCircle, Users, Lock, Play ,Check} from 'lucide-react' // Added Lock and Play
import React from 'react'
import { Button } from '@/components/ui/button'
import BuyCourseButton from '@/components/BuyCourseButton';

function CourseDetail() {
    const courseLearnPoints = [
        "Master MERN stack from scratch",
        "Build a professional LMS project",
        "Handle complex Authentication & Authorization",
        "Integrate Cloudinary for image and video uploads",
        "State management using Redux Toolkit",
        "Deploying full-stack apps to Vercel and Render"
    ];
    return (
        <div className='w-full'>
            {/* Dark Header Section */}
            <div className='bg-[#2D2F31] text-white py-10 md:py-14'>
                <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-4'>
                    <h1 className='font-extrabold text-3xl md:text-4xl tracking-tight'>
                        Course Title
                    </h1>
                    <p className='text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed'>
                        Course Subtitle
                    </p>
                    <p className='text-sm md:text-base'>
                        Created By{" "}
                        <span className='text-[#C0C4FC] underline italic font-medium cursor-pointer'>
                            Kumar Manglam
                        </span>
                    </p>
                    <div className='flex flex-wrap items-center gap-6 mt-2 text-sm text-gray-300'>
                        <div className='flex items-center gap-2'>
                            <BadgeInfo size={18} className="text-[#C0C4FC]" />
                            <p>Last Updated: 01/04/2026</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Users size={18} className="text-[#C0C4FC]" />
                            <p>100 Students Enrolled</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content & Sidebar Grid */}
            <div className='max-w-7xl mx-auto my-10 px-4 md:px-8 flex flex-col lg:flex-row gap-10'>

                {/* Left Side: Course Info & Lectures */}
                <div className='w-full lg:w-[65%] space-y-8'>
                    <div className='border-gray-200 p-6 mb-4'>
                        <h1 className='font-bold text-xl'>What you'll learn</h1>
                        <div className='grid-cols-2 md:grid-cols-2 gap-4'>
                            {courseLearnPoints.map((point,idx)=>(
                                <div key={idx} className='flex items-start gap-3 text-sm'>
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0"/>
                                    <p className='font-medium text-gray-700 dark:text-gray-300'>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-2xl md:text-3xl'>Description</h1>
                        <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                            This is a comprehensive course for Web Development. You can learn full stack development within days.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Course Content</CardTitle>
                            <CardDescription>4 lectures</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[1, 2, 3, 4].map((lecture, idx) => (
                                <div key={idx} className='flex items-center justify-between group cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                                    <div className='flex items-center gap-3 text-sm'>
                                        <span>
                                            {/* Logic: idx === 0 (first lecture) is free preview */}
                                            {idx === 0 ? <PlayCircle size={16} className='text-blue-600' /> : <Lock size={16} className='text-gray-400' />}
                                        </span>
                                        <p className='font-medium'>Lecture {idx + 1}: Title Goes Here</p>
                                    </div>
                                    {idx === 0 && <span className='text-xs text-blue-600 font-bold underline'>Preview</span>}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side: Sticky Checkout Sidebar */}
                <div className='w-full lg:w-[35%]'>
                    <Card className='sticky top-24 z-10 overflow-hidden'>
                        <CardContent className='p-0 flex flex-col'>
                            {/* Video Preview Aspect Ratio Box */}
                            <div className='w-full aspect-video bg-black relative flex items-center justify-center group cursor-pointer'>
                                <img
                                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                                    alt="Course Thumbnail"
                                    className='w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity'
                                />
                                <div className='absolute bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform'>
                                    <Play size={32} className='text-white fill-white' />
                                </div>
                                <p className='absolute bottom-4 text-white font-bold text-sm'>Preview this course</p>
                            </div>

                            <div className='p-6 space-y-4'>
                                <h1 className='text-3xl font-bold'>₹499</h1>
                                <BuyCourseButton />
                                <div className='text-xs text-center text-gray-500 space-y-2'>
                                    <p>Full Lifetime Access</p>
                                    <p>Access on mobile and TV</p>
                                    <p>Certificate of completion</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail