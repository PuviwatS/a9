'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DateReserve from '../../components/DateReserve';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";   
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

  const session = await getServerSession(authOptions);
  if(!session ||  !session.user.token) return null;

  const userProfile = await getUserProfile(session.user.token);
  var createdAt = new Date(userProfile.data.createdAt)

  return (
    <Box className="w-[100%] flex flex-col items-center space-y-4 mt-20">
      <div className="text-xl font-medium">Bookings</div>
      <div className="w-fit space-y-2 text-left">
        <div className="text-lg font-bold">User Profile</div>
        <div>Name: {userProfile.data.name}</div>
        <div>Email: {userProfile.data.email}</div>
        <div>Tel: {userProfile.data.tel}</div>
        <div>Member Since: {createdAt.toString()}</div>
      </div>
      <div className="w-fit space-y-4">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
          className="min-w-[300px]"
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
          className="min-w-[300px]"
        />
        <div className="text-md text-left text-gray-600">
          Name-Surname
        </div>
        <DateReserve />
      </div>
      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
        Book Venue
      </button>
    </Box>
  );
}