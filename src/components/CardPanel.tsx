'use client'
import { useReducer, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import getVenues from "@/libs/getVenues"
import { useRef, useEffect } from "react"


export default function CardPanel() {

    const [venueResponse, setVenueResponse] = useState(null)

    useEffect(() => {
        const fethData = async () => {
            const venues = await getVenues()
            setVenueResponse(venues)
        }
        fethData()
    }, [])

    const compareReducer = (compareList: Set<string>, action: { type: string, venueName: string }) => {
        switch (action.type) {
            case "add":
                return new Set(compareList.add(action.venueName));
            case "remove":
                compareList.delete(action.venueName);
                return new Set(compareList);
            default:
                return compareList;
        }
    }

    const ratingReducer = (ratingMap: Map<string, number>, action: { type: string, venueName: string, rating: number }) => {
        switch (action.type) {
            case "rate":
                return new Map(ratingMap).set(action.venueName, action.rating);
            case "remove":
                const updatedRatingMap = new Map(ratingMap);
                updatedRatingMap.delete(action.venueName);
                return updatedRatingMap;
            default:
                return ratingMap;
        }
    }

    const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>());
    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]));

    const handleRatingChange = (venueName: string, rating: number | null) => {
        if (rating !== null) {
            dispatchRating({ type: "rate", venueName, rating });
        }
    };
    
}