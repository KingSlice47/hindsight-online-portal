
import React from 'react';
import OnlineProducts from '../components/OnlineProducts';
import PricingSection from '../components/PricingSection';

const Pricing = () => {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
        aria-labelledby="pricing-hero-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 
            id="pricing-hero-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up"
          >
            <span className="text-primary">Pricing Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-grey mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
            Transparent Plans, Clear Choices.
          </p>
        </div>
      </section>

      {/* Online Products Section with Enhanced Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10">
          <OnlineProducts />
        </div>
      </section>

      {/* Pricing Section with Enhanced Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-light-grey bg-opacity-95"></div>
        <div className="relative z-10">
          <PricingSection />
        </div>
      </section>
    </main>
  );
};

export default Pricing;
