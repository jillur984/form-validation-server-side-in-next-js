import React from 'react'
import NewUserForm from './components/NewUserForm'
import UserList from './components/UserList'

const Home = () => {
  return (
    <>
    <h1>USER REGISTRATION</h1>
    <NewUserForm/>
    <UserList/>
    </>
  )
}

export default Home