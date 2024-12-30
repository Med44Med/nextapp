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

        const title = post.title.includes(ValueParams)
        const content = post.content.includes(ValueParams)
        const author = post.author.includes(ValueParams)

        return title || content || author 
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
                <>
                <div>
                    {posts.map((post, index) => (
                        <Card key={index} title={post.title} description={post.description} image={post.image} />
                    ))}
                </div>
                <div className="flex p-10 justify-start items-center gap-5">
                    {
                       handleCategory(posts)       
                    }
                </div>
                </>
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