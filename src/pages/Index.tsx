
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Users, TrendingUp, Award, Calendar, Building2 } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-grey to-white py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-charcoal mb-6 fade-in-up"
            >
              Welcome to{' '}
              <span className="text-primary">Hindsight Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-medium-grey mb-8 max-w-3xl mx-auto fade-in-up stagger-1">
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
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-float focus-ring"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
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
            <div className="animate-on-scroll float-animation">
              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Precision</h4>
                      <p className="text-sm opacity-90">Accurate financial solutions every time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Partnership</h4>
                      <p className="text-sm opacity-90">Building lasting relationships with clients</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Growth</h4>
                      <p className="text-sm opacity-90">Driving your business forward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="bg-light-grey rounded-2xl p-8 md:p-12 animate-on-scroll">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-charcoal">Company History</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">Founded in 2024</h4>
                <p className="text-medium-grey mb-4">
                  Established in 2024, Hindsight Online (Pty) Ltd was founded to address the growing 
                  demand for affordable, tech-driven financial services among South African SMEs. Our 
                  founders recognized the challenges businesses face in navigating complex regulations 
                  and set out to create a firm that combines professional expertise with modern technology.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">Strategic Partnerships</h4>
                <p className="text-medium-grey mb-4">
                  From our inception, we established a key partnership with Hindsight Consulting, enabling 
                  us to serve clients such as Tsogang Brands with specialized accounting and administrative 
                  support. Our partnership with Afrilink Telecoms enhances our offerings by providing 
                  website development, hosting, and email services at preferential rates.
                </p>
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

      {/* Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="team-heading">
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
            <div className="bg-light-grey rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-1">
              <div className="mb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Sipho Mampe" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">SM</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Sipho Mampe</h3>
              <p className="text-primary font-semibold mb-4">Chairman / Director</p>
              <p className="text-medium-grey">
                Brings extensive expertise in financial strategy and compliance. Sipho oversees operations 
                and fosters relationships with Hindsight Consulting and its clients.
              </p>
            </div>

            {/* Dineo Rametsi */}
            <div className="bg-light-grey rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-2">
              <div className="mb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Dineo Rametsi" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">DR</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Dineo Rametsi</h3>
              <p className="text-primary font-semibold mb-4">Accountant</p>
              <p className="text-medium-grey">
                A skilled leader in financial management, Dineo drives client account oversight and provides 
                strategic direction to ensure operational excellence.
              </p>
            </div>

            {/* Ipeleng Mogapi */}
            <div className="bg-light-grey rounded-2xl p-8 text-center hover-float animate-on-scroll stagger-3">
              <div className="mb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Ipeleng Mogapi" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">IM</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Ipeleng Mogapi</h3>
              <p className="text-primary font-semibold mb-4">Bookkeeper</p>
              <p className="text-medium-grey">
                A versatile team member handling administrative tasks, including CIPC registrations, SARS 
                eFiling registrations, tender opportunity searches, and accounting support through QuickBooks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-lg text-medium-grey">
              Our team operates from a modern office in Ferndale, Randburg, maintaining a professional 
              atmosphere to accommodate client needs.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-grey" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto text-center">
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-12 animate-on-scroll">
            Our Strategic <span className="text-primary">Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-1">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Afrilink Telecoms</h3>
              <p className="text-medium-grey">
                Leading telecommunications partner providing digital infrastructure and connectivity solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-2">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Tsogang Brands</h3>
              <p className="text-medium-grey">
                Strategic branding and marketing partner helping businesses establish their market presence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover-float animate-on-scroll stagger-3">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-charcoal mb-2">Industry Leaders</h3>
              <p className="text-medium-grey">
                Collaborating with various industry leaders to provide comprehensive business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hindsight Online Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="online-heading">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground float-delayed">
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
      </section>
    </main>
  );
};

export default Index;
