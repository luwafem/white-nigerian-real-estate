import React from "react";

const AgentCard = ({ agent }) => {
  return (
    <div className="group bg-white border border-gray-200 p-8 text-center transition hover:-translate-y-1">
      {/* Image */}
      <div className="relative mb-6">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-28 h-28 mx-auto rounded-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        {agent.name}
      </h3>

      {/* Title */}
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
        {agent.title}
      </p>

      {/* Experience */}
      <p className="text-sm text-gray-600 mb-6">
        {agent.experience} experience
      </p>

      {/* Specializations */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {agent.specialization.map((spec, index) => (
          <span
            key={index}
            className="text-[11px] px-3 py-1 border border-gray-300 text-gray-600"
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Contact */}
      <div className="text-sm text-gray-700 space-y-2">
        <p>{agent.phone}</p>
        <p>{agent.email}</p>
      </div>
    </div>
  );
};

export default AgentCard;
