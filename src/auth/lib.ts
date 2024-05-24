import { SignJWT, jwtVerify } from "jose";
import { env } from "process";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { NewUserFormData } from "@utils/types";


const key = new TextEncoder().encode(env.JWT_SECRET_KEY);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2 hours from now")
      .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }

export async function createSession(user: NewUserFormData) {
    //Creating and signing the session JWT
    const expires = new Date(Date.now() + 7200000);
    const session = await encrypt({user, expires});

    //Saving the session JWT in  a cookie
    cookies().set("session", session, {expires, httpOnly: true});
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if(!session) return null;
    return await decrypt(session); 
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;
  
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 7200000);
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    });
    return res;
  }