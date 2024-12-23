
import Header  from "../lib/components/header/header";
import  Hero  from "../lib/heroAdd/Hero";
import Anime from './_components/anime';



export default async  function Home() {
  
  if (typeof window !== 'undefined') {
    console.log("Running on the client side");
  } else {
    console.log("Running on the server side");
  }
  
  
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <Header />
      
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
      <Anime />
    </main>
  );
}



