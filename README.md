# CocoArtz Web

[코코아츠(CocoArtz)](https://github.com/jyhyun1008/cocoartz-nuxt)를 소개하는 정적 랜딩 페이지예요. `cocoartz-nuxt`(실제 서비스)와는 별도의 리포로, Nuxt로 만들고 `nuxt generate`로 정적 빌드해서 GitHub Pages에 배포해요.

## 개발

```bash
npm install
npm run dev
```

## 빌드 (정적 생성)

```bash
npm run generate
# 결과물: .output/public
```

## 배포

`main` 브랜치에 푸시하면 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)이 GitHub Pages로 자동 배포해요. 저장소 설정에서 **Settings → Pages → Source**를 "GitHub Actions"로 한 번 지정해두면 됨.

현재 프로젝트 페이지(`username.github.io/cocoartz-web`) 배포를 기준으로 `NUXT_APP_BASE_URL=/cocoartz-web/`을 워크플로에서 지정하고 있어요. 커스텀 도메인이나 유저 페이지로 바꾸는 경우:

1. `.github/workflows/deploy.yml`의 `NUXT_APP_BASE_URL`을 `/`로 변경
2. 커스텀 도메인이면 `public/CNAME` 파일 추가

## TODO

- [`app/pages/index.vue`](./app/pages/index.vue) 상단의 `appUrl`을 실제 서비스 도메인으로 교체
- 콘텐츠(카피, 기능 설명)는 `cocoartz-nuxt`의 [`docs/`](https://github.com/jyhyun1008/cocoartz-nuxt/tree/main/docs) 기준으로 작성했으니, 기능이 추가/변경되면 같이 업데이트
