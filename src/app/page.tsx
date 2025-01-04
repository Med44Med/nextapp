
import Header  from "../lib/components/header/header";
import Card from '../lib/components/card/Card';
import Search from '../lib/components/search/Search';
import Image from 'next/image';
import backGround from './background.jpg'


export default async  function Home() {
  
  


  
  
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <Header />
      <section className="relative flex flex-col justify-end items-center min-h-screen w-full pt-20 p-10">
        <Image src={backGround} alt='background' fill className="absolute top-0 left-0 w-full h-full z-0 object-cover" />
        <Search />
      </section>
    </main>
  );
}



