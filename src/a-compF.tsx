import React from 'react'
import {SharedType} from './a-vanilla'

const st: SharedType = 1

type Props = {
  a: string
  b: number
}

const ACompF: React.FC<Props> = (props) => {
  return (
    <div>
      {props.a}{props.b}
    </div>
  )
}