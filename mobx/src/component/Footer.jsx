import React, {PureComponent} from 'react'
import {inject, observer} from 'mobx-react'

@inject('userinfo')
@observer
class Footer extends PureComponent {

  render() {
    const {userinfo} = this.props
    return (
      <div>
        {userinfo.name}
      </div>
    )
  }
}


export default Footer