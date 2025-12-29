import React from 'react';

const CheckoutStepper = () => {
    const steps = [
        { id: 1, label: 'Bag' },
        { id: 2, label: 'Shipping' },
        { id: 3, label: 'Payment' },
    ];

    const currentStep = 1; 

    return (
        <div className="w-full py-6 md:py-8">
            <div className="flex items-center justify-center max-w-full md:max-w-lg mx-auto px-2 sm:px-4">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Step Circle */}
                        <div className="flex flex-col items-center relative">
                            <div
                                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-[10px] sm:text-sm md:text-lg transition-colors duration-300 ${
                                    currentStep === step.id
                                        ? 'border-slate-800 text-slate-800 font-medium'
                                        : 'border-slate-200 text-slate-400'
                                }`}
                            >
                                {step.id}
                            </div>
                            <span
                                className={`absolute -bottom-6 sm:-bottom-7 md:-bottom-8 text-[10px] sm:text-xs md:text-sm transition-colors duration-300 ${
                                    currentStep === step.id
                                        ? 'text-slate-800 font-semibold'
                                        : 'text-slate-400'
                                }`}
                            >
                                {step.label}
                            </span>
                        </div>

                        {/* Line Between Steps */}
                        {index !== steps.length - 1 && (
                            <div className="flex-1 h-[2px] bg-slate-200 mx-2 sm:mx-3 md:mx-4 mb-0" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CheckoutStepper;
