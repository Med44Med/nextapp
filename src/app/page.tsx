
import Link from "next/link";
import  {Anime,ThemeHandler}  from "./JSBundle";

export default async  function Home() {
  
  if (typeof window !== 'undefined') {
    console.log("Running on the client side");
  } else {
    console.log("Running on the server side");
  }
  

  
  return (
    <main className="flex flex-col justify-start items-center min-h-screen bg-background">
      <header className="fixed w-screen h-20 bg-transparent backdrop-blur-sm z-50 flex items-center justify-start gap-24 transition-all delay-100">
        <div className="logo h-full w-1/6 bg-white"></div>
        <nav className="grow flex justify-start items-center gap-3">
          <Link href='/register' className="font-bold text-lg font-main">تسجيل الدخول</Link>
          <Link href='/register' className="font-bold text-lg font-main">إنشاء حساب</Link>
          <ThemeHandler />
        </nav>
      </header>
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="title">Window</h1>
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen">

      </section>
      <Anime />
    </main>
  );
}



