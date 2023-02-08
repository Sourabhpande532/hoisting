import React from 'react'
import Layout from "../components/Layout/Layout"
import Navbar from '../components/Navbar/Navbar'
import TaskList from '../components/TaskList/TaskList'

const home = () => {
  const BASE_URL = "https://hoisting-production.up.railway.app"
  return (
    <Layout>
     <Navbar BASE_URL={BASE_URL}/>
     <TaskList BASE_URL={BASE_URL}/>
    </Layout>
  )
}

export default home