import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import SystemCapacity from './SystemCapacity'
import PanelBreakdown from './PanelBreakdown'
import HrLine from './HrLine'
import TotalAmount from './TotalAmount'
import PayToday from './PayToday'
import TrustBadges from './TrustBadges'

const RightPanel = () => {
  return (
    <div className="
      h-full
      bg-white
      border border-gray-200
      rounded-xl
      shadow-sm
      flex flex-col
    ">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-2">
        <AiOutlineShoppingCart className="text-indigo-500" />
        <h1 className="font-semibold">Order Summary</h1>
      </div>

      {/* Content (NO SCROLL NEEDED) */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="space-y-3">
          <SystemCapacity />
          <PanelBreakdown />
          <HrLine />
          <TotalAmount />
          <PayToday />
        </div>

        <TrustBadges />
      </div>
    </div>
  )
}

export default RightPanel
