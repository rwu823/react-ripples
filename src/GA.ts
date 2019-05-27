const globalThis = (1, eval)('this') // eslint-disable-line no-eval

declare global {
  interface Window {
    dataLayer: any[]
  }

  interface Process {
    browser: boolean
  }
}

/* eslint-disable camelcase */
type PageView = Partial<{
  page_title: string
  page_path: string
  send_page_view: boolean
}>
/* eslint-enable */

globalThis.dataLayer = globalThis.dataLayer || [['js', new Date()]]

export default class GA {
  private id: string

  constructor(id: string) {
    this.id = id
  }

  pageView(options: PageView = {}) {
    console.log('[ga]', {
      page_title: document.title,
      page_path: window.location.pathname,
    })
    globalThis.dataLayer.push(['config', this.id, options])
  }
}
