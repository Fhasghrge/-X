import React, {useEffect} from 'react'
import {inject, observer} from 'mobx-react'

function Header({userinfo}) {
  useEffect(() => {
    console.log(userinfo.name)
  })
  return (
    <div>
      <h2>Header</h2>
      <div>{userinfo.name}</div>
      <div>{userinfo.age}</div>
    </div>
  )
}


export default inject('userinfo')(observer(Header))