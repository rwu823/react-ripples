import React from 'react'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

const withAttrs = <P, Element>(Component: React.ComponentType<P>) => (
  props: P & React.HTMLAttributes<Element>,
) => <Component {...props} />

// module.exports = withAttrs

export default withAttrs
