
import React, { useEffect } from 'react';
import { Calculator, Users, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const Applications = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const applications = [
    {
      icon: Calculator,
      title: 'Hindsight Accounting Online',
      description: 'Comprehensive cloud-based accounting solution designed specifically for South African SMEs.',
      features: [
        'Real-time financial reporting',
        'VAT and tax compliance',
        'Bank account integration',
        'Invoice and quote generation',
        'Expense tracking and management',
        'Multi-currency support',
        'SARS eFiling integration',
        'Mobile accessibility'
      ],
      color: 'from-blue-500 to-blue-600',
      link: '#accounting-app',
      comingSoon: false
    },
    {
      icon: Users,
      title: 'Hindsight HR Online',
      description: 'Complete human resources management platform for efficient workforce administration.',
      features: [
        'Employee record management',
        'Payroll processing and PAYE',
        'Leave management system',
        'Performance tracking',
        'Compliance monitoring',
        'Employee self-service portal',
        'Recruitment management',
        'Training and development tracking'
      ],
      color: 'from-green-500 to-green-600',
      link: '#hr-app',
      comingSoon: true
    }
  ];

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
        aria-labelledby="apps-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 id="apps-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Explore Our <span className="text-primary">Apps</span>
          </h1>
          <p className="text-xl text-light-grey max-w-3xl mx-auto fade-in-up stagger-1">
            Powerful applications built specifically for South African SMEs, designed to simplify 
            your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Applications Grid with Enhanced Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
        aria-label="Available applications"
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <article
                  key={app.title}
                  className={`bg-white rounded-2xl shadow-xl border border-light-grey overflow-hidden hover-float transition-all duration-500 animate-on-scroll ${index % 2 === 0 ? 'stagger-1' : 'stagger-2'}`}
                >
                  {/* App Header */}
                  <div className={`bg-gradient-to-r ${app.color} p-8 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-12 w-12 mr-4 float-animation" aria-hidden="true" />
                        <div>
                          <h2 className="text-2xl font-bold">{app.title}</h2>
                          {app.comingSoon && (
                            <span className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-lg opacity-90">{app.description}</p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  </div>

                  {/* App Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-6">Key Features:</h3>
                    <ul className="space-y-3 mb-8" aria-label={`${app.title} features`}>
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-medium-grey">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {app.comingSoon ? (
                        <button 
                          className="bg-medium-grey text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60"
                          disabled
                          aria-label={`${app.title} - Coming Soon`}
                        >
                          Coming Soon
                        </button>
                      ) : (
                        <a
                          href={app.link}
                          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover-float focus-ring inline-flex items-center"
                          aria-label={`Launch ${app.title}`}
                        >
                          Launch App
                          <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                      <a
                        href="/contact"
                        className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-float focus-ring inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section with Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
        aria-labelledby="integration-heading"
      >
        <div className="absolute inset-0 bg-light-grey bg-opacity-95"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white bg-opacity-95 rounded-2xl p-8 md:p-12 text-center animate-on-scroll shadow-lg">
            <h2 id="integration-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Seamless <span className="text-primary">Integration</span>
            </h2>
            <p className="text-lg text-medium-grey mb-8 max-w-3xl mx-auto">
              Our applications work together seamlessly, sharing data and insights to provide you with 
              a complete view of your business operations. Experience the power of integrated business management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg hover-float shadow-sm">
                <div className="text-primary mb-4">
                  <CheckCircle className="h-8 w-8 mx-auto" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Real-time Sync</h3>
                <p className="text-sm text-medium-grey">Data synchronizes instantly across all platforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg hover-float shadow-sm">
                <div className="text-primary mb-4">
                  <CheckCircle className="h-8 w-8 mx-auto" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Single Sign-On</h3>
                <p className="text-sm text-medium-grey">Access all applications with one login</p>
              </div>
              <div className="bg-white p-6 rounded-lg hover-float shadow-sm">
                <div className="text-primary mb-4">
                  <CheckCircle className="h-8 w-8 mx-auto" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Unified Reporting</h3>
                <p className="text-sm text-medium-grey">Comprehensive reports across all business areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Business Background */}
      <section className="px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-2xl p-8 md:p-12 text-center text-white bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-95 rounded-2xl"></div>
            <div className="relative z-10">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of South African SMEs already using our applications to grow their businesses.
              </p>
              <a
                href="/contact"
                className="bg-white text-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-light-grey transition-all duration-300 hover-float focus-ring inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Applications;
