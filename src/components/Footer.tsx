
import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-xl font-bold mb-4 text-primary">Hindsight Consulting</h3>
            <p className="text-medium-grey mb-4">
              Tech-driven financial & compliance solutions for South African SMEs since 2017.
            </p>
            <address className="text-medium-grey not-italic">
              Unit 1, Randpark Building<br />
              20 Dover Street, Ferndale<br />
              Randburg, South Africa
            </address>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up stagger-2">
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-2 text-medium-grey">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:accounts@hindsightonline.co.za" 
                  className="hover:text-primary transition-colors duration-300 focus-ring rounded"
                >
                  accounts@hindsightonline.co.za
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:+27721610801" 
                  className="hover:text-primary transition-colors duration-300 focus-ring rounded"
                >
                  072 161 0801
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="fade-in-up stagger-3">
            <h3 className="text-xl font-bold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/hindsight-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-medium-grey hover:bg-primary text-white rounded-md transition-all duration-300 hover-float focus-ring"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/hindsightconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-medium-grey hover:bg-primary text-white rounded-md transition-all duration-300 hover-float focus-ring"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/hindsightconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-medium-grey hover:bg-primary text-white rounded-md transition-all duration-300 hover-float focus-ring"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-medium-grey mt-8 pt-8 text-center text-medium-grey">
          <p>&copy; {new Date().getFullYear()} Hindsight Consulting (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
