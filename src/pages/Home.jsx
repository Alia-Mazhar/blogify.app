import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, postCard as PostCard, hero as Hero,  NewsLetter} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl text-white font-bold hover:text-[#d5cce9]">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className="">
                    <Hero />
                </div>
                <h1 className='text-4xl font-bold text-white text-center'>Read The Blogs</h1>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/3'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div className="">
                    <NewsLetter />
                </div>
            </Container>
        </div>
    )
}

export default Home