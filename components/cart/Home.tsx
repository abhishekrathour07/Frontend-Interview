import { BaggageClaimIcon, Heart, HomeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
    const router = useRouter()
    return (
        <div>
            <div className='h-12 bg-blue-800 text-white'>
                <p>Home <HomeIcon /></p>
                <p>wishlist <Heart /></p>
                <p>cart <BaggageClaimIcon /></p>
                
            </div>
        </div>
    )
}

export default Home
