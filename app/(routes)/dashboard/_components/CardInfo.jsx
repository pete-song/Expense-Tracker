import { PiggyBank, ReceiptText, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CardInfo({budgetList}) {
    const [totalBudget, setTotalBudget] = useState(0)
    const [totalSpent, setTotalSpent] = useState(0)
    useEffect(() => {
        budgetList && calculateCardInfo()
    }, [budgetList])

    const calculateCardInfo = async () => {
        let totalBudget_ = 0;
        let totalSpent_ = 0;
        budgetList.forEach(element => {
            totalBudget_ = totalBudget_ + Number(element.amount)
            totalSpent_ = totalSpent_ + element.totalSpent
        });

        console.log('totalBudget_', totalBudget_, 'totalSpent_', totalSpent_)

        setTotalBudget(totalBudget_)
        setTotalSpent(totalSpent_)
    }

    return (
        <div>
            { budgetList?.length > 0 ?
                <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='p-7 border rounded-lg flex items-center justify-between'>
                        <div className=''>
                            <h2 className='text-sm'>Total Budget</h2>
                            <h2 className='font-bold text-2xl'>฿{totalBudget}</h2>
                        </div>
                        <PiggyBank
                            className='bg-[var(--primary)] p-3 h-12 w-12 rounded-full text-white'
                        />
                    </div>
                    <div className='p-7 border rounded-lg flex items-center justify-between'>
                        <div className=''>
                            <h2 className='text-sm'>Total Spent</h2>
                            <h2 className='font-bold text-2xl'>฿{totalSpent}</h2>
                        </div>
                        <ReceiptText
                            className='bg-[var(--primary)] p-3 h-12 w-12 rounded-full text-white'
                        />
                    </div>
                    <div className='p-7 border rounded-lg flex items-center justify-between'>
                        <div className=''>
                            <h2 className='text-sm'>No. of Budgets</h2>
                            <h2 className='font-bold text-2xl'>{budgetList?.length}</h2>
                        </div>
                        <Wallet
                            className='bg-[var(--primary)] p-3 h-12 w-12 rounded-full text-white'
                        />
                    </div>
                </div>
                : 
                <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {[1,2,3].map((item, index)=> (
                        <div key={index} className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default CardInfo