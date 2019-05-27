import React from 'react'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

const withAttrs = <P, Element>(Component: React.ComponentType<P>) => (
  props: P & Omit<React.HTMLAttributes<Element>, 'style'>,
) => <Component {...props} />

export default withAttrs
