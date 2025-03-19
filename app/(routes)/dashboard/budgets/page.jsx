"use client"
import React from 'react'
import BudgetList from './_components/BudgetList'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function page() {
  const route = useRouter()
  return (
    <div className='p-10'>
      <span className='flex gap-2 items-center'>
        <ArrowLeft onClick={() => route.back()} className='cursor-pointer'/>
        <h2 className='font-bold text-3xl'>My Budgets</h2>
      </span>
      <BudgetList/>
    </div>
  )
}

export default page