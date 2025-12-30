import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment25,
  decrement25,
  increment20,
  decrement20,
  selectSolarPricing,
} from "../../redux/slices/solarSlice.js";

const PRICE_25 = 149;
const PRICE_20 = 129;

function LeftSidePanel() {
  const dispatch = useDispatch();
  const { p25, p20, subtotal } = useSelector(selectSolarPricing);

  return (
    <>
      <div style={{ fontFamily: "Poppins" }} className="w-full px-3 md:px-6 py-4">
        <div className="max-w-5xl bg-white border border-gray-200 rounded-xl p-4 md:p-6">

          <h1 className="text-lg md:text-xl font-semibold text-slate-900">
            Configure Your Solar System
          </h1>
          <p className="text-xs md:text-sm text-slate-600 pb-4">
            Choose the number of panels and warranty options that fit your needs.
          </p>

          <div className="flex gap-3 bg-slate-50 border border-gray-200 rounded-lg p-3 md:p-4 mt-4">
            <i className="fa-solid fa-fire-flame-simple text-[#E9A837] mt-1" />
            <div>
              <h6 className="font-medium text-slate-800">Energy Savings Await!</h6>
              <p className="text-xs md:text-sm text-slate-600">
                With only a <span className="font-medium">10% deposit</span>, you can reserve your panels and start your path to energy savings.
              </p>
            </div>
          </div>

          {/* 25 YEAR WARRANTY */}
          <div className="border border-gray-200 rounded-lg p-4 mt-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">25 Year Warranty</p>
                  <span className="bg-[#E9A837] text-white text-[10px] px-2 py-0.5 rounded">RECOMMENDED</span>
                </div>
                <p className="text-xs text-slate-600">Premium panels with extended warranty</p>
              </div>
              <p className="text-xs text-slate-600">$149 per panel</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <button onClick={() => dispatch(increment25())} className="px-2 py-1 border rounded bg-slate-50">
                  <i className="fa-solid fa-plus text-xs" />
                </button>

                <div className="text-center">
                  <h6 className="font-medium">{p25}</h6>
                  <p className="text-[10px] text-slate-500">panels</p>
                </div>

                <button onClick={() => dispatch(decrement25())} className="px-2 py-1 border rounded bg-slate-50">
                  <i className="fa-solid fa-minus text-xs" />
                </button>
              </div>

              <p className="font-semibold text-slate-900">${(p25 * PRICE_25).toFixed(2)}</p>
            </div>
          </div>

          {/* 20 YEAR WARRANTY */}
          <div className="border border-gray-200 rounded-lg p-4 mt-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">20 Year Warranty</p>
                <p className="text-xs text-slate-600">Standard panels with quality assurance</p>
              </div>
              <p className="text-xs text-slate-600">$129 per panel</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <button onClick={() => dispatch(increment20())} className="px-2 py-1 border rounded bg-slate-50">
                  <i className="fa-solid fa-plus text-xs" />
                </button>

                <div className="text-center">
                  <h6 className="font-medium">{p20}</h6>
                  <p className="text-[10px] text-slate-500">panels</p>
                </div>

                <button onClick={() => dispatch(decrement20())} className="px-2 py-1 border rounded bg-slate-50">
                  <i className="fa-solid fa-minus text-xs" />
                </button>
              </div>

              <p className="font-semibold text-slate-900">${(p20 * PRICE_20).toFixed(2)}</p>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="flex gap-3 border border-gray-200 rounded-lg p-3 mt-5 text-xs text-slate-600">
            <i className="fa-solid fa-circle-exclamation opacity-50 mt-0.5" />
            <p>127 panels are enough to zero the average Australian home energy bill. GST is included in the total price.</p>
          </div>

          {/* BUTTON ROW */}
        <div className="flex justify-end items-center mt-5">
        <button
            className="
            px-5 py-2
            bg-[#E9A837]
            text-white
            rounded-md
            text-sm
            hover:bg-[#E9A837]
            "
        >
            Continue to Shipping
        </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default LeftSidePanel;
