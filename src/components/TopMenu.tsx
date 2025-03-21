import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function TopMenu() {

  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-end items-center px-4 bg-white fixed top-0 left-0 right-0 h-15 z-50">
      <div className="flex items-center">
        <TopMenuItem label="Booking" href="/booking" />
        <div className="flex items-center ml-4">
          <Image src="/image/logo.png" alt="Logo" className="h-full w-auto" width={50} height={50} />
        </div>
      </div>
      <div className="flex justify-end items-center px-4 bg-white fixed top-0 left-0 right-0 h-15 z-50">
        {
          session ? <Link href="/api/auth/signout"><div className='flex items-center absolute left-0 px-4 mt-[20px] text-cyan-600 text-sm'>
          Sign-Out of {session.user?.name}</div></Link>
          : 
          <Link href="/api/auth/signin"><div className='flex items-center absolute left-0 px-4 mt-[20px] text-cyan-600 text-sm'>Sign-In</div></Link>
        }
      </div>
    </div>
  );
};