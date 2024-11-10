"use server"

import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string,role:string) {
  
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({userId,role,expiresAt });
  
  (await cookies()).set('session', session,
    {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  }
);
}

export async function deleteSession() {
  const cookie = await cookies()
  cookie.delete("session");
}

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session,error : ",error);
  }
}