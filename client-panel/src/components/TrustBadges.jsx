import React from 'react'
import { FiLock, FiRefreshCw, FiTool } from "react-icons/fi"

const TrustBadges = () => {
  return (
    <div className="pt-3 border-t border-gray-200">
      <ul className="space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <FiLock className="text-indigo-500" />
          <span>Secure checkout</span>
        </li>

        <li className="flex items-center gap-2">
          <FiRefreshCw className="text-indigo-500" />
          <span>Money-back guarantee</span>
        </li>

        <li className="flex items-center gap-2">
          <FiTool className="text-indigo-500" />
          <span>Expert installation</span>
        </li>
      </ul>
    </div>
  )
}

export default TrustBadges
