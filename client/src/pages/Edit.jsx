import React from 'react'
import TaskEdit from '../components/Profile/Edit'


const Edit = () => {
  const BASE_URL = "https://hoisting-production.up.railway.app"
  return (
    <div>
      <TaskEdit BASE_URL={BASE_URL}/>
    </div>
  )
}

export default Edit