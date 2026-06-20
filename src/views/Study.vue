<template>
  <div class="page">
    <div class="page-header">
      <h1>📚 学习攻略</h1>
      <p class="subtitle">大学学习，全靠自觉！</p>
    </div>

    <div class="card" style="text-align:center;">
      <p style="font-size:0.9rem;line-height:1.7;">
        大学和高中最大的区别：<strong>没人管你了。</strong><br/>
        去不去上课？老师不管。写不写作业？可能也不查。<br/>
        但——<strong>挂科了你就知道厉害了。</strong>
      </p>
    </div>

    <!-- 选课 -->
    <div class="section-title">📋 选课指南</div>
    <div class="card">
      <h4 style="font-size:0.9rem;margin-bottom:4px;">抢课时间一般在学期末/开学初</h4>
      <ul class="checklist">
        <li><span class="check-icon">🎯</span> <strong>必修课：</strong>系统自动安排，不用抢</li>
        <li><span class="check-icon">🏃</span> <strong>选修课：</strong>需要抢！好课秒没</li>
        <li><span class="check-icon">🏀</span> <strong>体育课：</strong>也要抢！热门项目（羽毛球、游泳）秒光</li>
      </ul>
    </div>
    <div class="tip-box">
      <span class="icon">💡</span>
      <span><strong>抢课技巧：</strong>提前登录教务系统，打开多个浏览器，用校园网比宿舍宽带快！找学长学姐推荐好过的选修课。</span>
    </div>

    <!-- GPA -->
    <div class="section-title">📊 绩点（GPA）</div>
    <div class="card">
      <p style="font-size:0.85rem;margin-bottom:8px;">南工大采用4.0绩点制：</p>
      <div class="stats-row">
        <div class="stat-item"><div class="stat-num">4.0</div><div class="stat-label">90-100分</div></div>
        <div class="stat-item"><div class="stat-num">3.0</div><div class="stat-label">80-89分</div></div>
        <div class="stat-item"><div class="stat-num">2.0</div><div class="stat-label">70-79分</div></div>
        <div class="stat-item"><div class="stat-num">1.0</div><div class="stat-label">60-69分</div></div>
      </div>
      <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:8px;">
        GPA对保研、奖学金、出国都重要。大一上最容易刷GPA，因为课相对简单。<br/>
        <strong>别被"上了大学就轻松了"骗了！</strong>
      </p>
    </div>

    <!-- 自习 -->
    <div class="section-title">📖 自习好去处</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">📚</span> <strong>图书馆：</strong>环境最好，有空调，但期末一座难求。开门前就有人排队！</li>
        <li><span class="check-icon">🏫</span> <strong>空教室：</strong>教学楼没课的教室都可以进，用教务系统查空教室</li>
        <li><span class="check-icon">🏠</span> <strong>宿舍：</strong>看自制力，室友不吵的话也行</li>
        <li><span class="check-icon">☕</span> <strong>校内咖啡厅：</strong>环境不错但消费较高</li>
      </ul>
    </div>

    <!-- 考试 -->
    <div class="section-title">📝 期末考</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">⚠️</span> <strong>不要挂科！</strong>挂科=补考/重修=花钱+花时间+丢人</li>
        <li><span class="check-icon">📖</span> <strong>考前突击有用：</strong>老师划的重点、往届试卷认真看</li>
        <li><span class="check-icon">🚫</span> <strong>作弊后果很严重：</strong>取消学位证！直接开除！</li>
        <li><span class="check-icon">👥</span> <strong>组队复习：</strong>和学霸做朋友</li>
      </ul>
    </div>

    <!-- 考证 -->
    <div class="section-title">🎓 大学期间建议考的证</div>
    <div class="card">
      <ol class="step-list">
        <li class="step-item">
          <span class="step-num">1</span>
          <div class="step-content">
            <h4>CET-4 / CET-6（四六级）</h4>
            <p>大一上就能报四级，尽量一次过！六级早过早轻松</p>
          </div>
        </li>
        <li class="step-item">
          <span class="step-num">2</span>
          <div class="step-content">
            <h4>计算机二级</h4>
            <p>Office高级应用最实用，大二前搞定</p>
          </div>
        </li>
        <li class="step-item">
          <span class="step-num">3</span>
          <div class="step-content">
            <h4>普通话等级考试</h4>
            <p>想做老师/公务员的早点考，二甲以上有用</p>
          </div>
        </li>
        <li class="step-item">
          <span class="step-num">4</span>
          <div class="step-content">
            <h4>本专业相关证书</h4>
            <p>会计证、教资、建造师……根据专业来</p>
          </div>
        </li>
      </ol>
    </div>

    <!-- 奖学金 -->
    <div class="section-title">🏆 奖学金体系</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">🌟</span> 国家奖学金：8000元（顶尖，全校竞争）</li>
        <li><span class="check-icon">⭐</span> 国家励志奖学金：5000元（成绩好+家庭困难）</li>
        <li><span class="check-icon">✨</span> 校级奖学金：一等/二等/三等（每学期评）</li>
        <li><span class="check-icon">💡</span> 单项奖学金：科研、竞赛、社会工作等</li>
      </ul>
      <p style="font-size:0.8rem;color:var(--text-muted);margin-top:8px;">
        奖学金=成绩+综测，综测来源于参加活动、当班干部、比赛获奖等。
      </p>
    </div>
  </div>
</template>

<script setup>
// Study page
</script>
