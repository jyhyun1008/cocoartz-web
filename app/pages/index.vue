<script setup lang="ts">
// TODO: 실제 서비스 도메인이 정해지면 교체
const appUrl = 'https://coco.gongran.studio'
const githubUrl = 'https://github.com/jyhyun1008/cocoartz-nuxt'

const features = [
  {
    icon: '🏠',
    title: '마을과 캐릭터',
    desc: '아이소메트릭 맵 위를 내 캐릭터로 돌아다니며, 말풍선으로 주변 사람들과 대화해요.',
  },
  {
    icon: '📢',
    title: '게시판',
    desc: '글과 사진을 올리고 댓글·좋아요·리액션을 남기는, 우리 서버만의 게시판이에요.',
  },
  {
    icon: '💬',
    title: '채팅 & 음성',
    desc: '실시간 텍스트 채팅은 물론, 대화 내용을 음성(TTS)으로 읽어주는 채팅방도 있어요.',
  },
  {
    icon: '📖',
    title: '위키',
    desc: '다 같이 쓰고 고칠 수 있는 문서 채널로, 서버의 지식과 설정을 함께 정리해요.',
  },
  {
    icon: '🎨',
    title: '아바타 커스터마이징',
    desc: '상점에서 파츠와 아이템을 구매해 내 캐릭터와 방을 자유롭게 꾸며요.',
  },
  {
    icon: '🌐',
    title: '연합(페디버스)',
    desc: '마스토돈·미스키 같은 외부 페디버스 서버와 연결돼, 더 넓은 세계와 이어져요.',
  },
]

const points = [
  { title: '내 사람들과, 내 공간에서', desc: '초대받은 사람들끼리 모이는, 광고 없는 조용한 커뮤니티 공간이에요.' },
  { title: '텍스트보다 생생하게', desc: '채팅방 목록 대신, 캐릭터가 걸어 다니는 마을에서 자연스럽게 마주쳐요.' },
  { title: '닫혀있지 않아요', desc: '연합 기능으로 다른 서버의 사람들과도 소식을 주고받을 수 있어요.' },
]
</script>

<template>
  <div>
    <header class="nav">
      <div class="nav-inner">
        <a href="#top" class="brand">
          <img src="/cocoartz.png" alt="" class="brand-logo" />
          <span>코코아츠</span>
        </a>
        <nav class="nav-links">
          <a href="#features">기능</a>
          <a :href="githubUrl" target="_blank" rel="noopener">GitHub</a>
        </nav>
        <a :href="appUrl" class="btn btn-primary btn-small" target="_blank" rel="noopener">구경하기</a>
      </div>
    </header>

    <main>
      <section id="top" class="hero">
        <div class="hero-content">
          <img src="/cocoartz.png" alt="코코아츠 로고" class="hero-logo" />
          <h1>내 캐릭터가 돌아다니는<br />커뮤니티 공간, 코코아츠</h1>
          <p class="hero-sub">
            아이소메트릭 마을 위에서 캐릭터로 돌아다니며 대화하고, 글을 쓰고,<br class="br-desktop" />
            다른 페디버스 서버와도 연결되는 커뮤니티 플랫폼이에요.
          </p>
          <div class="hero-actions">
            <a :href="appUrl" class="btn btn-primary" target="_blank" rel="noopener">테스트서버 구경하기</a>
            <a href="#features" class="btn btn-ghost">기능 둘러보기</a>
          </div>
        </div>
      </section>

      <section class="showcase">
        <div class="showcase-frame">
          <div class="showcase-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <img src="/screenshot.png" alt="코코아츠 실제 화면 — 아이소메트릭 마을과 채팅창" class="showcase-img" />
        </div>
      </section>

      <section class="points">
        <div v-for="p in points" :key="p.title" class="point">
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </section>

      <section id="features" class="features">
        <h2>코코아츠에서 할 수 있는 것들</h2>
        <div class="feature-grid">
          <div v-for="f in features" :key="f.title" class="feature-card">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </section>

      <section class="typeface">
        <p class="typeface-label">코코아츠 전용 서체</p>
        <p class="typeface-sample">그리운 코코아체</p>
        <p class="typeface-desc">
          코코아츠 프로젝트만을 위해 새로 제작한 전용 폰트예요.
          <br class="br-desktop" />
          획을 단순화하고, 부드럽게 다듬은 담백한 고딕체랍니다.
        </p>
      </section>

      <section class="cta">
        <h2>지금 코코아츠에서 마을을 만들어보세요</h2>
        <p>도커 허브에 빌드된 이미지를 이용해서, 단 몇 분이면 배포할 수 있어요.</p>
        <a :href="appUrl" class="btn btn-primary" target="_blank" rel="noopener">코코아츠 구경하기</a>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/cocoartz.png" alt="" class="footer-logo" />
          <span>CocoArtz</span>
        </div>
        <a :href="githubUrl" target="_blank" rel="noopener">GitHub</a>
        <span class="footer-copy">© {{ new Date().getFullYear() }} CocoArtz</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(20, 20, 26, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text);
}
.brand-logo {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}
.nav-links {
  display: flex;
  gap: 20px;
  margin-right: auto;
}
.nav-links a {
  text-decoration: none;
  color: var(--text-dim);
  font-size: 0.92rem;
  transition: color 0.15s;
}
.nav-links a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 12px 28px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
}
.btn:hover {
  transform: translateY(-1px);
}
.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover {
  background: var(--accent-hover);
}
.btn-ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}
.btn-ghost:hover {
  border-color: rgba(255, 255, 255, 0.25);
}
.btn-small {
  padding: 8px 18px;
  font-size: 0.9rem;
}

