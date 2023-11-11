import { useSession } from 'next-auth/react';
import Dashboard from './dashboard';
import Login from './components/login';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    return <Login/>
  } 
  
  if (status === 'authenticated') {
    return <Dashboard />
  }
}
