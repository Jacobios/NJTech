<template>
  <div class="page">
    <div class="page-header">
      <h1>🏫 校园生活指南</h1>
      <p class="subtitle">在江浦校区过得明明白白</p>
    </div>

    <!-- 宿舍 -->
    <div class="section-title">🛏️ 宿舍情况</div>
    <div class="card">
      <h4 style="font-size:0.95rem;margin-bottom:6px;">🏠 宿舍基本配置</h4>
      <ul class="checklist">
        <li><span class="check-icon">🛏️</span> 四人间/六人间（大部分是四人间），上床下桌</li>
        <li><span class="check-icon">🪟</span> 有空调！有空调！（需交押金租用）</li>
        <li><span class="check-icon">🛁</span> 独立卫浴？部分有，部分楼层公共浴室</li>
        <li><span class="check-icon">🌐</span> 校园网覆盖，也可自己办宽带</li>
        <li><span class="check-icon">🔌</span> 每个床位有插座，建议带插线板</li>
        <li><span class="check-icon">💡</span> 周日到周四23:00熄灯，周五周六0:00熄灯</li>
      </ul>
    </div>
    <div class="warn-box">
      <span class="icon">⚡</span>
      <span>宿舍限电800W！吹风机、电热水壶、电饭锅、电热毯等都是违禁品。每层楼有公共吹风机插座。</span>
    </div>

    <!-- 一卡通 -->
    <div class="section-title">💳 一卡通（校园卡）</div>
    <div class="card">
      <p style="font-size:0.85rem;margin-bottom:10px;">一卡通是你的校内身份证+钱包：</p>
      <ul class="checklist">
        <li><span class="check-icon">🍽️</span> 食堂消费（所有食堂通用）</li>
        <li><span class="check-icon">🛁</span> 宿舍洗澡热水刷卡</li>
        <li><span class="check-icon">📚</span> 图书馆借书 & 进出门禁</li>
        <li><span class="check-icon">🏪</span> 校内超市消费</li>
        <li><span class="check-icon">🚌</span> 校车刷卡乘车</li>
        <li><span class="check-icon">🏥</span> 校医院挂号</li>
      </ul>
    </div>
    <div class="tip-box">
      <span class="icon">💡</span>
      <span>充值方式：学校绑定的银行卡在食堂圈存机充值 / 工银e校园APP。每天消费上限<strong>50元</strong>，超50元后单笔超30元需输密码（身份证后六位）。补办去行政楼101，带身份证+学生证+20元现金。</span>
    </div>

    <!-- 快递 -->
    <div class="section-title">📦 快递收发</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">📍</span> <strong>东苑快递服务中心：</strong>中通、圆通、韵达等（东苑食堂后）</li>
        <li><span class="check-icon">📍</span> <strong>亚青快递服务中心：</strong>申通、极兔等（亚青村附近）</li>
        <li><span class="check-icon">📍</span> <strong>京东/顺丰：</strong>东苑食堂附近独立网点</li>
        <li><span class="check-icon">📝</span> <strong>收货地址①：</strong>南京市浦口区浦珠南路30号东苑校园快递服务中心（住东苑/西苑/南苑/北苑/桂苑用）</li>
        <li><span class="check-icon">📝</span> <strong>收货地址②：</strong>南京市浦口区浦珠南路30号亚青快递服务中心（住亚青/象山/檀香用）</li>
        <li><span class="check-icon">🕐</span> <strong>人工取件：</strong>9:00-19:30（高峰期会延长）</li>
        <li><span class="check-icon">📱</span> <strong>智能取件：</strong>东苑可用微信扫码+身份证自助取件</li>
      </ul>
    </div>

    <!-- 校内交通 -->
    <div class="section-title">🚌 校内交通</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">🚌</span> <strong>校车（小蓝）：</strong>校内穿梭巴士，刷卡<strong>0.5元/次</strong>，路线有"象山↔东苑↔南苑"和"象山↔东苑↔浦江"</li>
        <li><span class="check-icon">🚲</span> <strong>共享单车：</strong>校内有很多哈啰单车，办个月卡很划算</li>
        <li><span class="check-icon">🛴</span> <strong>电动车：</strong>可以自己买，但充电桩不好抢</li>
      </ul>
      <div class="warn-box">
        <span class="icon">⚠️</span>
        <span>校园坡度较大，<strong>禁止骑自行车和电动车载人</strong>！安全第一。可在校车亭或"南工大微服务"公众号查询实时路线。</span>
      </div>
    </div>

    <!-- 生活设施 -->
    <div class="section-title">🛒 校内生活设施</div>
    <div class="card">
      <ul class="checklist">
        <li><span class="check-icon">🏪</span> 教育超市（多家，价格公道）</li>
        <li><span class="check-icon">💇</span> 理发店（价格便宜但技术一般，建议去校外）</li>
        <li><span class="check-icon">🏧</span> ATM机（工行、建行、中行等）</li>
        <li><span class="check-icon">🖨️</span> 打印店（期末爆满，提前打）</li>
        <li><span class="check-icon">🏥</span> 校医院（小病能看，大病转诊）</li>
        <li><span class="check-icon">📚</span> 图书馆（自习圣地，有空调！）</li>
        <li><span class="check-icon">🏊</span> 体育馆/游泳馆（刷一卡通，很便宜）</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Campus page
</script>
