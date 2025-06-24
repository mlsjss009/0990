// Centralized action flow management for Hope Together NGO

export type ActionType = 
  | 'grant_application'
  | 'volunteer_register'
  | 'contact_form'
  | 'newsletter_subscribe'
  | 'grant_application'
  | 'watch_video'
  | 'view_news'
  | 'download_resources';

export interface ActionFlow {
  id: ActionType;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
  steps: string[];
  redirectUrl?: string;
  requiresForm?: boolean;
}

export const actionFlows: Record<ActionType, ActionFlow> = {
  donate: {
    id: 'donate',
    title: 'Make a Donation',
    description: 'Support our mission to transform lives through community action',
    primaryAction: 'Donate Now',
    secondaryAction: 'Monthly Giving',
    steps: [
      'Choose donation amount',
      'Select payment method',
      'Complete secure payment',
      'Receive confirmation'
    ],
    redirectUrl: '#donate-form',
    requiresForm: true
  },
  
  volunteer_register: {
    id: 'volunteer_register',
    title: 'Become a Volunteer',
    description: 'Join our global community of changemakers',
    primaryAction: 'Register Now',
    secondaryAction: 'Learn More',
    steps: [
      'Fill application form',
      'Select preferred programs',
      'Complete background check',
      'Attend orientation'
    ],
    redirectUrl: '#volunteer-form',
    requiresForm: true
  },
  
  contact_form: {
    id: 'contact_form',
    title: 'Contact Us',
    description: 'Get in touch with our team',
    primaryAction: 'Send Message',
    steps: [
      'Fill contact details',
      'Write your message',
      'Submit form',
      'Receive response within 24 hours'
    ],
    requiresForm: true
  },
  
  newsletter_subscribe: {
    id: 'newsletter_subscribe',
    title: 'Stay Updated',
    description: 'Get monthly updates on our impact and programs',
    primaryAction: 'Subscribe',
    steps: [
      'Enter email address',
      'Confirm subscription',
      'Receive welcome email'
    ],
    requiresForm: true
  },
  
  grant_application: {
    id: 'grant_application',
    title: 'Apply for Grant',
    description: 'Submit your community project for funding consideration',
    primaryAction: 'Start Application',
    secondaryAction: 'Download Guidelines',
    steps: [
      'Review eligibility criteria',
      'Prepare required documents',
      'Complete online application',
      'Submit for review'
    ],
    redirectUrl: '#grant-form',
    requiresForm: true
  },
  
  watch_video: {
    id: 'watch_video',
    title: 'Our Story',
    description: 'Watch how we are making a difference worldwide',
    primaryAction: 'Watch Video',
    steps: [
      'Open video player',
      'Watch our impact story',
      'Share with others'
    ],
    redirectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  
  view_news: {
    id: 'view_news',
    title: 'Latest News',
    description: 'Read about our recent activities and achievements',
    primaryAction: 'View All News',
    steps: [
      'Browse news articles',
      'Read full stories',
      'Share interesting articles'
    ],
    redirectUrl: '#news-section'
  },
  
  download_resources: {
    id: 'download_resources',
    title: 'Resources',
    description: 'Download reports, guidelines, and educational materials',
    primaryAction: 'Download',
    steps: [
      'Select resource type',
      'Provide contact details',
      'Download file'
    ],
    requiresForm: true
  }
};

// Utility functions for action flows
export const getActionFlow = (actionType: ActionType): ActionFlow => {
  return actionFlows[actionType];
};

export const executeAction = (actionType: ActionType, data?: any) => {
  const flow = getActionFlow(actionType);
  
  switch (actionType) {
    case 'grant_application':
      return handleGrantApplicationAction(data);
    case 'volunteer_register':
      return handleVolunteerAction(data);
    case 'contact_form':
      return handleContactAction(data);
    case 'newsletter_subscribe':
      return handleNewsletterAction(data);
    case 'watch_video':
      return handleVideoAction();
    case 'view_news':
      return handleNewsAction();
    default:
      console.log(`Action ${actionType} not implemented yet`);
  }
};

// Action handlers
const handleGrantApplicationAction = (data?: any) => {
  // Scroll to grant section
  const element = document.getElementById('grant-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  console.log('Grant application flow initiated', data);
};
const handleDonateAction = (data?: any) => {
  // Scroll to donation section
  const element = document.getElementById('donate-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback: scroll to contact section if donation section not found
    scrollToSection('contact');
  }
};

const handleVolunteerAction = (data?: any) => {
  // Scroll to volunteer section
  const element = document.getElementById('volunteer');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactAction = (data?: any) => {
  // Scroll to contact section
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleNewsletterAction = (data?: any) => {
  // Handle newsletter subscription
  console.log('Newsletter subscription:', data);
};

const handleVideoAction = () => {
  // Open video in modal or redirect to video page
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
};

const handleNewsAction = () => {
  // Scroll to news section
  const element = document.getElementById('news');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Smooth scroll utility
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};