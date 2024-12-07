import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='flex justify-center items-center gap-5 min-h-screen flex-wrap flex-col'>
      {/* <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/"}>Go To Home Page</Link> */}
      <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/teacher"}>Go To Teacher</Link>
      <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/admin"}>Go To Admin</Link>
      <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/student"}>Go To Students</Link>
      <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/login"}>Go To Login</Link>
      <Link className='bg-red-200 px-3 py-3 rounded-md' to={"/signup"}>Go To SignUp</Link>
    </div>
  )
}

export default Home
