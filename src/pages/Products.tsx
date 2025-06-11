
import React, { useEffect } from 'react';
import { Calculator, FileText, Building, Globe, TrendingUp, Users, Smartphone, Monitor } from 'lucide-react';

const Products = () => {
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

  const services = [
    {
      icon: Calculator,
      title: 'Accounting & Bookkeeping',
      description: 'Comprehensive financial record keeping and accounting services tailored for SMEs.',
      features: ['Monthly financial statements', 'Transaction recording', 'Bank reconciliations', 'Financial reporting']
    },
    {
      icon: FileText,
      title: 'Tax Services',
      description: 'Complete tax compliance including VAT, PAYE, Income Tax, and SARS eFiling services.',
      features: ['VAT submissions', 'PAYE processing', 'Income tax returns', 'SARS eFiling support']
    },
    {
      icon: Building,
      title: 'Financial Statement Compilation',
      description: 'Professional financial statement preparation using Draftworx for accurate reporting.',
      features: ['Annual financial statements', 'Management accounts', 'Compliance reporting', 'Audit preparation']
    },
    {
      icon: Globe,
      title: 'Business Administration',
      description: 'Complete business compliance including CIPC, COIDA, NCR, and FSCA registrations.',
      features: ['Company registrations', 'Compliance monitoring', 'Regulatory submissions', 'License applications']
    },
    {
      icon: TrendingUp,
      title: 'Tender Opportunities',
      description: 'Identification and management of tender opportunities through eTenders portal access.',
      features: ['Tender identification', 'Proposal assistance', 'Compliance checking', 'Submission support']
    },
    {
      icon: Users,
      title: 'Social Media Engagement',
      description: 'Professional social media management across LinkedIn, Facebook, and Instagram platforms.',
      features: ['Content creation', 'Community management', 'Brand engagement', 'Analytics reporting']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Mobile-first applications for accounting and HR management on the go.',
      features: ['Mobile accounting', 'HR management', 'Real-time updates', 'Cloud synchronization']
    },
    {
      icon: Monitor,
      title: 'Digital Services via Afrilink',
      description: 'Complete digital solutions including web development, hosting, and email services.',
      features: ['Website development', 'Domain & hosting', 'Email solutions', 'Technical support']
    }
  ];

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
        aria-labelledby="services-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 id="services-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-light-grey max-w-3xl mx-auto fade-in-up stagger-1">
            Comprehensive financial and business solutions designed to help South African SMEs thrive 
            in today's competitive marketplace.
          </p>
        </div>
      </section>

      {/* Services Grid with Enhanced Visual Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
        aria-label="Service offerings"
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white p-6 rounded-xl shadow-lg border border-light-grey hover-float transition-all duration-300 focus:ring-2 focus:ring-primary focus:outline-none animate-on-scroll stagger-${(index % 6) + 1}`}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`service-${index}-title`}
                >
                  <div className="text-primary mb-4 float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    <IconComponent className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${index}-title`} className="text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-medium-grey mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2" aria-label={`${service.title} features`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-charcoal flex items-start">
                        <span className="text-primary mr-2 font-bold" aria-hidden="true">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let us help you streamline your financial processes and achieve compliance with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-light-grey transition-all duration-300 hover-float focus-ring"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+27721610801"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-300 hover-float focus-ring"
                >
                  Call Us: 072 161 0801
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
