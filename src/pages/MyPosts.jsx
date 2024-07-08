import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function MyPosts() {
    const [myposts, setMyPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    const id = userData.$id

    useEffect(() => {
        appwriteService.getMyPosts(id).then((posts) => {
            if (posts) {
                setMyPosts(posts.documents)
            }
        })
    }, [])
  
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {myposts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default MyPosts 