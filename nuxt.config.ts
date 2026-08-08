// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // GitHub Pages 프로젝트 페이지(username.github.io/cocoartz-web)로 배포되므로
  // 서브경로를 base로 잡아줘야 함. 로컬 dev/preview에서는 '/' 그대로 사용.
  // .github/workflows/deploy.yml에서 generate 시 NUXT_APP_BASE_URL=/cocoartz-web/ 로 override.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: '코코아츠 (CocoArtz)',
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        { name: 'author', content: 'CocoArtz' },
        { name: 'robots', content: 'all' },
        {
          name: 'description',
          content: '아이소메트릭 마을 위에서 캐릭터로 만나는 커뮤니티 플랫폼, 코코아츠를 소개합니다.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '코코아츠 (CocoArtz)' },
        {
          property: 'og:description',
          content: '아이소메트릭 마을 위에서 캐릭터로 만나는 커뮤니티 플랫폼, 코코아츠를 소개합니다.',
        },
        { property: 'og:image', content: '/cocoartz.png' },
        { name: 'theme-color', content: '#D21F3C' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.ico` },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
