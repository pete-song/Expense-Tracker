import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
    return (
        <div className='border rounded-lg p-5'>
            <h2 className='font-bold text-lg'>Activity</h2>
            <ResponsiveContainer width={'95%'} height={300}>
                <BarChart
                    data={budgetList} 
                    margin={{
                        top: 7,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSpent" stackId='a' fill="#101010" />
                    <Bar dataKey="amount" stackId='a' fill="#9e9e9e" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartDashboard