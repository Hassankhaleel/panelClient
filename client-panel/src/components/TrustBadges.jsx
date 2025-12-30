import React from 'react'
import { FiLock, FiRefreshCw, FiTool } from "react-icons/fi"

const TrustBadges = () => {
  return (
    <div className="pt-3 border-t border-gray-200">
      <ul className="space-y-1 text-xs md:text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <FiLock className="text-[#E9A837]" />
          Secure checkout
        </li>
        <li className="flex items-center gap-2">
          <FiRefreshCw className="text-[#E9A837]" />
          Money-back guarantee
        </li>
        <li className="flex items-center gap-2">
          <FiTool className="text-[#E9A837]" />
          Expert installation
        </li>
      </ul>
    </div>
  )
}


export default TrustBadges
