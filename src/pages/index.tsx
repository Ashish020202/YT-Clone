import Image from 'next/image'
import { Inter } from 'next/font/google'
import {VideoCard} from '../components/VideoCard'
import {Appbar} from '@/components/Appbar'
import {Searchbar} from '@/components/Searchbar'
import {Leftbar} from '@/components/Leftbar'
import VideoGrid from '@/components/VideoGrid'
import { Topbar } from '@/components/Topbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
         <Appbar />
         <Topbar />
        <div className='flex'>
        <Leftbar />
        <VideoGrid />
        </div>
        
      </div>
  )
}
