import React from "react";
import { Users, RefreshCcw, MapPin, Banknote } from "lucide-react";

// Array of statistics
const statsData = [
  {
    icon: Users,
    value: "8.5k",
    label: "Happy Customers World Wide",
  },
  {
    icon: RefreshCcw,
    value: "0.5m",
    label: "Transactions Processed Daily",
  },
  {
    icon: MapPin,
    value: "10,000+",
    label: "ATMs and Branches Globally",
  },
  {
    icon: Banknote,
    value: "50+",
    label: "Years of Trusted Banking Service",
  },
];

const StatisticsCard = () => {
  return (
    <section className="py-12 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-md"
              >
                <IconComponent className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCard;