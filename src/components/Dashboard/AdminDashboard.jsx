import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import Footer from '../other/Footer'

const AdminDashboard = (props) => {
    return (
        <div className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black p-6">
  <div>
    <Header changeUser={props.changeUser} />
    <CreateTask />
    <AllTask />
    <Footer/>
  </div>
</div>
    )
}

export default AdminDashboard