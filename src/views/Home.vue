<template>
  <div class="page">
    <!-- Hero -->
    <div class="hero">
      <h1>🎓 南工大新生攻略</h1>
      <p class="hero-sub">学长整理的入学必看指南 · 非官方但走心</p>
      <span class="hero-badge">📢 2026级新生专用</span>
    </div>

    <!-- 欢迎语 -->
    <div class="card" style="text-align:center;">
      <p style="font-size:1rem;font-weight:600;margin-bottom:4px;">
        恭喜你成为南京工业大学的一员！🎉
      </p>
      <p style="font-size:0.82rem;color:var(--text-secondary);">
        作为一名老学长，我整理了这份新生攻略，<br/>涵盖你入学后可能遇到的所有问题。<br/>
        <strong>建议收藏，随时查看！</strong>
      </p>
    </div>

    <!-- 快速导航 -->
    <div class="section-title">📋 快速导航</div>
    <div class="menu-grid">
      <router-link to="/prepare" class="menu-item">
        <span class="menu-icon">🎒</span>
        <span class="menu-label">入学准备</span>
      </router-link>
      <router-link to="/report" class="menu-item">
        <span class="menu-icon">📝</span>
        <span class="menu-label">报到流程</span>
      </router-link>
      <router-link to="/military" class="menu-item">
        <span class="menu-icon">💪</span>
        <span class="menu-label">军训指南</span>
      </router-link>
      <router-link to="/campus" class="menu-item">
        <span class="menu-icon">🏫</span>
        <span class="menu-label">校园生活</span>
      </router-link>
      <router-link to="/study" class="menu-item">
        <span class="menu-icon">📚</span>
        <span class="menu-label">学习攻略</span>
      </router-link>
      <router-link to="/food" class="menu-item">
        <span class="menu-icon">🍜</span>
        <span class="menu-label">吃喝玩乐</span>
      </router-link>
      <router-link to="/clubs" class="menu-item">
        <span class="menu-icon">🎯</span>
        <span class="menu-label">社团组织</span>
      </router-link>
      <router-link to="/tips" class="menu-item">
        <span class="menu-icon">💡</span>
        <span class="menu-label">学长忠告</span>
      </router-link>
      <router-link to="/rights" class="menu-item">
        <span class="menu-icon">🛡️</span>
        <span class="menu-label">校园权益</span>
      </router-link>
    </div>

    <!-- 快速统计 -->
    <div class="section-title">📊 南工大速览</div>
    <div class="stats-row">
      <div class="stat-item">
        <div class="stat-num">3</div>
        <div class="stat-label">个校区</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">3.8万+</div>
        <div class="stat-label">在校学生</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">11</div>
        <div class="stat-label">个食堂</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">100+</div>
        <div class="stat-label">社团组织</div>
      </div>
    </div>

    <!-- 校区说明 -->
    <div class="section-title">📍 校区分布</div>
    <div class="card-grid">
      <div class="card">
        <h4 style="font-size:0.95rem;margin-bottom:6px;">🏛️ 江浦校区（主校区）</h4>
        <p style="font-size:0.82rem;color:var(--text-secondary);">
          地址：南京市浦口区浦珠南路30号<br/>
          大部分本科生在此就读，占地面积约4000亩，是江苏省最大的单体校区之一。
        </p>
      </div>
      <div class="card">
        <h4 style="font-size:0.95rem;margin-bottom:6px;">🏢 新模范马路校区</h4>
        <p style="font-size:0.82rem;color:var(--text-secondary);">
          位于市区，主要为研究生院和部分学院所在地，交通便利。
        </p>
      </div>
      <div class="card">
        <h4 style="font-size:0.95rem;margin-bottom:6px;">🏗️ 滁州校区</h4>
        <p style="font-size:0.82rem;color:var(--text-secondary);">
          新建校区，部分专业在此就读，设施较新。
        </p>
      </div>
    </div>

    <!-- QQ群引流 -->
    <div class="qq-banner">
      <h3>🎓 加入2025级南工大新生群</h3>
      <p>群里有各专业学长学姐，随时解答你的疑问！</p>
      <div class="qq-number">QQ群：123456789</div>
      <p style="font-size:0.8rem;margin-top:8px;">找室友 · 问选课 · 聊专业 · 交朋友</p>
    </div>

    <!-- 声明 -->
    <div style="text-align:center;padding:16px 0;color:var(--text-muted);font-size:0.7rem;">
      ⚠️ 本网站由南工大学长个人制作，非学校官方平台<br/>
      内容仅供参考，重要信息请以学校官方通知为准
    </div>
  </div>
</template>

<script setup>
// Home page - no additional logic needed
</script>
