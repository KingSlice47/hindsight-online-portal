
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Calculator, TrendingUp, Phone } from 'lucide-react';

const PricingSection = () => {
  const accountingPackages = [
    {
      name: "Compliance & Reporting",
      price: "R4,900",
      description: "Monthly processing of transactions for non-VAT registered companies, as per your bank statement (no supplier processing).",
      features: [
        "Annual Financial Statements",
        "All returns: VAT, Withholding Tax, Provisional Tax & Income Tax",
        "Bookkeeping, tax & technical queries assistance",
        "Dedicated finance and payroll teams",
        "Monthly recons"
      ],
      buttonText: "Start Here",
      popular: false
    },
    {
      name: "Outsourced Accountant",
      price: "R7,300",
      description: "We process all supplier invoices and all other transactions on a MONTHLY basis (VAT registered companies).",
      features: [
        "All default inclusions",
        "Monthly supplier invoice processing",
        "VAT registered company support",
        "Monthly recons",
        "Monthly reports"
      ],
      buttonText: "Start Here",
      popular: true
    },
    {
      name: "Financial Management",
      price: "R18,900",
      description: "We process all supplier invoices and all other transactions on a DAILY basis (companies who require daily work).",
      features: [
        "All default inclusions",
        "Daily transaction processing",
        "Weekly recons",
        "Weekly reports",
        "Premium support"
      ],
      buttonText: "Start Here",
      popular: false
    }
  ];

  const payrollPackages = [
    {
      name: "Standard Package",
      employees: "1-10 Employees",
      price: "R1,400",
      takeOnFee: "R700.00"
    },
    {
      name: "Growth Package", 
      employees: "11-50 Employees",
      price: "R2,050",
      takeOnFee: "R1,500.00"
    },
    {
      name: "Premium Package",
      employees: "51-100 Employees", 
      price: "R2,550",
      takeOnFee: "R1,500.00"
    },
    {
      name: "Enterprise Package",
      employees: "101-300 Employees",
      price: "R3,850", 
      takeOnFee: "R2,000.00"
    }
  ];

  const payrollFeatures = [
    "Monthly payslips",
    "Leave management", 
    "Payroll payment batches",
    "Employee info updates",
    "Monthly EMP201 submissions",
    "Bi-annual EMP501 submissions",
    "COIDA return of earnings",
    "UIF returns",
    "Department of labour compliance",
    "Expense claims"
  ];

  const debtorsPackages = [
    {
      name: "Standard Package",
      price: "R3,750",
      description: "Once a month follow up: Send statements to clients and one personalised email about outstanding accounts. (Capped to 50 clients)",
      features: [
        "Customised feedback report (Once a month)",
        "Send Acknowledgement of debt letter (Capped to 2 letters)",
        "Monthly client follow-up",
        "50 client limit"
      ]
    },
    {
      name: "Premium Package", 
      price: "R10,500",
      description: "Twice a month follow up: Send statements to clients and one personalised email about outstanding accounts. (Capped to 80 clients)",
      features: [
        "Issue of sales invoices (Capped to 200 invoices) - ONLY once a month",
        "Receipts capturing in Xero - ONLY twice a month before each follow up",
        "80 client limit",
        "Bi-monthly follow-up"
      ]
    },
    {
      name: "Established Package",
      price: "R16,500", 
      description: "Weekly follow up: Send statements to clients and one personalised email about outstanding accounts. (Capped to 150 clients)",
      features: [
        "Receipts capturing in Xero - Once a week before each follow up",
        "Run debit orders - Capped to 200 clients", 
        "150 client limit",
        "Weekly follow-up"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Pricing Made <span className="text-primary">Simple</span>
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Transparent Plans, Clear Choices.
          </p>
        </div>

        {/* Accounting Packages */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 flex items-center justify-center">
              <Calculator className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              Accounting Packages
            </h3>
            <p className="text-lg text-medium-grey">Default Inclusions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {accountingPackages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`hover-float animate-on-scroll relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-charcoal">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-medium-grey">/month, Excluding VAT</span>
                  </div>
                  <CardDescription className="mt-4">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-medium-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full hover-float focus-ring">
                    {pkg.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payroll Packages */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              Only need payroll assistance?
            </h3>
            <p className="text-lg text-medium-grey">We can! With our payroll packages below:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {payrollPackages.map((pkg, index) => (
              <Card key={pkg.name} className="hover-float animate-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-charcoal">{pkg.name}</CardTitle>
                  <CardDescription className="text-medium-grey">{pkg.employees}</CardDescription>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-medium-grey block">Monthly, Excluding VAT</span>
                    <span className="text-sm text-medium-grey mt-2 block">
                      Once-off Take on fee: {pkg.takeOnFee} Excluding VAT
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="animate-on-scroll bg-light-grey">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-charcoal text-center mb-6">
                Here's what our payroll service entails:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {payrollFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-medium-grey">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" className="hover-float focus-ring">
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Schedule A Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Debtors Management Packages */}
        <div>
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              Debtors Management Standalone Packages
            </h3>
            <div className="bg-light-grey p-4 rounded-lg max-w-4xl mx-auto">
              <p className="text-sm text-medium-grey">
                <strong>Optional Add-Ons:</strong> Liaise with legal department, Send Acknowledgement of debt letter (Exceeding the number included in package), Send Final Demand letter (Exceeding the number included in package)
              </p>
              <p className="text-sm text-medium-grey mt-2">
                <strong>Excludes:</strong> Quotes, daily issuing of receivables invoices, legal action, and weekly meetings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {debtorsPackages.map((pkg, index) => (
              <Card key={pkg.name} className="hover-float animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-charcoal">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-medium-grey block">Monthly, Excluding VAT</span>
                  </div>
                  <CardDescription className="mt-4">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-medium-grey text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button className="w-full hover-float focus-ring">
                      Start Here
                    </Button>
                    <Button variant="outline" className="w-full hover-float focus-ring text-xs">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Link */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-medium-grey mb-4">
            For more detailed pricing information, visit our comprehensive pricing page:
          </p>
          <Button variant="outline" asChild className="hover-float focus-ring">
            <a 
              href="https://thebeancounter.co.za/price/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              View Full Pricing Details
              <TrendingUp className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
