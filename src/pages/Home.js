import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import AgentCard from "../components/AgentCard";
import properties from "../data/properties";
import agents from "../data/agents";

const Home = () => {
  const featuredProperties = properties.slice(0, 3);
  const featuredAgents = agents.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero */}{/* Hero */}
<section
  className="
    relative
    pt-28 pb-24
    md:pt-36 md:pb-32
    border-b border-gray-200
    bg-cover bg-center
    bg-[url('https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=900&q=80')]
    md:bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')]
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
    <p className="text-xs uppercase tracking-widest text-gray-200 mb-4">
      Premium Real Estate Nigeria
    </p>

    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
      Exceptional Homes in <br className="hidden md:block" />
      Nigeria’s Finest Locations
    </h1>

    <p className="text-gray-200 max-w-2xl mx-auto mb-10 md:mb-12">
      Discover carefully selected properties across Lagos, Abuja,
      Port Harcourt, and beyond.
    </p>

    {/* Search */}
<div className="max-w-3xl mx-auto bg-white/95 backdrop-blur border border-white/30
                rounded-2xl md:rounded-full p-2">
  <div className="flex flex-col md:flex-row gap-2">
    <input
      type="text"
      placeholder="Search by location, property type, or keyword"
      className="
        w-full
        px-5
        py-4
        md:py-3
        text-sm
        text-gray-800
        bg-transparent
        focus:outline-none
      "
    />

    <button
      className="
        w-full md:w-auto
        px-6 md:px-8
        py-4 md:py-3
        text-sm
        font-medium
        bg-gray-900
        text-white
        rounded-xl md:rounded-full
        hover:bg-gray-800
        transition
      "
    >
      Search
    </button>
  </div>
</div>

  </div>
</section>



      {/* Featured Properties */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Curated Selection
              </p>
              <h2 className="text-3xl font-semibold text-gray-900">
                Featured Properties
              </h2>
            </div>

            <Link
              to="/properties"
              className="mt-6 md:mt-0 text-sm text-gray-700 hover:text-gray-900 transition"
            >
              View all properties →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Trusted Professionals
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Expert Agents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Find a Home That Reflects Your Lifestyle
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Work with experienced agents and gain access to Nigeria’s most
            desirable properties.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/properties"
              className="px-8 py-3 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Browse Properties
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full text-sm font-medium border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Contact an Agent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
