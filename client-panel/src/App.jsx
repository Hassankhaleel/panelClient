import React from 'react'

import LeftSidePanel from './components/LeftBar/LeftSidePanel'

import RightPanel from './components/RightPanel'

const App = () => {
  return (
    <div className="h-full flex flex-col">


      {/* <div className="h-[72px] border-b">Steps</div> */}


      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">

        <div className="
          w-full lg:w-[68%]
          overflow-y-auto
          p-4 md:p-6
        ">

        </div>


        <div className="
          w-full lg:w-[32%]
          p-3 md:p-4
          border-t lg:border-t-0 lg:border-l
        ">
          <RightPanel />
        </div>

      </div>
    </div>
  )
}

export default App
