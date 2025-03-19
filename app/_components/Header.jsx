"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/clerk-react'
import Link from 'next/link'


function Header() {
    const {user, isSignedIn} = useUser()
    return (
        <div className='p-5 flex justify-between items-center border shadow-md'>
            <Image src={'./logo.svg'} alt="logo" width={80} height={60}/>
            {isSignedIn ? 
                <UserButton/> : 
                <Link href={'/sign-in'}>
                    <Button className='hover:bg-orange-500'>Sign In</Button>    
                </Link>
            }
            
        </div>
    )
}

export default Header