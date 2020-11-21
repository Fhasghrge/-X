import { observable, action } from "mobx"

class Userinfo {
  @observable name = "",
  @observable age = 0,

  @action.bound
  async changeName(str) {
    this.name = str
  }

  @action.bound
  async changeAge(num) {
    this.age = Number(num)
  }
}

export default new Userinfo()