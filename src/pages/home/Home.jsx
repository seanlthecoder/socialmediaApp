import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileside/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'


const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className="RightSide">RightSide</div>


        </div>
    )
}

export default Home
