"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/clerk-react'
import { LayoutGrid, Menu, PiggyBank, ReceiptText, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function SideNav({openSideNav, setOpenSideNav}) {
    const menuList=[
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
    ];
    const path = usePathname();

    return (
        <div>
            { openSideNav && (
                <div className='h-screen p-5 border shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <Image src={'/logo.svg'} alt='logo' width={80} height={60}/>
                        <Button onClick={() => setOpenSideNav(false)} className="bg-white text-black p-2 rounded-md shadow-md hover:bg-gray-200"> 
                            <X />
                        </Button>
                    </div>
                    <div className='mt-5'>
                        {menuList.map((menu, index) => (
                            <Link 
                                key={menu.id} 
                                href={menu.path} 
                                onClick={() => setOpenSideNav(false)}
                            >
                                <h2 className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-[var(--primary)] hover:bg-orange-100 mb-2 ${path==menu.path && 'text-[var-(primary)] bg-orange-100'}`}>
                                    <menu.icon/>
                                    {menu.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                    <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
                        <UserButton/>
                        Profile
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideNav