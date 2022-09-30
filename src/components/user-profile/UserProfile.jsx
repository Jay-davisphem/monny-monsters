import "../card/card.css";
import './user-profile.css'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
export const Card = ({ monsters }) => {
  const id = useParams().monsterId
  const monster = monsters.find(monster => monster.id == id)
  console.log(monster)
  const [posts, setPosts] = useState({posts: []})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json()
        .then(data => setPosts({posts: data.slice(0, 5)}))
  )
  }, [])
  return (
    <div className="card-container user">
      <img
        alt={`monster${monster?.id}`}
        src={`https://robohash.org/${monster?.id}?set=set2&size=120x120`}
      />
      <h2 className='name'> {monster?.name}</h2>
      <p className='email'>{monster?.email}</p>
      <h2 className='posts'>Posts:</h2>
      {
        posts.posts.map(post => (
          <div className='post' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  );
};
