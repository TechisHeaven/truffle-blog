import { PricingPlan } from "@/types/types.basic";
import React from "react";
import { MdDone } from "react-icons/md";
const PricingCard = ({
  data,
  isYearly,
}: {
  data: PricingPlan;
  isYearly: boolean;
}) => {
  return (
    <div
      className={`${
        data.badge === "Popular" && "bg-[#101727]  "
      } border rounded-2xl p-4 flex flex-col gap-8 transition-all my-12 mx-1 hover:shadow-md`}
    >
      <div className="gap-2 flex flex-col items-start ">
        <div className="flex justify-between w-full ">
          <h1
            className={`${
              data.badge === "Popular" && "text-lime-400"
            } font-medium`}
          >
            {data.name} Plan
          </h1>
          {data.badge === "Popular" && (
            <p className="bg-lime-400 p-1 rounded-full px-2 text-xs font-medium">
              {data.badge}
            </p>
          )}
        </div>
        <div
          className={`${
            data.badge === "Popular" && "text-white"
          } text-5xl font-semibold flex gap-2 items-center `}
        >
          <p>${isYearly ? data.yearlyPrice : data.price}</p>
          <div className=" flex flex-col">
            <p className="text-xs font-normal">per user</p>
            <p className="text-xs font-normal">per month</p>
          </div>
        </div>
        <p className="text-sm">{data.description}</p>
        <button
          className={` bg-black rounded-md text-sm font-medium text-white p-2 w-full ${
            data.badge === "Popular" && "bg-lime-400 text-[#000]"
          }`}
        >
          Get Started
        </button>
        <button
          className={`${
            data.badge === "Popular" && "bg-white "
          } rounded-md  text-sm font-medium border-2 p-2 w-full`}
        >
          Chat to sales
        </button>
      </div>
      <hr />
      <div className="features">
        <h1
          className={`${
            data.badge === "Popular" && "text-white"
          } font-semibold uppercase text-sm`}
        >
          Features
        </h1>
        <p
          className={`${
            data.badge === "Popular" && "text-gray-300"
          } text-xs font-medium text-gray-600`}
        >
          {data.description}...
        </p>
        <div className="plan-content">
          {data.features.map((dataFeature, index) => {
            return (
              <div key={index} className="flex items-center gap-2 my-2">
                <div className="tick text-xs bg-lime-300 rounded-full p-1">
                  <MdDone />
                </div>
                <p
                  className={`${
                    data.badge === "Popular" && "text-gray-300"
                  } text-sm`}
                >
                  {dataFeature.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
