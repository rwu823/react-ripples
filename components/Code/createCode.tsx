import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import React from 'react'
import Dark from './dark.theme'
import White from './white.theme'

export interface CodeProps {
  language?: string
  theme?: 'day' | 'night'
  children: string
}
export const createCode = (defaultProps: Partial<CodeProps> = {}) => {
  const Code: React.FunctionComponent<CodeProps> = ({
    language,
    children,
    theme,
  }) => {
    const code = Prism.highlight(
      children.trim(),
      Prism.languages[language!],
      language!,
    )

    const Theme = theme === 'day' ? White : Dark

    return (
      <Theme>
        <pre>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: code }} // eslint-disable-line react/no-danger
          />
        </pre>
      </Theme>
    )
  }

  Code.defaultProps = {
    language: 'jsx',
    theme: 'night',
    ...defaultProps,
  }

  return Code
}
