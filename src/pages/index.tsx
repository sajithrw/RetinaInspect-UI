import { FormEventHandler, useState } from 'react';
import { Inter } from 'next/font/google';
import { signIn, useSession } from 'next-auth/react';
import Image  from 'next/image';
import Dashboard from './dashboard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    // if (result.error) {
    //   console.error('Login failed:', result.error);
    // } else {
    //   console.log('Login successful! Redirecting to the home page.');
    // }
  };

  if (status === 'unauthenticated') {
    return (
      <main
        className={`flex min-h-screen items-center justify-center ${inter.className}`}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-center font-bold text-3xl">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">RetinaInspect</span>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500"> AI</span>
            </h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Type your email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6 text-gray-800 
                    placeholder:text-gray-300 focus:ring-1 focus:outline-none focus:ring-indigo-400 text-sm"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 ring-1 shadow-sm sm:text-sm sm:leading-6 text-gray-800
                    placeholder:text-gray-300 focus:ring-1 focus:outline-none focus:ring-indigo-400 text-sm"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white
                  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register here
              </a>
            </p>
            <p className="mt-2 text-center text-sm text-gray-300">
              Or <button className="hover:underline" onClick={() => signIn('google')}>Sign in with 
                    <Image className="inline ml-2" src="/google.svg" width={20} height={20} alt="Google logo" />  
                  </button>
            </p>
          </div>
        </div>
      </main>
    )
  } 
  
  if (status === 'authenticated') {
    return <Dashboard />
  }
}
