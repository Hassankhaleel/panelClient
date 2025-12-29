import React from "react";
import { useSelector } from "react-redux";
import { selectSolarPricing } from "../redux/slices/solarSlice";

const PanelBreakdown = () => {
  const { p25, subtotal } = useSelector(selectSolarPricing);
  return (
    <div className="bg-slate-50 border p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-600">25 Year × {p25}</p>
        <p className="font-semibold text-slate-900">${subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PanelBreakdown;
