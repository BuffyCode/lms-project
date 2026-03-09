import { Menu, School } from 'lucide-react'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from '@/components/DarkMode'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await logoutUser();
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || 'Logged out successfully');
            navigate('/login');
        }
    }, [isSuccess, navigate]);

    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-50 shadow-sm'>
            {/* Desktop View */}
            <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full px-6">
                <Link to="/" className="flex items-center gap-2">
                    <School size={"30"} className="text-primary" />
                    <h1 className='font-extrabold text-2xl tracking-tighter'>E-Learning</h1>
                </Link>

                <div className="flex items-center gap-8">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer border border-gray-200 dark:border-gray-700">
                                    <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} />
                                    <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" sideOffset={11}>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate('/my-learning')}>My Learning</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/profile')}>Edit Profile</DropdownMenuItem>
                                    <DropdownMenuItem onClick={logoutHandler} className="text-red-500">Log out</DropdownMenuItem>
                                </DropdownMenuGroup>
                                {user.role === 'instructor' && (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => navigate('/admin/dashboard')}>Dashboard</DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
                            <Button onClick={() => navigate("/login")}>Signup</Button>
                        </div>
                    )}
                    <DarkMode />
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden items-center justify-between px-4 h-full">
                <h1 className='font-extrabold text-2xl'>E-Learning</h1>
                <MobileNavbar user={user} logoutHandler={logoutHandler} />
            </div>
        </div>
    )
}

export default Navbar

const MobileNavbar = ({ user, logoutHandler }) => {
    const navigate = useNavigate();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className="rounded-full bg-gray-100 dark:bg-gray-800" variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-5">
                    <SheetTitle>E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className='my-4' />
                <nav className="flex flex-col space-y-4">
                    <Link to="/my-learning" className="hover:text-primary transition-colors">My Learning</Link>
                    <Link to="/profile" className="hover:text-primary transition-colors">Edit Profile</Link>
                    <button onClick={logoutHandler} className="text-left text-red-500">Log Out</button>
                </nav>
                {user?.role === "instructor" && (
                    <SheetFooter className="mt-auto">
                        <SheetClose asChild>
                            <Button className="w-full" onClick={() => navigate('/admin/dashboard')}>Dashboard</Button>
                        </SheetClose>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
}