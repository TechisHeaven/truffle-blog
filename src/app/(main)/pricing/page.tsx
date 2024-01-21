"use client";
import PricingCard from "@/components/PricingCard/PricingCard";
import { PricingData, PricingPlan } from "@/types/types.basic";
import React from "react";

const pricingPlanData: PricingData = {
  pricingPlans: [
    {
      name: "Free",
      price: 0,
      yearlyPrice: 0,
      description: "Basic features for up to 10 users.",
      features: [
        { name: "Limited user support" },
        { name: "Basic functionality" },
        { name: "Community forum access" },
        { name: "Email notifications" },
        { name: "File storage (up to 1GB)" },
      ],
      badge: "Normal",
    },
    {
      name: "Business",
      price: 4.99,
      yearlyPrice: 49.99,
      description: "Advanced features for growing businesses.",
      features: [
        { name: "Priority customer support" },
        { name: "Enhanced functionality" },
        { name: "Access to premium content" },
        { name: "Up to 50 users" },
        { name: "Monthly analytics report" },
        { name: "Customizable templates" },
      ],
      badge: "Popular",
    },
    {
      name: "Enterprise",
      price: 9.99,
      yearlyPrice: 99.99,
      description: "Comprehensive features for large enterprises.",
      features: [
        { name: "24/7 dedicated support" },
        { name: "Full functionality suite" },
        { name: "Unlimited users" },
        { name: "Customizable analytics" },
        { name: "VIP access to events" },
        { name: "Advanced security features" },
      ],
      badge: "Normal",
    },
  ],
};
const Page = () => {
  const ActiveClass = "bg-black text-white";
  const NonActiveClass = "bg-white text-black";
  const [activeButton, setActiveButton] = React.useState<number>(0);
  return (
    <div className="mt-12 flex flex-col gap-4">
      <div className="text-start flex flex-col items-start ">
        <h1 className="text-5xl font-semibold py-4">
          We've got a plan <br /> that's perfect for you
        </h1>
        <div className="buttons p-1 border flex  gap-2 rounded-md ">
          <button
            onClick={() => setActiveButton(0)}
            className={`${
              activeButton === 0 ? ActiveClass : NonActiveClass
            }  px-2 py-[6px] rounded-sm transition-all text-sm`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setActiveButton(1)}
            className={`${
              activeButton === 1 ? ActiveClass : NonActiveClass
            } px-2 py-[6px] rounded-sm transition-all text-sm`}
          >
            Annual billing
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-8 w-full mx-4">
        {pricingPlanData.pricingPlans.map(
          (data: PricingPlan, index: number) => {
            return (
              <PricingCard
                data={data}
                key={index}
                isYearly={Boolean(activeButton)}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Page;
