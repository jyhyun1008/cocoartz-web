<script setup lang="ts">
// TODO: 실제 서비스 도메인이 정해지면 교체
const appUrl = 'https://cocoartz.net'
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
        <a :href="appUrl" class="btn btn-primary btn-small" target="_blank" rel="noopener">시작하기</a>
      </div>
    </header>

    <main>
      <section id="top" class="hero">
        <img src="/cocoartz.png" alt="코코아츠 로고" class="hero-logo" />
        <h1>내 캐릭터가 돌아다니는<br />커뮤니티 공간, 코코아츠</h1>
        <p class="hero-sub">
          아이소메트릭 마을 위에서 캐릭터로 돌아다니며 대화하고, 글을 쓰고,<br class="br-desktop" />
          다른 페디버스 서버와도 연결되는 커뮤니티 플랫폼이에요.
        </p>
        <div class="hero-actions">
          <a :href="appUrl" class="btn btn-primary" target="_blank" rel="noopener">지금 시작하기</a>
          <a href="#features" class="btn btn-ghost">기능 둘러보기</a>
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

      <section class="cta">
        <h2>지금 코코아츠에서 마을을 만들어보세요</h2>
        <p>가입은 무료고, 몇 분이면 시작할 수 있어요.</p>
        <a :href="appUrl" class="btn btn-primary" target="_blank" rel="noopener">코코아츠 시작하기</a>
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
  max-width: 720px;
  margin: 0 auto;
  padding: 96px 24px 72px;
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
  box-shadow: 0 16px 40px rgba(210, 31, 60, 0.25);
}
.hero h1 {
  font-size: 2.4rem;
  line-height: 1.35;
  margin: 0 0 20px;
}
.hero-sub {
  color: var(--text-dim);
  font-size: 1.05rem;
  margin: 0 0 36px;
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
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
    padding: 64px 20px 56px;
  }
  .hero h1 {
    font-size: 1.9rem;
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
