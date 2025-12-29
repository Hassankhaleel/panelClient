import React from 'react'
import { RxLightningBolt } from "react-icons/rx"

const SystemCapacity = () => {
  return (
    <div className='bg-slate-50 border border-gray-200 p-4 rounded-lg'>
      <div className='flex items-center gap-2 text-slate-600'>
        <RxLightningBolt className="text-indigo-500" />
        <h1 className='font-medium'>System Capacity</h1>
      </div>

      <h1 className='text-2xl font-semibold text-slate-900 mt-2'>
        1.0 kW
      </h1>

      <p className='text-sm text-slate-600'>
        10 total panels
      </p>
    </div>
  )
}

export default SystemCapacity
