<template>
  <div class="coming-soon">
    <main class="content">
      <div class="logo-wrap">
        <img src="../assets/images/logo-white.svg" alt="minae" class="logo" />
      </div>
      <p class="slogan">a whisper between nature and form</p>
      <h3 class="label">coming soon</h3>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.coming-soon {
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: #E8E2DB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/images/shadows-bg.webp');
  background-size: cover;
  background-position: center;
}

/* Content */
.content {
  position: relative;
  height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  text-align: center;
}

.logo-wrap {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

.logo {
  height: auto;
  width: 580px;
  max-width: calc(100vw - 80px);
  display: block;
}

.slogan {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: lowercase;
  color: #7A6E68;
  margin-top: 1.4rem;
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
}

.label {
  position: absolute;
  bottom: 80px;
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes botanicalFade {
  to {
    opacity: 1;
  }
}
</style>
