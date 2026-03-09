import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {/* pt-16 adds 4rem of padding to match your navbar's h-16.
          flex-1 ensures the content takes up the remaining space.
      */}
      <div className='flex-1 pt-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;