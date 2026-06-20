<template>
  <div id="app-root">
    <!-- 桌面端侧边栏导航 -->
    <nav class="sidebar-nav">
      <div class="sidebar-logo">
        <span class="logo-icon">🎓</span>
        <span class="logo-text">南工大新生攻略</span>
      </div>
      <router-link to="/" exact-active-class="active">
        <span class="nav-icon">🏠</span>
        <span>首页</span>
      </router-link>
      <router-link to="/prepare" active-class="active">
        <span class="nav-icon">🎒</span>
        <span>入学准备</span>
      </router-link>
      <router-link to="/report" active-class="active">
        <span class="nav-icon">📝</span>
        <span>报到流程</span>
      </router-link>
      <router-link to="/military" active-class="active">
        <span class="nav-icon">💪</span>
        <span>军训指南</span>
      </router-link>
      <router-link to="/campus" active-class="active">
        <span class="nav-icon">🏫</span>
        <span>校园生活</span>
      </router-link>
      <router-link to="/study" active-class="active">
        <span class="nav-icon">📚</span>
        <span>学习攻略</span>
      </router-link>
      <router-link to="/food" active-class="active">
        <span class="nav-icon">🍜</span>
        <span>吃喝玩乐</span>
      </router-link>
      <router-link to="/clubs" active-class="active">
        <span class="nav-icon">🎯</span>
        <span>社团组织</span>
      </router-link>
      <router-link to="/tips" active-class="active">
        <span class="nav-icon">💡</span>
        <span>学长忠告</span>
      </router-link>
      <router-link to="/rights" active-class="active">
        <span class="nav-icon">🛡️</span>
        <span>校园权益</span>
      </router-link>
    </nav>

    <!-- 主内容区 -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 移动端底部导航 -->
    <nav class="bottom-nav">
      <router-link to="/" exact-active-class="active">
        <span class="nav-icon">🏠</span>
        <span>首页</span>
      </router-link>
      <router-link to="/prepare" active-class="active">
        <span class="nav-icon">🎒</span>
        <span>准备</span>
      </router-link>
      <router-link to="/campus" active-class="active">
        <span class="nav-icon">🏫</span>
        <span>校园</span>
      </router-link>
      <router-link to="/study" active-class="active">
        <span class="nav-icon">📚</span>
        <span>学习</span>
      </router-link>
      <router-link to="/food" active-class="active">
        <span class="nav-icon">🍜</span>
        <span>吃喝</span>
      </router-link>
    </nav>

    <!-- QQ群悬浮按钮 -->
    <button class="qq-float" @click="showQQ = true" title="加入新生QQ群">
      💬
    </button>

    <!-- QQ群弹窗 -->
    <teleport to="body">
      <div v-if="showQQ" class="modal-overlay" @click.self="showQQ = false">
        <div class="modal-content">
          <div style="font-size:3rem;margin-bottom:8px;">🎉</div>
          <h3>加入南工大新生群</h3>
          <p style="color:#666;font-size:0.85rem;">学长学姐在线答疑，找室友、组队选课</p>
          <div class="qq-num">QQ群：123456789</div>
          <p style="font-size:0.75rem;color:#999;">👆 长按复制群号，打开QQ加群</p>
          <div style="display:flex;gap:8px;margin-top:12px;justify-content:center;">
            <button class="btn btn-outline" @click="showQQ = false">稍后再说</button>
            <button class="btn btn-primary" @click="copyQQ">📋 复制群号</button>
          </div>
          <p v-if="copied" style="color:#4caf50;font-size:0.8rem;margin-top:8px;">✅ 已复制！快去QQ加群吧~</p>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showQQ = ref(false)
const copied = ref(false)

function copyQQ() {
  navigator.clipboard?.writeText('123456789').then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }).catch(() => {
    const ta = document.createElement('textarea')
    ta.value = '123456789'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
