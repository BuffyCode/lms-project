import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/course/search?query=${searchQuery}`);
        }
    };

    return (
        <div className='relative bg-white dark:bg-[#020617] py-16 px-4 overflow-hidden'>
            
            {/* Subtle Ambient Backgrounds */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-400/10 dark:bg-purple-900/5 rounded-full blur-[80px]" />
            </div>

            <div className='max-w-3xl mx-auto relative z-10 text-center'>
                
                {/* Compact Typography */}
                <h1 className='text-gray-900 dark:text-white text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight'>
                    Find the Best <span className='bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent'>Courses</span> for You
                </h1>
                
                <p className='text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto'>
                    Discover, learn and upskill with our wide range of courses from world-class industry experts.
                </p>

                {/* Refined Search Bar */}
                <div className='relative max-w-xl mx-auto'>
                    <form 
                        onSubmit={searchHandler}
                        className='flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.4)] border border-gray-200 dark:border-gray-800 p-1.5 transition-all focus-within:border-blue-500'
                    >
                        <div className="pl-4 text-gray-400">
                            <Search size={18} />
                        </div>
                        <Input 
                            type='text' 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for courses..."
                            className="flex-grow border-none focus-visible:ring-0 px-4 py-6 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent" 
                        />
                        <Button 
                            type="submit" 
                            className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 h-10 rounded-full font-bold shadow-md active:scale-95 transition-all"
                        >
                            Search
                        </Button>
                    </form>
                </div>

                {/* Mini CTA */}
                <Button 
                    variant="link"
                    onClick={() => navigate("/course/search?query=")}
                    className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:no-underline hover:text-blue-700"
                >
                    Explore all courses →
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;