import { CONTACT_INFO } from '@/lib/contact';

interface StructuredDataProps {
  type: 'local-business' | 'service' | 'location' | 'organization' | 'website' | 'faq';
  data?: {
    location?: string;
    service?: string;
    cities?: string[];
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'local-business':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "San Jose Maids",
          "image": "https://www.sanjosemaids.com/ogs-image.jpg",
          "description": "House cleaning services across San Jose and Silicon Valley. Reliable, thorough, and trusted cleaning for your home.",
          "url": "https://www.sanjosemaids.com",
          "telephone": CONTACT_INFO.phone.raw,
          "email": CONTACT_INFO.email.raw,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": CONTACT_INFO.address.state,
            "addressLocality": CONTACT_INFO.address.city,
            "postalCode": CONTACT_INFO.address.zip,
            "streetAddress": CONTACT_INFO.address.street
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.3382,
            "longitude": -121.8863
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "California"
            },
            // San Jose
            { "@type": "City", "name": "San Jose" },
            // Santa Clara County
            { "@type": "City", "name": "Santa Clara" },
            { "@type": "City", "name": "Sunnyvale" },
            { "@type": "City", "name": "Cupertino" },
            { "@type": "City", "name": "Mountain View" },
            { "@type": "City", "name": "Milpitas" },
            { "@type": "City", "name": "Campbell" },
            { "@type": "City", "name": "Los Gatos" },
            { "@type": "City", "name": "Saratoga" },
            { "@type": "City", "name": "Palo Alto" },
            // San Jose Neighborhoods
            { "@type": "AdministrativeArea", "name": "Willow Glen" },
            { "@type": "AdministrativeArea", "name": "Almaden" },
            { "@type": "AdministrativeArea", "name": "Evergreen" },
            { "@type": "AdministrativeArea", "name": "Berryessa" },
            { "@type": "AdministrativeArea", "name": "Cambrian" },
            { "@type": "AdministrativeArea", "name": "Rose Garden" },
            // Surrounding Areas
            { "@type": "City", "name": "Fremont" },
            { "@type": "City", "name": "Newark" },
            { "@type": "City", "name": "Union City" }
          ],
          "serviceType": ["House Cleaning", "Maid Service", "Residential Cleaning"],
          "priceRange": "$80-$400",
          "openingHours": ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
          "currenciesAccepted": "USD",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/sanjosemaids",
            "https://www.instagram.com/sanjosemaids",
            "https://www.linkedin.com/company/sanjosemaids",
            "https://twitter.com/sanjosemaids"
          ]
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "San Jose Maids",
          "url": "https://www.sanjosemaids.com",
          "logo": "https://www.sanjosemaids.com/ogs-image.jpg",
          "description": "House cleaning services across San Jose and Silicon Valley.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+17145976420",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/sanjosemaids",
            "https://www.instagram.com/sanjosemaids",
            "https://www.linkedin.com/company/sanjosemaids",
            "https://twitter.com/sanjosemaids"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "San Jose Maids",
          "alternateName": ["San Jose Maids Cleaning", "sanjosemaids.com"],
          "url": "https://www.sanjosemaids.com",
          "description": "House cleaning services across San Jose and Silicon Valley",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.sanjosemaids.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's included in your cleans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every clean includes sweeping, mopping, vacuuming, cleaning surfaces in bedrooms, bathrooms, common areas, and kitchen. We ensure thorough cleaning of all specified areas."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between a standard clean and a deep clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our deep cleans include everything in a standard clean plus wiping down doors, door frames, windowsills, window frames, and baseboards for a more thorough cleaning experience."
              }
            },
            {
              "@type": "Question",
              "name": "What's a move out clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Move in/out cleans are our most thorough service. We include everything from the deep clean plus cleaning inside cabinets, closets, and wiping down all shelves to ensure the space is ready for new occupants."
              }
            },
            {
              "@type": "Question",
              "name": "Do you bring your own supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use pet-safe and non-toxic products. We bring our own mops and vacuum (upon request)."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer recurring service discounts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Save 10% with weekly service, 5% with bi-weekly service, or $10 off monthly cleanings."
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services${data?.location ? ` in ${data.location}` : ''}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "San Jose Maids",
            "url": "https://www.sanjosemaids.com"
          },
          "serviceType": "House Cleaning",
          "description": `House cleaning and maid services${data?.location ? ` in ${data.location}` : ''}. Regular cleaning, deep cleaning, move-out cleaning, and specialty services.`,
          "areaServed": data?.location ? {
            "@type": "State",
            "name": data.location
          } : undefined,
          "offers": [
            {
              "@type": "Offer",
              "name": "Regular Cleaning",
              "description": "Weekly, bi-weekly, or monthly cleaning services",
              "price": "89",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "89",
                "maxPrice": "200",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "Offer", 
              "name": "Deep Cleaning",
              "description": "Comprehensive deep cleaning service",
              "price": "150",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "150",
                "maxPrice": "300",
                "priceCurrency": "USD"
              }
            }
          ]
        };

      case 'location':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services in ${data?.location}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "San Jose Maids"
          },
          "serviceArea": {
            "@type": "State",
            "name": data?.location
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Cleaning Services in ${data?.location}`,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Regular House Cleaning",
                  "description": "Weekly, bi-weekly, or monthly cleaning"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep Cleaning",
                  "description": "Thorough, detailed cleaning service"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Move-out Cleaning",
                  "description": "Complete cleaning for moving"
                }
              }
            ]
          }
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}