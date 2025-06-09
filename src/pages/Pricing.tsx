
import React from 'react';
import OnlineProducts from '../components/OnlineProducts';
import PricingSection from '../components/PricingSection';

const Pricing = () => {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-grey to-white py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="pricing-hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            id="pricing-hero-heading"
            className="text-4xl md:text-6xl font-bold text-charcoal mb-6 fade-in-up"
          >
            <span className="text-primary">Pricing Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-medium-grey mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
            Transparent Plans, Clear Choices.
          </p>
        </div>
      </section>

      {/* Online Products Section */}
      <OnlineProducts />

      {/* Pricing Section */}
      <PricingSection />
    </main>
  );
};

export default Pricing;
