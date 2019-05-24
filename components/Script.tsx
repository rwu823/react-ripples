/* eslint-disable react/no-danger, react/prop-types */

import React from 'react'

type Props = {
  children: string
}

const Script: React.FunctionComponent<Props> = ({ children }) => {
  return <script dangerouslySetInnerHTML={{ __html: children }} />
}

export default Script
