
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, TrendingUp, Award, Calendar, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  useEffect(() => {
    // Add fade-in animation to elements on scroll
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

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
        aria-labelledby="hero-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up"
            >
              Welcome to{' '}
              <span className="text-primary">Hindsight Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-light-grey mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
              Tech-driven financial & compliance solutions for South African SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-2">
              <Link
                to="/products"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover-float focus-ring inline-flex items-center"
              >
                Explore Our Services
                <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary bg-white bg-opacity-10 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-float focus-ring"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Enhanced Visual Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              About <span className="text-primary">Hindsight Consulting</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-charcoal">Our Story</h3>
              </div>
              <p className="text-lg text-medium-grey mb-6">
                Hindsight Consulting (Pty) Ltd is a dynamic, technology-driven accounting and business 
                administration firm based in Randburg, South Africa. Founded in 2017, we specialize in 
                delivering tailored financial and compliance solutions to small and medium-sized enterprises 
                (SMEs) and clients of our strategic partner, Hindsight Consulting, including Tsogang Brands.
              </p>
              <p className="text-lg text-medium-grey mb-8">
                Our mission is to empower businesses with seamless, cloud-based accounting services, ensuring 
                regulatory compliance and financial clarity. With a vision to become a leading online accounting 
                firm in South Africa, we leverage cutting-edge tools like QuickBooks Online and Draftworx, 
                combined with a client-centric approach, to drive success.
              </p>
            </div>
            
            {/* Office Environment Image Placeholder */}
            <div className="animate-on-scroll">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-lg relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Modern Office Environment</h4>
                  <p className="text-sm opacity-90">Our professional workspace in Ferndale, Randburg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section with Background */}
          <div 
            className="relative rounded-2xl p-8 md:p-12 animate-on-scroll bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-90 rounded-2xl"></div>
            <div className="relative z-10 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h4 className="text-xl font-semibold mb-2">Precision</h4>
                  <p className="opacity-90">Accurate financial solutions every time</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h4 className="text-xl font-semibold mb-2">Partnership</h4>
                  <p className="opacity-90">Building lasting relationships with clients</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h4 className="text-xl font-semibold mb-2">Growth</h4>
                  <p className="opacity-90">Driving your business forward</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company History with Visual Timeline */}
          <div className="mt-20 bg-light-grey rounded-2xl p-8 md:p-12 animate-on-scroll">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-charcoal">Company History</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">Founded in 2024</h4>
                <p className="text-medium-grey mb-6">
                  Established in 2024, Hindsight Online (Pty) Ltd was founded to address the growing 
                  demand for affordable, tech-driven financial services among South African SMEs. Our 
                  founders recognized the challenges businesses face in navigating complex regulations 
                  and set out to create a firm that combines professional expertise with modern technology.
                </p>
                <h4 className="text-xl font-semibold text-charcoal mb-4">Strategic Partnerships</h4>
                <p className="text-medium-grey mb-4">
                  From our inception, we established a key partnership with Hindsight Consulting, enabling 
                  us to serve clients such as Tsogang Brands with specialized accounting and administrative 
                  support. Our partnership with Afrilink Telecoms enhances our offerings by providing 
                  website development, hosting, and email services at preferential rates.
                </p>
              </div>
              
              {/* Business Growth Visual */}
              <div 
                className="h-80 bg-cover bg-center rounded-lg relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-semibold">Business Growth & Success</h5>
                  <p className="text-sm opacity-90">Tracking progress and achievements</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg hover-float">
                <div className="text-2xl font-bold text-primary mb-2">7+</div>
                <div className="text-medium-grey text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg hover-float">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-medium-grey text-sm">Clients Served</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg hover-float">
                <div className="text-2xl font-bold text-primary mb-2">6</div>
                <div className="text-medium-grey text-sm">Industries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg hover-float">
                <div className="text-2xl font-bold text-primary mb-2">2024</div>
                <div className="text-medium-grey text-sm">Online Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section with Professional Photos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-grey to-white" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Hindsight Online is powered by a dedicated, experienced team committed to delivering exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sipho Mampe */}
            <div className="group bg-white rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-1 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 relative">
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full bg-cover bg-center bg-gray-200 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Sipho Mampe</h3>
              <p className="text-primary font-semibold mb-4">Chairman / Director</p>
              <p className="text-medium-grey text-sm">
                Brings extensive expertise in financial strategy and compliance. Sipho oversees operations 
                and fosters relationships with Hindsight Consulting and its clients.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Dineo Rametsi */}
            <div className="group bg-white rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 relative">
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full bg-cover bg-center bg-gray-200 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Dineo Rametsi</h3>
              <p className="text-primary font-semibold mb-4">Accountant</p>
              <p className="text-medium-grey text-sm">
                A skilled leader in financial management, Dineo drives client account oversight and provides 
                strategic direction to ensure operational excellence.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Ipeleng Mogapi */}
            <div className="group bg-white rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 relative">
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full bg-cover bg-center bg-gray-200 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0e501ba2fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Ipeleng Mogapi</h3>
              <p className="text-primary font-semibold mb-4">Bookkeeper</p>
              <p className="text-medium-grey text-sm">
                A versatile team member handling administrative tasks, including CIPC registrations, SARS 
                eFiling registrations, tender opportunity searches, and accounting support through QuickBooks.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Office Environment */}
          <div className="text-center mt-16 animate-on-scroll">
            <div 
              className="h-64 bg-cover bg-center rounded-2xl relative mb-6"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-charcoal bg-opacity-50 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Professional Workspace</h3>
                  <p className="text-lg opacity-90">Modern office in Ferndale, Randburg</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-medium-grey">
              Our team operates from a modern office in Ferndale, Randburg, maintaining a professional 
              atmosphere to accommodate client needs.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto text-center">
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-12 animate-on-scroll">
            Our Strategic <span className="text-primary">Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-1 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              ></div>
              <div className="relative z-10">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Afrilink Telecoms</h3>
                <p className="text-medium-grey">
                  Leading telecommunications partner providing digital infrastructure and connectivity solutions.
                </p>
              </div>
            </div>
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-2 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              ></div>
              <div className="relative z-10">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tsogang Brands</h3>
                <p className="text-medium-grey">
                  Strategic branding and marketing partner helping businesses establish their market presence.
                </p>
              </div>
            </div>
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-3 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              ></div>
              <div className="relative z-10">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Industry Leaders</h3>
                <p className="text-medium-grey">
                  Collaborating with various industry leaders to provide comprehensive business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hindsight Online Highlight with Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-grey" aria-labelledby="online-heading">
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative rounded-2xl p-8 md:p-12 text-center text-white bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-95 rounded-2xl"></div>
            <div className="relative z-10">
              <h2 id="online-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Introducing Hindsight Online
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Our comprehensive digital platform offering accounting, HR, and business management 
                solutions designed specifically for South African SMEs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="bg-white text-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-light-grey transition-all duration-300 hover-float focus-ring inline-flex items-center"
                >
                  Discover Our Products
                  <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-300 hover-float focus-ring inline-flex items-center"
                >
                  View Pricing
                  <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations Section with Enhanced Visuals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="affiliations-heading">
        <div className="max-w-7xl mx-auto text-center">
          <h2 id="affiliations-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-6 animate-on-scroll">
            Professional <span className="text-primary">Affiliations</span>
          </h2>
          <p className="text-xl text-medium-grey mb-12 max-w-3xl mx-auto animate-on-scroll">
            We maintain memberships with leading professional bodies to ensure the highest standards of service and compliance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SAIT - South African Institute of Taxation */}
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-1 group">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-1">SAIT</div>
                  <div className="w-12 h-1 bg-primary mx-auto rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                South African Institute of Taxation
              </h3>
              <p className="text-medium-grey text-sm">
                Committed to excellence in taxation services and staying current with tax legislation and best practices.
              </p>
            </div>

            {/* CIBA - Chartered Institute of Business Accountants */}
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-2 group">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-1">CIBA</div>
                  <div className="w-12 h-1 bg-primary mx-auto rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                Chartered Institute of Business Accountants
              </h3>
              <p className="text-medium-grey text-sm">
                Upholding professional accounting standards and providing expert financial services to businesses.
              </p>
            </div>

            {/* SAIPA - South African Institute of Professional Accountants */}
            <div className="bg-light-grey p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-3 group">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-1">SAIPA</div>
                  <div className="w-12 h-1 bg-primary mx-auto rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                South African Institute of Professional Accountants
              </h3>
              <p className="text-medium-grey text-sm">
                Dedicated to professional development and maintaining the highest ethical standards in accounting practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
