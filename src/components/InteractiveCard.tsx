'use client'
import React from "react"

export default function InteractiveCard({ children, venueName }: {children: React.ReactNode, venueName: string}) {

    // function onClick(event: React.MouseEvent) {
    //     if ((event.target as HTMLElement).closest('.MuiRating-root')) {
    //         return;
    //     }
    //     alert("You selected " + venueName);
    // }

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type === "mouseover") {
            (event.currentTarget as HTMLElement).classList.remove("shadow-lg");
            (event.currentTarget as HTMLElement).classList.add("shadow-2xl");
            (event.currentTarget as HTMLElement).classList.add("bg-neutral-200");
        } else {
            (event.currentTarget as HTMLElement).classList.remove("shadow-2xl");
            (event.currentTarget as HTMLElement).classList.add("shadow-lg");
            (event.currentTarget as HTMLElement).classList.remove("bg-neutral-200");
        }
    }

    return (
        <div className='w-72 h-auto rounded-lg shadow-lg bg-white transition-all' 
            // onClick={onClick}
            onMouseOver={onCardMouseAction}
            onMouseOut={onCardMouseAction}>
            {children}
        </div>
    ); 
}