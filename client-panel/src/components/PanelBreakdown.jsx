import React from 'react'
import { FiShield } from "react-icons/fi"

const PanelBreakdown = () => {
  return (
    <div className='bg-slate-50 border border-gray-200 p-4 rounded-lg'>
      <div className='flex items-center gap-2 text-slate-600'>
        <FiShield className="text-indigo-500" />
        <h1 className='font-medium'>Panel Breakdown</h1>
      </div>

      <div className='flex justify-between items-center mt-2'>
        <p className='text-sm text-slate-600'>25 Year × 10</p>
        <p className='font-semibold text-slate-900'>$1490.00</p>
      </div>
    </div>
  )
}

export default PanelBreakdown
