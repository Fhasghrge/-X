import {observable, action} from 'mobx'

class Theme {
  @observable color = "";

  @action.bound
  async changeColor(str) {
    this.color = str
  }
}

export default new Theme()