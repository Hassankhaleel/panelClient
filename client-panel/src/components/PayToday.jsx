import React from 'react'

const PayToday = () => {
  return (
    <div className='bg-indigo-50 border border-indigo-200 p-3 rounded-lg'>
      <h1 className='text-indigo-700 font-medium'>
        Pay Today (10%)
      </h1>

      <h1 className='text-2xl font-bold text-indigo-900 mt-1'>
        $149.00
      </h1>

      <p className='text-sm text-indigo-700'>
        Remaining $1341.00 due at installation
      </p>
    </div>
  )
}

export default PayToday
