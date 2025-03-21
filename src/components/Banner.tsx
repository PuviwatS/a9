"use client"; 
import styles from './banner.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const images = [
    "/image/cover.jpg",
    "/image/cover2.jpg",
    "/image/cover3.jpg",
    "/image/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();
  
    return (
      <div className={styles.banner} onClick={() => {setIndex(index+1)}}>
        <Image src={images[index %4]}
          alt='cover'
          fill={true}
          objectFit='cover'
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-medium">where every event finds its venue</h1>
          <p className="text-xl">
          Finding the perfect venue has never been easier. Whether it's a wedding,
          corporate event, or private party, we connect people to the perfect place.
          </p>
        </div>
          {
            session ? <div className='mt-20 z-50 absolute top-5 right-10'>Welcome {session.user?.name} </div>
                     : null
          }
        <button className="absolute bottom-4 right-4 bg-white text-black px-8 py-2 rounded-lg shadow-lg   hover:bg-gray-200 transition"
          onClick={(e)=>{ e.stopPropagation(); router.push('/venue') }}>
            Select Venue
        </button>

      </div>
      
    );
  }