import React, { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

type Props = {
  language?: string
  children: string
}

const Code: React.FunctionComponent<Props> = ({ language, children }) => {
  const code = Prism.highlight(
    children.trim(),
    Prism.languages[language!],
    language!,
  )

  return (
    <pre>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: code }} // eslint-disable-line react/no-danger
      />
    </pre>
  )
}

Code.defaultProps = {
  language: 'jsx',
}

export default Code
