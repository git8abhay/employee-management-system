import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import Footer from '../other/Footer'

const EmployeeDashboard = (props) => {

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black p-6">
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
        <Footer/>
    </div>
  )
}

export default EmployeeDashboard