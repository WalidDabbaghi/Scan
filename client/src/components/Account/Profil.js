import React from 'react'
import { useSelector } from 'react-redux'

const Profil = () => {
  const userstate = useSelector((state) => state.user.data);
  return (
    <div>
      <h1>hello si{userstate ? userstate.name : <h1>loadiing...</h1> } </h1>
    </div>
  )
}

export default Profil