
import Header  from "../lib/components/header/header";
import Card from '../lib/components/card/Card';



export default async  function Home() {
  
  
  const data = await fetch('https://api.vercel.app/blog',{next:{revalidate:60}})
  const posts = await data.json()

  
  
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <Header />
      <section className="flex flex-col justify-start items-start min-h-screen w-full mt-20 p-10">
        {/* add hero section with ads  */}
        {/* add categories section  */}
        
        <div className="flex justify-evenly items-start flex-wrap gap-y-4 gap-x-10">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}



