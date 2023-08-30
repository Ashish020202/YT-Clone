import { VideoCard } from "./VideoCard"

interface Video{
  key:number,
  image:"logo.jpg",
  title:string,
  thumbnail:string,
  description:string
  author:string,
  views:string,
  timestamp:string
}


 const VIDEOS : Video[] = [ 
    {  
       image:"logo.jpg",
        key:1,
        title:"How to learn coding",
        thumbnail:"photo.jpg",
        description:"ecjfdlkajlglkagjiu asdfjkfie ",
        author:"Ashish kumar",
        views:"40k views",
        timestamp:"4 days ago"
    },
    {   
       image:"logo.jpg",
        key:9,
        title:"How to learn coding",
        thumbnail:"photo.jpg",
        description:"djklsjlf",
        author:"Ashish kumar",
        views:"40k views",
        timestamp:"4 days ago"
    },
    { 
      image:"logo.jpg",
      key:8,
      title:"How to learn coding",
      thumbnail:"photo.jpg",
      description:"djklsjlf",
      author:"Ashish kumar",
      views:"40k views",
      timestamp:"4 days ago"
  },
  { 
    image:"logo.jpg",
    key:7,
    title:"How to learn coding",
    thumbnail:"photo.jpg",
    description:"djklsjlf",
    author:"Ashish kumar",
    views:"40k views",
    timestamp:"4 days ago"
},
{
   image:"logo.jpg",
  key:2,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{ 
  image:"logo.jpg",
  key:3,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{ 
  image:"logo.jpg",
  key:4,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{ 
  image:"logo.jpg",
  key:5,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
 { 
  image:"logo.jpg",
  key:6,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{ 
  image:"logo.jpg",
  key:12,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{
  image:"logo.jpg",
  key:11,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashish kumar",
  views:"40k views",
  timestamp:"4 days ago"
},
{ 
  image:"logo.jpg",
  key:10,
  title:"How to learn coding",
  thumbnail:"photo.jpg",
  description:"djklsjlf",
  author:"Ashishkumar",
  views:"40k views",
  timestamp:"4 days ago"
},

]


export const VideoGrid = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
      {VIDEOS.map(videos=> <div><VideoCard 
                                  key={videos.key}
                                  image={videos.image}
                                thumbnail={videos.thumbnail}
                                 title={videos.title} 
                                 description={videos.description}
                                 author={videos.author}
                                 views={videos.views}
                                 timestamp={videos.timestamp}  /></div>)}
                                   
    </div>
  )
}

export default VideoGrid
