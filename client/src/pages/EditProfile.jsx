import React from 'react'
import ProfileForm from '../components/Profile/ProfileForm'

const EditProfile = () => {
  const BASE_URL = "https://hoisting-production.up.railway.app/"
  return (
    <div>
      <ProfileForm BASE_URL={BASE_URL}/>
    </div>
  )
}

export default EditProfile