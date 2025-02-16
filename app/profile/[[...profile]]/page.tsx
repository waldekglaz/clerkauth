import { UserProfile } from "@clerk/nextjs";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    return redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1>{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
