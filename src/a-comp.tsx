import React from 'react'
import {SharedType} from './a-vanilla'

const st: SharedType = 1

type Props = {
  a: string
  b: number
}
type State = {
  c: Array<{
    c1: string
    c2: number
  }>
  d: null[]
}

class AComp extends React.PureComponent<Props, State> {  
  constructor(props: Props) {
    super(props)
    this.state = {
      c: [],
      d: []
    }
  }
  
  regularMethod(c: string) {
    console.log(c)
  }
  
  render() {
    return (
      <div>
        {this.props.a}{this.props.b}
      </div>
    )
  }
}