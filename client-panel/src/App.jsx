import React from 'react'
import RightPanel from './components/RightPanel'

const App = () => {
  return (
<div className="flex flex-1 overflow-hidden">
  

  <div className="w-[68%] overflow-y-auto p-6">

  </div>


  <div className="w-[32%] p-4">
    <RightPanel />
  </div>

</div>

  )
}

export default App
