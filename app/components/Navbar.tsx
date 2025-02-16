import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <ul className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/client">
            <li>Client Page</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {!userId ? (
            <>
              <Link href="/sign-in">Login</Link>
              <Link href="/sign-up">Sign Up</Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
