import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import { LogOut } from 'lucide-react';

const Header = (props) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  
  return (
    <div className="flex justify-between items-center bg-white/10 border border-cyan-400/30 rounded-xl p-4 mb-6 shadow-md sm:flex-row sm:gap-0 sm:w-auto">
  <h1 className="text-white text-xl sm:text-2xl">
    Hello <br />
    <span className="text-3xl font-semibold !text-yellow-500">User ABC👋</span>
  </h1>
  <button
  onClick={logOutUser}
  className="bg-red-600 hover:bg-red-500 text-base font-medium text-white px-5 py-2 rounded-sm flex items-center gap-2 transition-all duration-300"
>
  <LogOut size={18} className="text-white" />
  Log Out
</button>

</div>

  )
}

export default Header