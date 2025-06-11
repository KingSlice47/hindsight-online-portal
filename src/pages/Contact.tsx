import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { ContactFormData, FormErrors, validateContactForm, submitContactForm } from '../utils/formUtils';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateContactForm(formData);
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
        aria-labelledby="contact-heading"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal bg-opacity-75"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 id="contact-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-light-grey max-w-3xl mx-auto fade-in-up stagger-1">
            Ready to transform your business with our expert financial and compliance solutions? 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Content with Enhanced Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-charcoal mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover-float">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Our Office</h3>
                    <address className="text-medium-grey not-italic">
                      Unit 1, Randpark Building<br />
                      20 Dover Street, Ferndale<br />
                      Randburg, South Africa
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover-float">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Email Us</h3>
                    <a 
                      href="mailto:accounts@hindsightonline.co.za"
                      className="text-medium-grey hover:text-primary transition-colors duration-300 focus-ring rounded"
                    >
                      accounts@hindsightonline.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover-float">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Call Us</h3>
                    <a 
                      href="tel:+27721610801"
                      className="text-medium-grey hover:text-primary transition-colors duration-300 focus-ring rounded"
                    >
                      072 161 0801
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-light-grey flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Interactive Map</h3>
                    <p className="text-medium-grey">
                      Click to view our location on Google Maps
                    </p>
                    <a
                      href="https://maps.google.com?q=Unit+1+Randpark+Building+20+Dover+Street+Ferndale+Randburg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-accent transition-colors duration-300 focus-ring"
                      aria-label="View our location on Google Maps"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll stagger-1">
              <h2 className="text-3xl font-bold text-charcoal mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus-ring transition-colors duration-300 ${
                      errors.name ? 'border-red-500' : 'border-light-grey focus:border-primary'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus-ring transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-light-grey focus:border-primary'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus-ring transition-colors duration-300 ${
                      errors.subject ? 'border-red-500' : 'border-light-grey focus:border-primary'
                    }`}
                    placeholder="What can we help you with?"
                  />
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus-ring transition-colors duration-300 resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-light-grey focus:border-primary'
                    }`}
                    placeholder="Tell us more about your requirements..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-float focus-ring inline-flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours with Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
        aria-labelledby="hours-heading"
      >
        <div className="absolute inset-0 bg-light-grey bg-opacity-95"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white bg-opacity-95 rounded-2xl p-8 md:p-12 text-center animate-on-scroll shadow-lg">
            <h2 id="hours-heading" className="text-3xl font-bold text-charcoal mb-8">
              Business <span className="text-primary">Hours</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-4">Office Hours</h3>
                <div className="space-y-2 text-medium-grey">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-4">Emergency Support</h3>
                <div className="space-y-2 text-medium-grey">
                  <p>For urgent matters outside business hours:</p>
                  <p className="text-primary font-semibold">072 161 0801</p>
                  <p className="text-sm">Response within 2-4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
