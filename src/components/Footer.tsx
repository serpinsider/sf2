import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/contact';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white border-t border-white/5" style={{ background: 'var(--primary-button-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 mb-3">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-xs text-white/80 hover:text-white">House Cleaning</Link></li>
              <li><Link href="/services/deep-clean" className="text-xs text-white/80 hover:text-white">Deep Cleaning</Link></li>
              <li><Link href="/services/move-out" className="text-xs text-white/80 hover:text-white">Move Out Cleaning</Link></li>
              <li><Link href="/services/commercial" className="text-xs text-white/80 hover:text-white">Commercial</Link></li>
              <li><Link href="/services/carpet-cleaning" className="text-xs text-white/80 hover:text-white">Carpet Cleaning</Link></li>
              <li><Link href="/services/handyman" className="text-xs text-white/80 hover:text-white">Handyman</Link></li>
              <li><Link href="/services/car-cleaning" className="text-xs text-white/80 hover:text-white">Car Detailing</Link></li>
              <li><Link href="/services/airbnb" className="text-xs text-white/80 hover:text-white">Airbnb Cleaning</Link></li>
              <li><Link href="/services/event-cleaning" className="text-xs text-white/80 hover:text-white">Event Cleaning</Link></li>
              <li><Link href="/services/post-construction" className="text-xs text-white/80 hover:text-white">Post-Construction</Link></li>
            </ul>
          </div>

          {/* San Jose */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 mb-3">San Jose</h3>
            <ul className="space-y-2.5">
              <li><Link href="/locations/san-jose" className="text-xs text-white/80 hover:text-white">San Jose</Link></li>
              <li><Link href="/locations/santa-clara" className="text-xs text-white/80 hover:text-white">Santa Clara</Link></li>
              <li><Link href="/locations/sunnyvale" className="text-xs text-white/80 hover:text-white">Sunnyvale</Link></li>
              <li><Link href="/locations/cupertino" className="text-xs text-white/80 hover:text-white">Cupertino</Link></li>
              <li><Link href="/locations/campbell" className="text-xs text-white/80 hover:text-white">Campbell</Link></li>
            </ul>
          </div>

          {/* Silicon Valley */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 mb-3">Silicon Valley</h3>
            <ul className="space-y-2.5">
              <li><Link href="/locations/mountain-view" className="text-xs text-white/80 hover:text-white">Mountain View</Link></li>
              <li><Link href="/locations/palo-alto" className="text-xs text-white/80 hover:text-white">Palo Alto</Link></li>
              <li><Link href="/locations/milpitas" className="text-xs text-white/80 hover:text-white">Milpitas</Link></li>
              <li><Link href="/locations/los-gatos" className="text-xs text-white/80 hover:text-white">Los Gatos</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 mb-3">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/#areas" className="text-xs text-white/80 hover:text-white">Service Areas</Link></li>
              <li><Link href="/#reviews" className="text-xs text-white/80 hover:text-white">Reviews</Link></li>
              <li><Link href="/#faq" className="text-xs text-white/80 hover:text-white">FAQ</Link></li>
              <li><Link href="/join-our-team" className="text-xs text-white/80 hover:text-white">Careers</Link></li>
              <li><Link href="/gift-cards" className="text-xs text-white/80 hover:text-white">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 mb-3">Customer Service</h3>
            <ul className="space-y-2.5">
              <li><Link href="/quote" className="text-xs text-white/80 hover:text-white">Get Quote</Link></li>
              <li><Link href="/contact" className="text-xs text-white/80 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-xs text-white/80 hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-white/80 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 py-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex items-center gap-8">
              <Logo size="sm" className="opacity-80" />
              <p className="text-xs text-white/40">
                Professional cleaning services across San Jose and Silicon Valley.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href={CONTACT_INFO.phone.href} className="text-xs text-white/60 hover:text-white">{CONTACT_INFO.phone.display}</a>
              <Link href="/refund" className="text-xs text-white/40 hover:text-white">Refund Policy</Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs text-white/40">
              Copyright &copy; {currentYear} San Jose Maids. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}