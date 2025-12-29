import React from "react";
import { useSelector } from "react-redux";
import { selectSolarPricing } from "../redux/slices/solarSlice";

const TotalAmount = () => {
  const { subtotal, gst, total } = useSelector(selectSolarPricing);

  return (
    <div>
      <div className="text-slate-700 space-y-1">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between text-sm"><span>GST (included)</span><span>${gst.toFixed(2)}</span></div>
      </div>

      <div className="flex justify-between items-center pt-2 mt-2 border-t">
        <span className="font-semibold text-lg">Total</span>
        <span className="font-bold text-lg text-slate-900">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalAmount;
