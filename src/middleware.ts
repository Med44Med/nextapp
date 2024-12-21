import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/Session";

const protectedRoutes = ["/dashboard","/profil","/settings","/dorossi","/blogs","messages"];
const publicRoutes = ["/login","/register","/forgot"];

export default async function middleware(req: NextRequest) {
  
  const path = req.nextUrl.pathname;
  
  const cookie = await cookies()
  const cookieSession = cookie.get("session")?.value;


  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  
  if (!cookieSession && isProtectedRoute) {
          return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (cookieSession && isPublicRoute) {
        const hello = await decrypt(cookieSession)
        console.log(hello);
        
          return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  

  return NextResponse.next();
}