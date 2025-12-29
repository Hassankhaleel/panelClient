import React from 'react'
import CheckoutStepper from './CheckoutStepper'

function LeftSidePanel() {
    return (
        <>
            <CheckoutStepper />
            <div style={{ fontFamily: 'Poppins' }} className="grid grid-cols-12  m-5">
                <div class="col-span-8  border-2 border-[#b8b8b870] rounded-[10px] p-5 ">
                    {/* MAIN HEADING  */}
                    <h1 className='text-xl font-medium' >Configure Your Solar System</h1>
                    <p className='font-extralight text-[13px] pb-3'>Choose the number of panel and warranty option that fit your need.</p>
                    {/* div 1 start */}
                    <div className='border-2 p-4 mt-5 border-[#b8b8b870] rounded-[10px] flex justify-center items-start'>
                        <div >
                            <i className="fa-solid fa-fire-flame-simple "></i>
                        </div>
                        <div>
                            <h6 className=''>Enery Saving Await!</h6>
                            <p className='font-extralight text-[12px]'>Energy Savings Await! With only a < span className='font-medium'> 10% deposit</span>,you can reserve your panels and start your path to energy savings. Don't wait secure your spot today!</p>
                        </div>

                    </div>
                    {/* div 1 end */}
                    {/* =============================================== */}
                    {/* div 2 start */}
                    <div className='border-2 p-4 mt-5 border-[#b8b8b870] rounded-[10px] '>
                        <div className='flex justify-between items-center mb-5'>
                            <div className='flex justify-center items-start flex-col'>
                                <div className='flex justify-start items-start'>
                                    <p>25 Year Warranty</p>
                                    <span className='bg-[#020641] px-2 py-1  mx-2 rounded text-white text-[10px]'>RECOMMENDED</span>
                                </div>
                                <div>
                                    <p className='text-[12px] font-extralight'>Premium panels with extended warranty</p>
                                </div>
                            </div>
                            <p className='font-extralight text-[12px]'>149$ per panel</p>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className=" flex justify-center items-center gap-10">
                                <div className='bg-gray-50 px-2 py-1 rounded border-2 border-[#b8b8b870]'>
                                    <i class="fa-solid fa-plus text-[12px]"></i>
                                </div>
                                <div className='bg flex flex-col items-center justify-center'>
                                    <h6 className='font-medium'>10</h6>
                                    <p className='text-[10px] font-light'>panels</p>
                                </div>
                                <div className='bg-gray-50 px-2 py-1 rounded border-2 border-[#b8b8b870]'>
                                    <i class="fa-solid fa-minus text-[12px]"></i>
                                </div>
                            </div>
                            <div className=''>
                                <p className='font-medium text-[17px]'>$1490.00</p>
                            </div>
                        </div>

                    </div>
                    {/* div 1 end */}
                    {/*================================================= */}
                    {/* Div 3 start */}
                    <div className='border-2 p-4 mt-5 border-[#b8b8b870] rounded-[10px] '>
                        <div className='flex justify-between items-center mb-5'>
                            <div className='flex justify-center items-start flex-col'>
                                <div className='flex justify-start items-start'>
                                    <p>25 Year Warranty</p>

                                </div>
                                <div>
                                    <p className='text-[12px] font-extralight'>Standard panels with quality assurance</p>
                                </div>
                            </div>
                            <p className='font-extralight text-[12px]'>129$ per panel</p>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className=" flex justify-center items-center gap-10">
                                <div className='bg-gray-50 px-2 py-1 rounded border-2 border-[#b8b8b870]'>
                                    <i class="fa-solid fa-plus text-[12px]"></i>
                                </div>
                                <div className='bg flex flex-col items-center justify-center'>
                                    <h6 className='font-medium'>0</h6>
                                    <p className='text-[10px] font-light'>panels</p>
                                </div>
                                <div className='bg-gray-50 px-2 py-1 rounded border-2 border-[#b8b8b870]'>
                                    <i class="fa-solid fa-minus text-[12px]"></i>
                                </div>
                            </div>
                            <div className=''>
                                <p className='font-medium text-[17px]'>$0.00</p>
                            </div>
                        </div>

                    </div>
                    {/* Div 3 end */}
                    {/* ================================================= */}
                    <div className='border-2 p-4 mt-5 border-[#b8b8b870] rounded-[10px] flex justify-center items-start'>
                        <div >
                            <i class="fa-solid fa-circle-exclamation opacity-50 "></i>
                        </div>
                        <div>
                            <p className='font-extralight text-[12px]'>
                                **127 panels is enough to zero the average Australian home energy bill based on Constanblue research June 2025. The GST is part of the total and inclusive in the price.
                            </p>
                        </div>

                    </div>
                    <div className=' mt-4  flex justify-end items-center'>
                        <button className='p-3 m-2 text-white bg-[#00043a] '>Continue shopping</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default LeftSidePanel