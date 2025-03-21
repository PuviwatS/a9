'use client'
import { useState } from "react";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

export default function Card({venueName, imgSrc, onRatingChange} : {venueName:string, imgSrc:string, onRatingChange?:Function}) {
  const [rating, setRating] = useState<number | null>(0);

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    {onRatingChange?
      onRatingChange(venueName, newValue) : ''
    }
    setRating(newValue);
  };

  return (
    <InteractiveCard venueName={venueName}>
      <div className="border border-gray-300 rounded-t-lg overflow-hidden shadow-lg transition-transform duration-200 transform mr-4 w-72 bg-white h-[200px]">
        <Image src={imgSrc} alt="Card" className="object-cover" fill={true} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 h-[30%]">{venueName}</h2>
      </div>
      <div className="p-4 text-center h-[30%]">
      {
        onRatingChange? 
        <Rating
        id={`${venueName} Rating`}
        name={`${venueName} Rating`}
        data-testid={`${venueName} Rating`}
        value={rating}
        onClick={ (e)=>{e.stopPropagation()}}
        onChange={handleRatingChange} /> : ' '
      }
      </div>
    </InteractiveCard>
  );
};
