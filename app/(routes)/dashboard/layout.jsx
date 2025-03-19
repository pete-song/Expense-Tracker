"use client"

import React, { useEffect, useState } from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { Budgets } from '@/utils/schema'
import { useRouter } from 'next/navigation'

function DashboardLayout({children}) {
    const {user} = useUser();
    const router = useRouter();

    useEffect(() => {
        user && checkUserBudgets(); 
    }, [user])

    const checkUserBudgets = async () => {
        const results = await db.select()
            .from(Budgets)
            .where(
                eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress)
            )
        console.log('checkUserBudgets', results);
        if (results?.length == 0) {
            router.replace('/dashboard/budgets')
        }
    }

    const [openSideNav, setOpenSideNav] = useState(true);

    return (
        <div className="flex h-screen">
            <div className={`flex-1 transition-all duration-300 ${openSideNav ? 'md:w-[calc(100%-16rem)]' : 'w-full'}`}>
                <DashboardHeader setOpenSideNav={setOpenSideNav} />
                {children}
            </div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${openSideNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
            </div>
        </div>
    )
}

export default DashboardLayout