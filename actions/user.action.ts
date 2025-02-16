"use server";

import User from "@/app/models/User.model";

import { connect } from "@/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.stringify(newUser);
  } catch (error) {
    console.log(error);
  }
}
