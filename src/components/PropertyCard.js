import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white border border-gray-200 overflow-hidden transition">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Status */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-widest text-gray-800">
          {property.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type */}
        <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-2">
          {property.type}
        </p>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-4">
          {property.location}
        </p>

        {/* Price */}
        <p className="text-xl font-semibold text-gray-900 mb-5">
          {property.price}
        </p>

        {/* Meta */}
        <div className="flex justify-between text-xs text-gray-500 mb-6">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area}</span>
        </div>

        {/* CTA */}
        <Link
          to={`/property/${property.id}`}
          className="inline-block text-sm font-medium text-gray-900 border-b border-gray-900 pb-1 hover:opacity-70 transition"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
