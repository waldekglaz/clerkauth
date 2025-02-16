"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello, {user.firstName} welcome to clerk
    </div>
  );
};

export default ClientPage;
