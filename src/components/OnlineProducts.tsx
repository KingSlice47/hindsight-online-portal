
import React, { useState } from 'react';
import { FileText, Upload, Building, Calculator, UserCheck, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface OnlineService {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
}

const onlineServices: OnlineService[] = [
  {
    id: 'company-registration',
    title: 'Company Registration',
    description: 'Complete company registration with CIPC including all required documentation and compliance.',
    price: 'R 2,500',
    icon: Building
  },
  {
    id: 'coida-returns',
    title: 'COIDA Returns',
    description: 'Professional COIDA return submissions ensuring compliance with compensation fund requirements.',
    price: 'R 850',
    icon: FileCheck
  },
  {
    id: 'income-tax-returns',
    title: 'Income Tax Returns',
    description: 'Comprehensive individual and company income tax return preparation and submission.',
    price: 'R 650',
    icon: Calculator
  },
  {
    id: 'tax-representative',
    title: 'Tax Representative Registration',
    description: 'Registration as a tax representative with SARS for efficient tax administration.',
    price: 'R 1,200',
    icon: UserCheck
  },
  {
    id: 'cipc-returns',
    title: 'CIPC Returns',
    description: 'Annual return submissions and compliance filings with the Companies and Intellectual Property Commission.',
    price: 'R 750',
    icon: FileText
  }
];

interface FormData {
  firstName: string;
  lastName: string;
  idPassport: string;
  email: string;
  cellNumber: string;
  documents: FileList | null;
}

const OnlineProducts = () => {
  const [selectedService, setSelectedService] = useState<OnlineService | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    idPassport: '',
    email: '',
    cellNumber: '',
    documents: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleServiceSelect = (service: OnlineService) => {
    setSelectedService(service);
    setFormData({
      firstName: '',
      lastName: '',
      idPassport: '',
      email: '',
      cellNumber: '',
      documents: null
    });
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (files: FileList | null) => {
    setFormData(prev => ({ ...prev, documents: files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Service request submitted:', {
      service: selectedService.title,
      ...formData,
      documentsCount: formData.documents?.length || 0
    });

    toast({
      title: "Request Submitted Successfully",
      description: `Your ${selectedService.title} request has been received. We'll contact you within 24 hours.`,
    });

    setIsSubmitting(false);
    setSelectedService(null);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-grey" aria-labelledby="online-products-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="online-products-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-6 animate-on-scroll">
            Online <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto animate-on-scroll stagger-1">
            Professional compliance and registration services available online with transparent pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onlineServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`hover-float transition-all duration-300 animate-on-scroll stagger-${(index % 3) + 1}`}>
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-xl text-charcoal">{service.title}</CardTitle>
                  <CardDescription className="text-medium-grey">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => handleServiceSelect(service)}
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{service.title} Request</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to request {service.title} services. Price: {service.price}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="idPassport">ID/Passport Number *</Label>
                          <Input
                            id="idPassport"
                            value={formData.idPassport}
                            onChange={(e) => handleInputChange('idPassport', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cellNumber">Cell Number *</Label>
                          <Input
                            id="cellNumber"
                            type="tel"
                            value={formData.cellNumber}
                            onChange={(e) => handleInputChange('cellNumber', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="documents">Upload Documents</Label>
                          <div className="mt-2">
                            <Input
                              id="documents"
                              type="file"
                              multiple
                              onChange={(e) => handleFileChange(e.target.files)}
                              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-accent"
                            />
                          </div>
                          <p className="text-sm text-medium-grey mt-1">
                            Upload any relevant documents (ID copy, bank statements, etc.)
                          </p>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : `Submit Request - ${service.price}`}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnlineProducts;
