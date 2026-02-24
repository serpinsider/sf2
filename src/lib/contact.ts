// Centralized contact information for San Jose Maids
export const CONTACT_INFO = {
  phone: {
    display: '(408) 000-0000',
    href: 'tel:+14080000000',
    raw: '+14080000000'
  },
  email: {
    display: 'hello@sanjosemaids.com',
    href: 'mailto:hello@sanjosemaids.com',
    raw: 'hello@sanjosemaids.com'
  },
  address: {
    street: '123 Main Street',
    city: 'San Jose',
    state: 'CA',
    zip: '95112',
    full: '123 Main Street, San Jose, CA 95112'
  },
  social: {
    facebook: 'https://www.facebook.com/sanjosemaids',
    instagram: 'https://www.instagram.com/sanjosemaids',
    yelp: 'https://www.yelp.com/biz/san-jose-maids-san-jose'
  },
  hours: {
    weekday: '8:00 AM - 8:00 PM',
    weekend: '9:00 AM - 6:00 PM'
  }
} as const;
