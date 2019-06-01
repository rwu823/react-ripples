/* eslint-disable camelcase, prefer-rest-params, no-eval */

const globalThis = (1, eval)('this')

declare global {
  interface Window {
    dataLayer: any[]
  }

  interface Process {
    browser: boolean
  }
}

type PageView = Partial<{
  page_title: string
  page_path: string
  send_page_view: boolean
}>

export default class GA {
  private id: string

  constructor(id: string) {
    this.id = id

    globalThis.dataLayer = globalThis.dataLayer || []
    globalThis.gtag = (...args: any[]) => {
      globalThis.dataLayer.push(args)
    }
    globalThis.gtag('js', new Date())

    globalThis.gtag('config', id)
  }

  pageView(options: PageView = {}) {
    console.log('[ga]', {
      page_title: document.title,
      page_path: window.location.pathname,
    })

    globalThis.gtag('config', this.id, options)
  }
}
