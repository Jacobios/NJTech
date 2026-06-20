<template>
  <div class="page">
    <div class="page-header">
      <h1>💪 军训生存指南</h1>
      <p class="subtitle">熬过去就是胜利！</p>
    </div>

    <div class="card" style="text-align:center;">
      <p style="font-size:0.95rem;">
        南工大军训一般持续 <strong>14天左右</strong>，在开学报到后的第3天开始。<br/>
        虽然辛苦，但这是你大学最难忘的回忆之一。
      </p>
    </div>

    <!-- 必备物品 -->
    <div class="section-title">🎒 军训必备清单</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">☀️</span> <strong>防晒霜</strong> — 选SPF50+，PA++++，每隔2小时补涂一次！男生也别省，晒伤比晒黑更难受</li>
        <li><span class="check-icon">💧</span> <strong>大容量水杯</strong> — 1.5L起，贴上名字标签，不然会被拿错</li>
        <li><span class="check-icon">👟</span> <strong>鞋垫</strong> — 军训鞋底很薄！用卫生巾当鞋垫，吸汗又软，男生真的别害羞</li>
        <li><span class="check-icon">🧦</span> <strong>深色袜子</strong> — 必须是深色！多带几双，每天换</li>
        <li><span class="check-icon">💊</span> <strong>常用药品</strong> — 藿香正气水、创可贴、润喉糖、风油精</li>
        <li><span class="check-icon">🧻</span> <strong>湿巾+纸巾</strong> — 休息时擦汗用</li>
        <li><span class="check-icon">🍬</span> <strong>糖果/巧克力</strong> — 低血糖时救命</li>
      </ul>
    </div>

    <!-- 每日时间线 -->
    <div class="section-title">⏰ 军训一日作息（参考）</div>
    <div class="card">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>6:00 起床</h4>
          <p>比高中还早……别赖床，迟到了全连一起受罚</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>6:30-7:00 早操</h4>
          <p>晨跑+队列训练，空腹记得先喝口水</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>7:00-7:30 早餐</h4>
          <p>一定要吃！别怕胖，不吃会晕！</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>8:00-11:30 上午训练</h4>
          <p>最热的时段，站军姿、走队列、踢正步</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>11:30-14:00 午餐+午休</h4>
          <p>抓紧睡觉！下午才有精神</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>14:00-17:30 下午训练</h4>
          <p>继续队列训练，有时会有拉歌活动</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>19:00-21:00 晚训</h4>
          <p>相对轻松，拉歌、内务整理教学、国防教育</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>22:00 熄灯</h4>
          <p>别玩手机了，赶紧睡！第二天又是6点起</p>
        </div>
      </div>
    </div>

    <!-- 生存技巧 -->
    <div class="section-title">🧠 军训生存技巧</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">1</span> <strong>早餐必须吃：</strong>空腹+暴晒=晕倒，每年都有几个</li>
        <li><span class="check-icon">2</span> <strong>防晒霜别省：</strong>脖子后面、耳朵、手臂都涂到</li>
        <li><span class="check-icon">3</span> <strong>学会摸鱼：</strong>身体不舒服马上报告，别硬撑！教官也是人</li>
        <li><span class="check-icon">4</span> <strong>多交朋友：</strong>军训是同班同学最齐的时候，多认识人</li>
        <li><span class="check-icon">5</span> <strong>内务整理：</strong>被子叠好！检查不过关全连受罚</li>
        <li><span class="check-icon">6</span> <strong>别和教官对着干：</strong>他们也只是在执行任务</li>
        <li><span class="check-icon">7</span> <strong>晚上泡脚：</strong>热水泡脚缓解疲劳，睡得更香</li>
      </ul>
    </div>

    <!-- 伤病连 -->
    <div class="section-title">🏥 关于伤病连</div>
    <div class="card">
      <p style="font-size:0.85rem;color:var(--text-secondary);">
        如果有医院开具的证明（心脏病、哮喘、骨折等），可以申请进入<strong>伤病连</strong>（也叫飞虎队），不用参加正常训练，一般是坐着看或者做点轻活。
      </p>
    </div>
    <div class="warn-box">
      <span class="icon">⚠️</span>
      <span>没有特殊情况不要装病，被发现了很尴尬。而且军训确实能让你更快融入集体。</span>
    </div>

    <!-- 军训收获 -->
    <div class="section-title">🎖️ 军训的收获</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">🤝</span> 认识大学第一批朋友</li>
        <li><span class="check-icon">💪</span> 锻炼意志力（虽然过程痛苦）</li>
        <li><span class="check-icon">📸</span> 留下第一张大学集体照</li>
        <li><span class="check-icon">🎤</span> 拉歌！大学最快乐的回忆之一</li>
        <li><span class="check-icon">🏆</span> 优秀学员可以加综测分</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Military page
</script>
