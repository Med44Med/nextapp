
import Header  from "../lib/components/header/header";
import  Hero  from "../lib/heroAdd/Hero";
import Anime from './_components/anime';
import Card from '../lib/components/card/Card';



export default async  function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  
  if (typeof window !== 'undefined') {
    console.log("Running on the client side");
  } else {
    console.log("Running on the server side");
  }
  
  const params = await searchParams
  console.log(params);
  
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log(posts);
  
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <Header />
      
      <section className="flex flex-col justify-start items-start min-h-screen w-full mt-20 p-3">
        <div className="flex justify-evenly items-start flex-wrap gap-y-4" >
          {posts.map((post) => (
            <Card key={post.id} title={post.title} date={post.date}/>
          ))}
          
        </div>
      </section>
    </main>
  );
}



