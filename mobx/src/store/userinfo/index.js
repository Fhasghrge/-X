import { observable, action } from "mobx"

class Userinfo {
  @observable name = "";
  @observable age = 0;

  @action.bound
  async changeName(str) {
    console.log(str)
    this.name = String(str)
  }

  @action.bound
  async changeAge(num) {
    this.age = Number(num)
  }
}

export default new Userinfo()