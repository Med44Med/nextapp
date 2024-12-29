import React from 'react'
import EmptySearch from './_components/emptySearch';
import Card from '../../lib/components/card/Card';
import Header from '../../lib/components/header/header';
import CategoryWithaBadge from '../../lib/components/Categories/CategoryWithaBadge';

async function Page({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {


    const params = await searchParams

    console.log(params);
    
    // const data = await fetch(`https://api.vercel.app/blog/${params.value}`)
    const posts = []

    const examplePosts = [
        { id: 1, category: 'Tech' },
        { id: 2, category: 'Lifestyle' },
        { id: 3, category: 'Tech' },
        { id: 4, category: 'Health' },
        { id: 5, category: 'Tech' },
        { id: 6, category: 'Health' },
        { id: 7, category: 'Health' },
        { id: 8, category: 'Tech' },
        { id: 9, category: 'Lifestyle' },
        { id: 10, category: 'Health' },
        { id: 11, category: 'Lifestyle' },
      ]

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
                       handleCategory(examplePosts)       
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