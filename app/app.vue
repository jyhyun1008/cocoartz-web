<template>
  <NuxtPage />
</template>

<style>
/* 코코아츠 앱(cocoartz-nuxt)과 동일한 브랜드 폰트/컬러를 사용해서 톤을 맞춤 */
@font-face {
  font-family: 'cocoartz';
  src: url('https://blog.howeverina.studio/font/Griun_Cocoartz-Rg.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'cocoartz';
  src: url('https://blog.howeverina.studio/font/Griun_DarkCocoartz-Rg.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

:root {
  --accent: #D21F3C;
  --accent-hover: #b81a33;
  --page-bg: #14141a;
  --surface-1: #1a1a22;
  --surface-2: #1e1e26;
  --text: rgba(255, 255, 255, 0.92);
  --text-dim: rgba(255, 255, 255, 0.6);
  --border: rgba(255, 255, 255, 0.08);
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'cocoartz', sans-serif;
  background: var(--page-bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
}

a {
  color: inherit;
}

/* twemoji.client.ts가 유니코드 이모지 자리에 삽입하는 이미지 — 글자 크기에 맞춰 인라인으로 보이게 함 */
img.twemoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
</style>
