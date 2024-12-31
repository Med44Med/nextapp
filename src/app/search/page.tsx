import React from 'react'
import EmptySearch from './_components/emptySearch';
import Card from '../../lib/components/card/Card';
import Header from '../../lib/components/header/header';
import CategoryWithaBadge from '../../lib/components/Categories/CategoryWithaBadge';

async function Page({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {


    const params = await searchParams
    const ValueParams = params?.value
    const categoryParams = params?.category
    
    
    const data = await fetch(`https://api.vercel.app/blog`)
    const allPosts = await data.json()
    
    let categoryPosts 
    
    if (categoryParams === "all") {
        categoryPosts = allPosts
    } else {
        categoryPosts = allPosts.filter(post=>( post.category === categoryParams ))   
    }
    
    const posts = categoryPosts.filter(post=>{

        const title = post.title.toLowerCase().includes(ValueParams.toLowerCase())
        const content = post.content.toLowerCase().includes(ValueParams.toLowerCase())
        const author = post.author.toLowerCase().includes(ValueParams.toLowerCase())
        
        return title | content | author 
    })
    
    

   
    





    function handleCategory(posts){

        const categoryCount = {};

        posts.forEach(post => {
          if (post.category) {
            categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
          }
        });

        const result = Object.keys(categoryCount).map(category=>{
            return {
                category,
                count: categoryCount[category],
                }
        })
        return result.map(category=>{
            return <CategoryWithaBadge key={category.category} category={category.category} count={category.count} search={params.value}/>
        })

    }

    const renderPosts = ()=>{

        if (posts.length === 0) { 
            return  <EmptySearch params={params}/>
        } else {
            return (
                <div className="pt-16">
                    <div className="flex p-10 justify-start items-center gap-10 flex-wrap bg-gray-100">
                        {
                        handleCategory(posts)       
                        }
                    </div>
                    <div className=" flex flex-wrap justify-evenly items-center gap-3 gap-y-5">
                        {posts.map((post, index) => (
                            <Card key={index} card={post} />
                        ))}
                    </div>
                </div>
            )
            
        }
    }
    

  return (
    <main>
        <Header />
        {renderPosts()}
    </main>
  )
}

export default Page