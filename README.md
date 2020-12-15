# 几个状态管理方案的对比和使用
> 对比角度： 组件之间通信、 对State的处理方法

## mobx

## redux

## recoil

## useContext + useReducer

## VueX

## EventBus以及在小程序应用

# 父子组件之间通信对比
 > 不考虑复杂的组件状态管理，复杂的使用上面几个状态库解决）

## Vue
- props
- this.$emit
- ref

## React
- props
- props.function
- ref => useImperativeHandle => forwardRef