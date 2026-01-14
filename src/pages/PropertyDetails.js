import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(property?.images[0] || "");

  if (!property) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Property not found
        </h1>
        <button
          onClick={() => navigate("/properties")}
          className="text-sm text-gray-700 border-b border-gray-700 pb-1 hover:opacity-70 transition"
        >
          Return to listings
        </button>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:text-gray-900 mb-10"
        >
          ← Back to properties
        </button>

        {/* Gallery */}
        <div className="mb-16">
          <div className="relative overflow-hidden">
            <img
              src={mainImage}
              alt={property.title}
              className="w-full h-[520px] object-cover"
            />

            <span className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 text-xs uppercase tracking-widest text-gray-800">
              {property.status}
            </span>
          </div>

          {/* Thumbnails */}
          {property.images.length > 1 && (
            <div className="flex gap-3 mt-4">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-20 overflow-hidden border ${
                    mainImage === img
                      ? "border-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              {property.type}
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {property.title}
            </h1>

            <p className="text-gray-600 text-lg">
              {property.location}
            </p>
          </div>

          <div className="mt-10 lg:mt-0 lg:text-right">
            <p className="text-3xl font-semibold text-gray-900 mb-4">
              {property.price}
            </p>
            <button className="px-8 py-3 text-sm font-medium border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
              Schedule viewing
            </button>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20 border-t border-b border-gray-200 py-10 text-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Bedrooms
            </p>
            <p className="text-lg font-medium">{property.bedrooms}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Bathrooms
            </p>
            <p className="text-lg font-medium">{property.bathrooms}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Area
            </p>
            <p className="text-lg font-medium">{property.area}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Year Built
            </p>
            <p className="text-lg font-medium">{property.yearBuilt}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Status
            </p>
            <p className="text-lg font-medium">{property.status}</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Property overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Features & amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            {property.features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 px-4 py-3"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Agent */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Contact agent
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <div>
              <p className="text-lg font-medium text-gray-900">
                {property.agent.name}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Licensed Real Estate Consultant
              </p>
              <p className="text-sm text-gray-700">
                {property.agent.phone}
              </p>
              <p className="text-sm text-gray-700">
                {property.agent.email}
              </p>
            </div>

            <button className="md:ml-auto px-8 py-3 text-sm font-medium border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
              Contact agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
