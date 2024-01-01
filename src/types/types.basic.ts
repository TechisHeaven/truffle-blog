export interface PricingFeature {
  name: string;
}
export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  yearlyPrice: number;
  features: PricingFeature[];
  badge: "Normal" | "Popular";
}

export interface PricingData {
  pricingPlans: PricingPlan[];
}
