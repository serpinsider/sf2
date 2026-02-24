'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TYPOGRAPHY } from '@/styles/typography';
import { INLINE_STYLES } from '@/styles/colors';

const sanJoseAreas = {
  sanJose: [
    { name: 'San Jose', slug: 'san-jose' },
    { name: 'Santa Clara', slug: 'santa-clara' },
    { name: 'Sunnyvale', slug: 'sunnyvale' },
    { name: 'Cupertino', slug: 'cupertino' },
    { name: 'Campbell', slug: 'campbell' },
    { name: 'Milpitas', slug: 'milpitas' }
  ],
  sjNeighborhoods: [
    'Willow Glen', 'Almaden', 'Evergreen', 'Berryessa', 'Cambrian',
    'Rose Garden', 'Downtown San Jose', 'Japantown', 'Silver Creek', 'Blossom Valley'
  ],
  siliconValley: [
    { name: 'Mountain View', slug: 'mountain-view' },
    { name: 'Palo Alto', slug: 'palo-alto' },
    { name: 'Los Gatos', slug: 'los-gatos' },
    { name: 'Saratoga', slug: 'saratoga' },
    { name: 'Los Altos', slug: 'los-altos' },
    { name: 'Morgan Hill', slug: 'morgan-hill' }
  ],
  surrounding: [
    { name: 'Fremont', slug: 'fremont' },
    { name: 'Newark', slug: 'newark' },
    { name: 'Union City', slug: 'union-city' },
    { name: 'Gilroy', slug: 'gilroy' },
    { name: 'Hollister', slug: 'hollister' }
  ]
};

export default function AreasWeServeSection() {
  const [showAllAreas, setShowAllAreas] = useState(false);
  
  return (
    <section id="areas" className="pt-20 pb-12" style={INLINE_STYLES.primary}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={TYPOGRAPHY.sectionTitle}>
            Areas We Serve
          </h2>
          <p className={`${TYPOGRAPHY.description} max-w-3xl mx-auto`}>
            Professional cleaning services throughout San Jose, Santa Clara County & Silicon Valley
          </p>
        </div>

        {/* Single Grid - All Cards Flow Naturally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* San Jose & Santa Clara */}
          <div className="bg-[rgba(22,48,75,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 hover:bg-[rgba(26,55,85,0.98)] transition-all">
            <h3 className="text-xl font-serif font-bold text-[#dfbd69] mb-4">
              San Jose
            </h3>
            <ul className="space-y-2">
              {sanJoseAreas.sanJose.map((area) => (
                <li key={area.slug} className="flex items-center text-white/80 text-sm">
                  <svg className="w-3.5 h-3.5 text-[#dfbd69] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link 
                    href={`/locations/${area.slug}`}
                    className="hover:text-[#dfbd69] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* San Jose Neighborhoods */}
          <div className="bg-[rgba(22,48,75,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 hover:bg-[rgba(26,55,85,0.98)] transition-all">
            <h3 className="text-xl font-serif font-bold text-[#dfbd69] mb-4">
              <Link href="/locations/san-jose" className="hover:text-[#dfbd69]/80 transition-colors">
                SJ Neighborhoods
              </Link>
            </h3>
            <ul className="space-y-2">
              {(showAllAreas ? sanJoseAreas.sjNeighborhoods : sanJoseAreas.sjNeighborhoods.slice(0, 5)).map((area) => (
                <li key={area} className="flex items-center text-white/80 text-sm">
                  <svg className="w-3.5 h-3.5 text-[#dfbd69] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Silicon Valley */}
          <div className="bg-[rgba(22,48,75,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 hover:bg-[rgba(26,55,85,0.98)] transition-all">
            <h3 className="text-xl font-serif font-bold text-[#dfbd69] mb-4">
              Silicon Valley
            </h3>
            <ul className="space-y-2">
              {sanJoseAreas.siliconValley.map((area) => (
                <li key={area.slug} className="flex items-center text-white/80 text-sm">
                  <svg className="w-3.5 h-3.5 text-[#dfbd69] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link 
                    href={`/locations/${area.slug}`}
                    className="hover:text-[#dfbd69] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Surrounding Areas */}
          <div className="bg-[rgba(22,48,75,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 hover:bg-[rgba(26,55,85,0.98)] transition-all">
            <h3 className="text-xl font-serif font-bold text-[#dfbd69] mb-4">
              Surrounding Areas
            </h3>
            <ul className="space-y-2">
              {sanJoseAreas.surrounding.map((area) => (
                <li key={area.slug} className="flex items-center text-white/80 text-sm">
                  <svg className="w-3.5 h-3.5 text-[#dfbd69] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link 
                    href={`/locations/${area.slug}`}
                    className="hover:text-[#dfbd69] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Show More/Less Button */}
        <div className="text-center pt-4 pb-8">
          <hr className="border-t border-white/10 mb-12" />
          <button
            onClick={() => setShowAllAreas(!showAllAreas)}
            className="inline-flex items-center px-8 py-3 text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-[1px] shadow-lg hover:shadow-xl"
          >
            {showAllAreas ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Show Less Service Areas
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Show All Service Areas
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
