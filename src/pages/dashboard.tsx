import { signOut, useSession } from 'next-auth/react';
import Image  from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
    const { data } = useSession();
    const date = new Date();
    
    return (
        <main
            className={`flex min-h-screen items-center justify-center ${inter.className}`}
        >
            <div className="flex justify-center flex-col text-center">
                <Image className="mt-5 inline self-center rounded-full border-2" src={data?.user?.image!} alt={data?.user?.name! + ' photo'} width={100} height={100}/>
                <h1 className="mt-5 my-5 text-center text-2xl"> Hello, {data?.user?.name}</h1>
                <p className="text-sm text-gray-500">Welcome to NexL, your development workspace for front-end applications.</p>
                <button className="mt-5 w-24 flex self-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white
                    shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => signOut()}>Sign out</button>
                <p className="mt-8 text-center text-sm text-gray-600">
                    By NexsoLabs @{date.getFullYear()}
                </p>
            </div>
        </main>
    );
}

