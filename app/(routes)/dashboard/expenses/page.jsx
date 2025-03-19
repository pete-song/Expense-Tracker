"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import ExpenseListTable from './_components/ExpenseListTable';

function page() {
    const {user} = useUser();

    const [budgetList, setBudgetList] = useState([]);
    const [expensesList, setExpensesList] = useState([]);
    
    useEffect(() => {
        user && getBudgetList();
    }, [user])

    // Get Budget List
    const getBudgetList = async () => {
        const result = await db.select({
            ...getTableColumns(Budgets),
            totalSpent: sql `sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql `count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
        .leftJoin(Expenses,eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id))

        console.log('getBudgetList', result)

        setBudgetList(result);
        getAllExpenses();
    }

    // Get all expenses that belong to the user
    const getAllExpenses = async () => {
        const result = await db.select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.createdAt
        }).from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(Expenses.id))

        console.log('getAllExpenses', result)
        setExpensesList(result);
    }

    return (
        <div className='p-10'>
            <h2 className='font-bold text-3xl'>My Expenses</h2>
            <ExpenseListTable expensesList={expensesList} refreshData={() => getBudgetList()}/>
        </div>
  )
}

export default page