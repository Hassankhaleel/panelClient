import React from 'react'
import HrLine from './HrLine'

const TotalAmount = () => {
  return (
    <div>
      <div className='text-slate-700 space-y-1'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>$1490.00</span>
        </div>

        <div className='flex justify-between text-sm'>
          <span>GST (included)</span>
          <span>$149.00</span>
        </div>
      </div>

      <HrLine />

      <div className='flex justify-between items-center pt-2'>
        <span className='font-semibold text-lg'>Total</span>
        <span className='font-bold text-lg text-slate-900'>$1490.00</span>
      </div>
    </div>
  )
}

export default TotalAmount
