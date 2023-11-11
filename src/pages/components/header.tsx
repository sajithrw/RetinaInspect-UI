import Image  from 'next/image';
import Logo from './logo';
import { signOut } from 'next-auth/react';

export default function Header({ data }) {
    return (
        <div className="pt-5 pb-4 grid grid-cols-2 gap-0">
            <div className="flex items-center justify-start">
                <h2 className="font-bold text-2xl"><Logo/></h2>
            </div>
            <div className="flex items-center justify-end">
                <button className="w-20 py-1 text-sm font-semibold mr-2 hover:underline"
                onClick={() => signOut()}>Sign out</button>
                <Image className="self-center rounded-full border-2" src={data?.user?.image!} alt={data?.user?.name! + ' photo'} width={40} height={40}/>
            </div>
        </div>
    );
}