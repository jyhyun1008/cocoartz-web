import twemoji from '@twemoji/api'

// cocoartz-nuxt(본 서비스)와 동일하게, 기기/OS 기본 이모지 폰트 대신 Twemoji(SVG) 이미지로 통일.
// 렌더링 지점마다 따로 처리하는 대신 DOM을 훑어서 한 번에 치환한다.
//
// Twemoji 그래픽은 CC-BY 4.0 라이선스 — https://github.com/jdecked/twemoji (저작자 표시 요구사항 충족용 표기)
const TWEMOJI_VERSION = '17.0.3'

const twemojiOptions = {
  base: `https://cdn.jsdelivr.net/gh/jdecked/twemoji@${TWEMOJI_VERSION}/assets/`,
  folder: 'svg',
  ext: '.svg',
  className: 'twemoji',
}

export default defineNuxtPlugin(() => {
  const pending = new Set<Element>()
  let scheduled = false

  function parse(el: Element) {
    twemoji.parse(el as unknown as HTMLElement, twemojiOptions)
  }

  function flush() {
    scheduled = false
    for (const el of pending) parse(el)
    pending.clear()
  }

  function schedule(el: Element | null) {
    if (!el) return
    pending.add(el)
    if (!scheduled) {
      scheduled = true
      requestAnimationFrame(flush)
    }
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) schedule(node as Element)
        else if (node.nodeType === Node.TEXT_NODE) schedule(node.parentElement)
      })
      if (mutation.type === 'characterData') schedule(mutation.target.parentElement)
    }
  })

  requestAnimationFrame(() => {
    twemoji.parse(document.body, twemojiOptions)
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })
  })
})
