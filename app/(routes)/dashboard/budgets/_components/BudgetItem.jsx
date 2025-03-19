"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function BudgetItem({ budget }) {
    const [progress, setProgress] = useState(0);

    const calculateProgressPerc = () => {
        const perc = (budget.totalSpent / budget.amount) * 100;
        return Math.min(perc, 100).toFixed(2);
    }

    useEffect(() => {
        setProgress(calculateProgressPerc());
    }, [budget.totalSpent]); // Animate when totalSpent changes

    return (
        <Link href={'/dashboard/expenses/' + budget?.id}>
            <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]'>
                <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <h2 className='text-2xl p-3 px-4 bg-slate-100 rounded-full'>{budget?.icon}</h2>
                        <div>
                            <h2 className='font-bold'>{budget.name}</h2>
                            <h2 className='text-sm text-gray-500'>{budget.totalItem} Item(s)</h2>
                        </div>
                    </div>
                    <h2 className='font-bold text-[var(--primary)] text-lg'>฿{budget.amount}</h2>
                </div>

                <div className='mt-5'>
                    <div className='flex items-center justify-between mb-3'>
                        <h2 className='text-xs text-slate-400'>฿{budget.totalSpent ? budget.totalSpent : 0} Spent</h2>
                        <h2 className='text-xs text-slate-400'>฿{budget.amount - budget.totalSpent} Remaining</h2>
                    </div>
                    <div className='w-full bg-slate-300 h-2 rounded-full overflow-hidden'>
                        <motion.div
                            className='bg-[var(--primary)] h-2 rounded-full'
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BudgetItem;
