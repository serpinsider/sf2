import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - San Jose Maids',
  description: 'Create your San Jose Maids account.',
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
