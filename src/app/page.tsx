
import Header  from "../lib/components/header/header";
import  Hero  from "../lib/heroAdd/Hero";
import Anime from './_components/anime';
import Card from '../lib/components/card/Card';
import Link from 'next/link';



export default async  function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  
  if (typeof window !== 'undefined') {
    console.log("Running on the client side");
  } else {
    console.log("Running on the server side");
  }
  
  const params = await searchParams
  const data = await fetch('https://api.vercel.app/blog',{next:{revalidate:60}})
  const posts = await data.json()
  let filtredPosts

  if (params?.search) {

    filtredPosts = posts.filter(post => {
      const titleInclud = post.title.toLowerCase().includes(params.search.toLowerCase())
      const contentInclud = post.content.toLowerCase().includes(params.search.toLowerCase())      
      const authorInclud = post.author.toLowerCase().includes(params.search.toLowerCase())      
      return titleInclud || contentInclud || authorInclud
    })
    
  } else {
    
    filtredPosts = posts
    
    
  }
  const render = ()=>{
    if (params?.search) {
    
      filtredPosts = posts.filter(post => {
        const titleInclud = post.title.toLowerCase().includes(params.search.toLowerCase())
        const contentInclud = post.content.toLowerCase().includes(params.search.toLowerCase())      
        const authorInclud = post.author.toLowerCase().includes(params.search.toLowerCase())      
        return titleInclud || contentInclud || authorInclud
      })

      return <>
        <Link href='/'>back</Link>
        <div>
          here to set the categorys with badges
        </div>
        <div className="flex justify-evenly items-start flex-wrap gap-y-4 gap-x-10">
          {
            filtredPosts.map((post) => {
              return (            
                <Card key={post.id} title={post.title} content={post.content} author= {post.author} category={post.category}/>     
              )})
          }
        </div>
      </>
    } else {
      
      return <div className="flex justify-evenly items-start flex-wrap gap-y-4 gap-x-10">
        {
          posts.map((post) => {
            return (
              <Card key={post.id} title={post.title} content={post.content} author={post.author} category={post.category}/>
              )
              })
        }
      </div>
    }
  }
  
  return (
    <main className="flex flex-col justify-start items-center  bg-background overflow-y-hidden">
      <Header />
      {/* {params?.search && <Link href='/' className="mt-20 p-10 underline text-xl self-start">Back</Link>} */}
      <section className="flex flex-col justify-start items-start min-h-screen w-full mt-20 p-10">
      {
        render()
      }
        <div className="flex justify-evenly items-start flex-wrap gap-y-4 gap-x-10" >
          {filtredPosts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} author= {post.author} category={post.category}/>
          ))}
          
        </div>
      </section>
    </main>
  );
}



