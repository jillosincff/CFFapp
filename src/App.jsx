import { useEffect, useState } from 'react';
import { AuthProvider } from '@/lib/AuthContext';
import StudentOnboardingV2 from '@/pages/StudentOnboardingV2';

const ROUTES = {
  StudentOnboardingV2,
};

function parseRoute() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [path] = raw.split('?');
  return path || 'StudentOnboardingV2';
}

function Router() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const onChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const Page = ROUTES[route] || StudentOnboardingV2;
  return <Page />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
