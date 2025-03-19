"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/clerk-react'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function DashboardHeader({ setOpenSideNav }) {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
            <Image src={'/logo.svg'} alt='logo' width={80} height={60}/>
        </div>
        <div className='flex items-center'>
            <UserButton/>
            <Button 
              onClick={() => setOpenSideNav((prev) => !prev)} 
              className="bg-white text-black p-2 ml-2 hover:bg-gray-200"
            >
                <Menu />
            </Button>
        </div>
    </div>
  )
}

export default DashboardHeader