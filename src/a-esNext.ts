import React from 'react'

// Stage 3: class property initializers
type State = {
  a: string[]
}
class PropInit extends React.PureComponent<any, State> {  
  state = {
    a: []
  }
  
  regularMethod(b: string) {
    console.log(b)
  }

  ESNextMethod = (c: string) => {
    console.log(c)
  }
  
  render() {
    return null
  }
}

/*
 * Stuff above is ESNext but works
 * Stuff below is ESNext & doesn't work. Uncomment to see
 */

// // Stage 3: top-level await
// await promiseDelay()

// function promiseDelay(): Promise<undefined> {
//   return new Promise((res, rej) => {
//     setTimeout(res, 1000)
//   })
// }

// // Stage 1: pipeline operator
// let result = "a"
//   |> e1
//   |> e2
//   |> e3;
// console.log(result)

// function e1(b: string): string {
//   return `b:${b}`
// }
// function e2(c: string): string {
//   return `c:${c}`
// }
// function e3(d: string): string {
//   return `d:${d}`
// }