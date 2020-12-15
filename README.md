# 几个状态管理方案的对比和使用
> 对比角度： 组件之间通信、 对State的处理方法

## mobx


## redux
> 原生不支持异步操作，需要引入readux-thunk


## recoil
> 未来可能会支持“并发“的


## useContext + useReducer

## VueX


## EventBus以及在小程序应用
> 和recol对组件之间通信原理相同，原子性不影响父组件之下的其他组件
> 好处就是对于渲染量极大的应用，例如 **小程序** 减少渲染量 



# 父子组件之间通信对比
 > 不考虑复杂的组件状态管理，复杂的使用上面几个状态库解决）

## Vue
- props
- this.$emit
- ref
  


## React
- props
  - > useMemo 带来的应用是防止组件在重复渲染过程中，计算量大的属性被反复计算，例如计算时间的，每天只需计算一次

- props.function
  - > 会用到useCallback优化函数反复生成带来的性能问题，例如传递给子组件的函数，在render的时候方式反复生成

- useRef => useImperativeHandle => forwardRef
  - > ref在收集form表单时候的用处


# Vue  & React 的其他不同
> vue通过defineProperty（proxy）对组件进行更加灵活的收集props，对于父组件的重新渲染，vue也能做到保留渲染
> React中父组件重新渲染会带起子组件的渲染