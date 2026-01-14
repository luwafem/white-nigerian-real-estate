import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

const Properties = () => {
  const [filter, setFilter] = useState("all");

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter(
          (property) =>
            property.type.toLowerCase() === filter.toLowerCase()
        );

  const propertyTypes = ["All", "Villa", "Apartment", "Commercial", "Duplex"];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Property Collection
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Properties for Sale & Lease
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Browse a curated selection of premium residential and commercial
            properties across Nigeria.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-8 mb-16 text-sm">
          {propertyTypes.map((type) => {
            const value = type.toLowerCase();
            const isActive = filter === value;

            return (
              <button
                key={type}
                onClick={() => setFilter(value)}
                className={`relative pb-1 transition ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {type}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gray-900"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No properties available
            </h3>
            <p className="text-gray-600">
              Please select a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