.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(20, 20, 26, 0.15) 0%, rgba(20, 20, 26, 0.35) 55%, var(--page-bg) 100%), url('/bg.png');
  /* 이미지 레이어는 가로폭 기준으로만 맞춰서, 좌상단에 박힌 코코아츠 로고가
     세로로 긴 화면에서 옆으로 잘려나가지 않게 함 (cover 대신 폭 100%) */
  background-size: 100% 100%, 100% auto;
  background-position: top, top;
  background-repeat: no-repeat, no-repeat;
}
.hero-content {
  position: relative;
  max-width: 720px;
  padding: 200px 24px 160px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-logo {
  width: 88px;
  height: 88px;
  border-radius: 22px;
  margin-bottom: 28px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
}
.hero h1 {
  font-size: 2.4rem;
  line-height: 1.35;
  margin: 0 0 20px;
  color: #fff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.55);
}
.hero-sub {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
  margin: 0 0 36px;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}

.showcase {
  max-width: 1080px;
  margin: -64px auto 0;
  padding: 0 24px 96px;
  position: relative;
  z-index: 1;
}
.showcase-frame {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface-1);
  box-shadow: 0 32px 64px -24px rgba(0, 0, 0, 0.6);
}
.showcase-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-red {
  background: #ff5f57;
}
.dot-yellow {
  background: #febc2e;
}
.dot-green {
  background: #28c840;
}
.showcase-img {
  display: block;
  width: 100%;
  height: auto;
}

.points {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px 96px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.point h3 {
  font-size: 1.05rem;
  margin: 0 0 8px;
}
.point p {
  color: var(--text-dim);
  font-size: 0.92rem;
  margin: 0;
}

.features {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px 24px 96px;
}
.features h2 {
  text-align: center;
  font-size: 1.7rem;
  margin: 0 0 48px;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feature-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 24px;
}
.feature-icon {
  font-size: 1.8rem;
  margin-bottom: 14px;
}
.feature-card h3 {
  font-size: 1.05rem;
  margin: 0 0 8px;
}
.feature-card p {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin: 0;
}

.typeface {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px 120px;
  text-align: center;
}
.typeface-label {
  color: var(--text-dim);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 12px;
}
.typeface-sample {
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 0 20px;
  background: linear-gradient(135deg, var(--accent), #ff7a8a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.typeface-desc {
  color: var(--text-dim);
  font-size: 0.95rem;
  margin: 0;
}

.cta {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px 120px;
  text-align: center;
}
.cta h2 {
  font-size: 1.6rem;
  margin: 0 0 12px;
}
.cta p {
  color: var(--text-dim);
  margin: 0 0 28px;
}

.footer {
  border-top: 1px solid var(--border);
}
.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.88rem;
  color: var(--text-dim);
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--text);
}
.footer-logo {
  width: 20px;
  height: 20px;
  border-radius: 6px;
}
.footer-inner a {
  text-decoration: none;
  color: var(--text-dim);
}
.footer-inner a:hover {
  color: var(--text);
}
.footer-copy {
  margin-left: auto;
}

@media (max-width: 768px) {
  .br-desktop {
    display: none;
  }
  .hero {
    min-height: 440px;
  }
  .hero-content {
    padding: 120px 20px 96px;
  }
  .hero h1 {
    font-size: 1.9rem;
  }
  .showcase {
    margin-top: -32px;
    padding: 0 16px 64px;
  }
  .typeface-sample {
    font-size: 2.2rem;
  }
  .points,
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .nav-links {
    display: none;
  }
}
</style>
