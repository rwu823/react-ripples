import Code, { CodeProps } from './Code'

export const createCode = (defaultProps: Partial<CodeProps> = {}) => {
  Object.assign(Code.defaultProps, defaultProps)

  return Code
}

export default Code
