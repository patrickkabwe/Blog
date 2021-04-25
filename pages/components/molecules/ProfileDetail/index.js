import React from 'react'

function ProfileDetail() {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="overflow-hidden md:w-32 mb-6 rounded-full ">
          <img src="./assets/patrick.jpg" alt="profile picture" />
        </div>
        <h3 className="font-black">Patrick Kabwe</h3>
        <span className="text-gray-300 text-xs">Full Stack Developer</span>
        <p className="text-xs w-3/5 mt-5 font-light">
          I am a fullstack developer with exprience in python/Django, Node.js
          React.js Vue.js Next.js and Postgres/MySQL
        </p>
      </div>
    );
}

export default ProfileDetail
