import React from 'react';

const CheckoutStepper = () => {
    const steps = [
        { id: 1, label: 'Bag' },
        { id: 2, label: 'Shipping' },
        { id: 3, label: 'Payment' },
    ];

    const currentStep = 1; // You can pass this as a prop

    return (
        <div className="w-full py-8">
            <div className="flex items-center justify-center max-w-lg mx-auto">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Step Circle & Label */}
                        <div className="flex flex-col items-center relative">
                            <div
                                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg transition-colors duration-300 ${currentStep === step.id
                                    ? 'border-slate-800 text-slate-800 font-medium'
                                    : 'border-slate-200 text-slate-400'
                                    }`}
                            >
                                {step.id}
                            </div>
                            <span
                                className={`absolute -bottom-8 text-sm transition-colors duration-300 ${currentStep === step.id
                                    ? 'text-slate-800 font-semibold'
                                    : 'text-slate-400'
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>

                        {/* Connecting Line */}
                        {index !== steps.length - 1 && (
                            <div className="flex-1 h-[2px] bg-slate-200 mx-4 mb-0" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CheckoutStepper;