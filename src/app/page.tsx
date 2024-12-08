
import Link from "next/link";
import ThemeHandler  from "./_components/themeHandler";
import  Hero  from "../lib/heroAdd/Hero";
import Anime from './_components/anime';



export default async  function Home() {
  
  if (typeof window !== 'undefined') {
    console.log("Running on the client side");
  } else {
    console.log("Running on the server side");
  }
  
  // Anime();
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <header className="fixed w-screen h-20 bg-transparent z-10 flex items-center justify-start gap-24 transition-all delay-100">
        <div className="logo h-full w-1/6 bg-white"></div>
        <nav className="grow flex justify-start items-center gap-3">
          <Link href='/login' className="font-bold text-lg font-main">تسجيل الدخول</Link>
          <Link href='/register' className="font-bold text-lg font-main">إنشاء حساب</Link>
          <ThemeHandler />
        </nav>
      </header>
      <section className="flex flex-row-reverse justify-center items-center min-h-screen w-full">
        <div className="w-1/3 h-screen flex flex-col justify-center items-center gap-2">
          <h1 className="text-9xl font-bold">Dorossi</h1>
          <h4 className="w-5/6 text-center">Lorem ipsum dolor ratione animi eligendi sed quisquam suscipit fuga, placeat rerum deserunt eum corporis quas ipsa eius assumenda nostrum?</h4>
        </div>
        <div className="w-2/3 h-screen flex flex-col justify-center items-center relative">
          <Hero className="w-full h-full flex justify-center items-center gap-10 flex-wrap"/>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen w-full">
        solution section
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen w-full">
        pricing section
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen w-full">
        faq section
      </section>
      <footer>
        footer
      </footer>
    </main>
  );
}



