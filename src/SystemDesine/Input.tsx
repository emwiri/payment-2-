import React, { type ComponentProps } from "react"

type Input = ComponentProps<"input">

function Input(props: Input) {
  return (
    <input
      {...props}
      className={'border p-2 rounded-xl w-full focus:ring-2 focus:ring-blue-400 focus:border-none focus:transition-all focus:outline-none '}
    />
  )
}

export default Input
