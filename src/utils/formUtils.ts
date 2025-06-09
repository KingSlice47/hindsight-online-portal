
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export const validateContactForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  // Simulate form submission
  console.log('Submitting contact form:', data);
  
  // In a real application, this would send data to a server
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return true;
};
