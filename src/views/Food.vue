<template>
  <div class="page">
    <div class="page-header">
      <h1>🍜 吃喝玩乐</h1>
      <p class="subtitle">江浦校区美食地图 & 周边攻略</p>
    </div>

    <!-- 校内食堂 -->
    <div class="section-title">🍽️ 校内食堂</div>
    <div class="card">
      <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">
        江浦校区有<strong>11个食堂</strong>，各有特色：
      </p>
      <ul class="checklist">
        <li><span class="check-icon">🥇</span> <strong>东苑食堂：</strong>最大最全，三层楼，选择最多</li>
        <li><span class="check-icon">🥈</span> <strong>西苑食堂：</strong>二楼麻辣香锅一绝</li>
        <li><span class="check-icon">🥉</span> <strong>北苑食堂：</strong>规模较小，但面食很好吃</li>
        <li><span class="check-icon">🍕</span> <strong>南苑食堂：</strong>留学生多，有些异国风味</li>
        <li><span class="check-icon">☕</span> <strong>各食堂人均：</strong>早餐3-8元，午餐8-15元</li>
      </ul>
    </div>
    <div class="tip-box">
      <span class="icon">💡</span>
      <span><strong>学长推荐：</strong>东苑二楼的黄焖鸡、西苑的麻辣香锅、北苑的兰州拉面，YYDS！</span>
    </div>

    <!-- 外卖 -->
    <div class="section-title">🛵 外卖攻略</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">📱</span> 美团/饿了么外卖可送到校门口/宿舍楼下外卖柜</li>
        <li><span class="check-icon">🏠</span> 部分外卖可以直接送到宿舍楼下</li>
        <li><span class="check-icon">⏰</span> 高峰期（11:30-12:30、17:30-18:30）外卖会慢</li>
        <li><span class="check-icon">💸</span> 开通外卖会员，很划算</li>
      </ul>
    </div>

    <!-- 校外美食 -->
    <div class="section-title">🍢 校外美食街</div>
    <div class="card-grid">
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🔥 龙华美食街（学校东南门对面）</h4>
        <p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:10px;">
          南工大学生的第二食堂，步行5分钟：
        </p>
        <ul class="checklist">
          <li><span class="check-icon">🍗</span> 炸鸡、烤冷面、肉夹馍、铁板豆腐……</li>
          <li><span class="check-icon">🍲</span> 麻辣烫、火锅、烧烤、小龙虾</li>
          <li><span class="check-icon">🧋</span> 蜜雪冰城、一点点、茶百道、瑞幸咖啡都有</li>
          <li><span class="check-icon">💰</span> 人均消费：正餐15-30元，小吃5-15元</li>
        </ul>
      </div>
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🏙️ 稍远一点的好去处</h4>
        <ul class="checklist">
          <li><span class="check-icon">🛍️</span> <strong>印象汇/弘阳广场：</strong>打车10分钟，吃喝玩乐购物一条龙</li>
          <li><span class="check-icon">🏬</span> <strong>浦口万汇城：</strong>新开的大商场，环境好</li>
          <li><span class="check-icon">🏪</span> <strong>金盛田广场：</strong>离学校最近的大型商场</li>
        </ul>
      </div>
    </div>

    <!-- 南京必吃 -->
    <div class="section-title">🏙️ 南京特色美食（周末打卡）</div>
    <div class="card-grid">
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🍽️ 必吃清单</h4>
        <ul class="checklist">
          <li><span class="check-icon">🦆</span> <strong>盐水鸭/烤鸭：</strong>没有一只鸭子能活着离开南京</li>
          <li><span class="check-icon">🍜</span> <strong>鸭血粉丝汤：</strong>南京灵魂美食</li>
          <li><span class="check-icon">🥟</span> <strong>小笼包/汤包：</strong>小心烫嘴！</li>
        </ul>
      </div>
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🍢 继续打卡</h4>
        <ul class="checklist">
          <li><span class="check-icon">🍲</span> <strong>牛肉锅贴：</strong>李记清真馆（要排队）</li>
          <li><span class="check-icon">🍡</span> <strong>梅花糕：</strong>夫子庙一带很多</li>
          <li><span class="check-icon">🍚</span> <strong>皮肚面：</strong>南京人自己的面</li>
        </ul>
      </div>
    </div>

    <!-- 南京景点 -->
    <div class="section-title">🎡 周末去哪玩</div>
    <div class="card-grid">
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🏛️ 市区必去</h4>
        <ul class="checklist">
          <li><span class="check-icon">🏛️</span> <strong>夫子庙/秦淮河：</strong>地铁直达，夜景绝美</li>
          <li><span class="check-icon">🏔️</span> <strong>中山陵/明孝陵：</strong>南京地标，学生票半价</li>
          <li><span class="check-icon">🏛️</span> <strong>南京博物院：</strong>免费！提前预约</li>
          <li><span class="check-icon">🏙️</span> <strong>新街口：</strong>中华第一商圈</li>
        </ul>
      </div>
      <div class="card">
        <h4 style="font-size:0.9rem;margin-bottom:6px;">🌿 休闲好去处</h4>
        <ul class="checklist">
          <li><span class="check-icon">🌊</span> <strong>玄武湖：</strong>免费，适合散步拍照</li>
          <li><span class="check-icon">🎢</span> <strong>老门东：</strong>比夫子庙更有味道</li>
          <li><span class="check-icon">🏯</span> <strong>鸡鸣寺：</strong>春天樱花绝美</li>
          <li><span class="check-icon">🦁</span> <strong>红山动物园：</strong>网红动物园，学生票很便宜</li>
        </ul>
      </div>
    </div>
    <div class="tip-box">
      <span class="icon">💡</span>
      <span>南京大部分景点有学生票！带上学生证/一卡通，能省不少钱。很多博物馆免费但需提前预约。</span>
    </div>

    <!-- 食堂维权 -->
    <div class="section-title">🛡️ 食堂吃到异物怎么办？</div>
    <div class="card" style="border-left:3px solid var(--accent);">
      <ol class="step-list">
        <li class="step-item">
          <span class="step-num">1</span>
          <div class="step-content">
            <h4>当场反映</h4>
            <p>立即去就餐窗口反映，要求当面处理</p>
          </div>
        </li>
        <li class="step-item">
          <span class="step-num">2</span>
          <div class="step-content">
            <h4>拍照留证</h4>
            <p>拍下时间、地点、异物照片，保留消费小票</p>
          </div>
        </li>
        <li class="step-item">
          <span class="step-num">3</span>
          <div class="step-content">
            <h4>联系权益部</h4>
            <p>通过QQ或微信向校学生会权益部（小E）反映，食堂24小时内处理</p>
          </div>
        </li>
      </ol>
      <p style="font-size:0.82rem;color:var(--accent);margin-top:8px;font-weight:600;">
        💪 大胆维权！这是你的合法权利，别忍气吞声！
      </p>
    </div>
  </div>
</template>

<script setup>
// Food page
</script>
