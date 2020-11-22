import React, {useState} from 'react'
import {inject, observer} from 'mobx-react'


function Main({userinfo}) {
  const [name, setName] = useState('')

  return (
    <div>
      <p>Main</p>
      <div>{userinfo.name}</div>
      <input onChange={(e) => setName(e.target.value)} type="text"/>
      <button onClick={() => userinfo.changeName(name)}>changeName</button>
    </div>
  )
}


export default inject('userinfo')(observer(Main))