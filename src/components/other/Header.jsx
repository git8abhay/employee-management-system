import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  
  return (
    <div className="flex justify-between items-center bg-white/10 border border-cyan-400/30 rounded-xl p-4 mb-6 shadow-md">
  <h1 className="text-white text-xl sm:text-2xl">
    Hello <br />
    <span className="text-3xl font-semibold !text-yellow-500">Admin👋</span>
  </h1>
  <button
    onClick={logOutUser}
    className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition-all duration-300"
  >
    Log Out
  </button>
</div>

  )
}

export default Header