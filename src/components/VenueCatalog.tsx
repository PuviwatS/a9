import Link from "next/link"
import Card from "./Card"
import getVenues from "@/libs/getVenues"
import { ClassNames } from "@emotion/react"

interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
}

interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
}


export default async function VenueCatalog({ venueJson }: { venueJson: Promise<VenueJson> }) {

    const venueJsonReady = await getVenues()

    return (
        <>
            Explore {venueJsonReady.count} models of in our catalog
            <div className="flex justify-center items-start w-full gap-16 mt-10">
                {venueJsonReady.data.map((venue:VenueItem) => (
                    <Link key={venue.id} href={`/venue/${venue.id}`} className="w-1/5">
                        <Card
                            venueName={venue.name}
                            imgSrc={venue.picture}/>
                    </Link>
                    ))}
            </div>
            
        </>
    )
}