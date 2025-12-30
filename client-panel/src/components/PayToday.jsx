import React from "react";
import { useSelector } from "react-redux";
import { selectSolarPricing } from "../redux/slices/solarSlice";

const PayToday = () => {
  const { payToday, remaining } = useSelector(selectSolarPricing);

  return (
    <div className="bg-[#E9A837]/10 border border-[#E9A837] p-3 rounded-lg">
      <h1 className="text-[#E9A837] font-medium">
        Pay Today (10%)
      </h1>

      <h1 className="text-2xl font-bold text-[#E9A837] mt-1">
        ${payToday.toFixed(2)}
      </h1>

      <p className="text-sm text-[#E9A837]">
        Remaining ${remaining.toFixed(2)} due at installation
      </p>
    </div>
  );
};

export default PayToday;
