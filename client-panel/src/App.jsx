import React from 'react';
import LeftSidePanel from './components/LeftBar/LeftSidePanel';
import RightPanel from './components/RightPanel';
import CheckoutStepper from './components/LeftBar/CheckoutStepper';

const App = () => {
  return (
    <div className="h-full flex flex-col">

      {/* Checkout Stepper */}
      <div className="h-[72px] md:h-[80px] w-full">
        <CheckoutStepper />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">

        {/* Left Panel */}
        <div className="w-full lg:w-[68%] overflow-y-auto p-4 sm:p-5 md:p-6">
          <LeftSidePanel />
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[32%] p-3 sm:p-4 md:p-5 lg:border-l lg:border-gray-200">
          <RightPanel />
        </div>

      </div>
    </div>
  )
}

export default App;
