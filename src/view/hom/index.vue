<template>

  <!-- <div
    class="updata"
  	@click="testMethod('是的，我被调用了')"
  	>
  	插件测试
  </div> -->
  
  <!-- <div
    class="updata"
  	@click="fetchData()"
  	>
  	请求测试
  </div> -->
  
  <div id="hom" >
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1>约好饭 · 川湘快餐</h1>
        <p>地道川湘风味，新鲜现炒热卖，<br>一餐好饭，约好就来。</p>
        <a href="#menu" class="btn btn-primary">查看菜单</a>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="section" id="about">
      <h2 class="section-title">关于我们</h2>
      <div class="divider"></div>
      <div class="about-wrapper">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="餐厅环境" />
        </div>
        <div class="about-text">
          <h3>现炒 · 够味 · 快</h3>
          <p>约好饭主打川湘风味快餐，盖饭、小炒、干锅一应俱全。拒绝预制，拒绝料理包，坚持每日新鲜现炒，出锅快、分量足、下饭更过瘾。</p>
          <p>上班不用带饭、朋友拼餐，约好饭都是您最好的选择。</p>
          <div class="about-features">
            <div class="feature">
              <div class="feature-icon">🌶️</div>
              <h4>川湘口味</h4>
              <span>地道下饭</span>
            </div>
            <div class="feature">
              <div class="feature-icon">🔥</div>
              <h4>现炒现做</h4>
              <span>拒绝料理包</span>
            </div>
            <div class="feature">
              <div class="feature-icon">⏱️</div>
              <h4>快速出餐</h4>
              <span>省时又省心</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 精选菜单 -->
    <section class="section" id="menu" style="background:#f0f5f0;">
      <h2 class="section-title">招牌菜单</h2>
      <p class="section-subtitle">现炒盖饭 · 小炒 · 干锅</p>
      <div class="divider"></div>
      <div class="menu-grid">
        <div class="menu-card">
          <div class="menu-card-img" style="background-image:url('/src/assets/Fish-flavored-shredded-pork.png')">
            <span class="tag">盖饭热销</span>
          </div>
          <div class="menu-card-body">
            <h4>鱼香肉丝盖饭</h4>
            <p>猪里脊切丝，泡椒、木耳、胡萝卜同炒，酸甜微辣，配米饭绝佳。</p>
          </div>
        </div>
        <div class="menu-card">
          <div class="menu-card-img" style="background-image:url('/src/assets/Shrimp-tenderloin-slices.png')">
            <span class="tag">干锅必点</span>
          </div>
          <div class="menu-card-body">
            <h4>干锅虾</h4>
            <p>鲜活大虾配嫩肉片，干辣椒、花椒爆香，麻辣鲜香，越嚼越有味。</p>
          </div>
        </div>
        <div class="menu-card">
          <div class="menu-card-img" style="background-image:url('/src/assets/Stir-fried-Pork.png')">
            <span class="tag">小炒下饭</span>
          </div>
          <div class="menu-card-body">
            <h4>农家小炒肉</h4>
            <p>五花肉配青椒、豆豉快炒，锅气十足，是米饭杀手级别的家常味道。</p>
          </div>
        </div>
        <div class="menu-card">
          <div class="menu-card-img" style="background-image:url('/src/assets/pig-intestines.png')">
            <span class="tag">干锅招牌</span>
          </div>
          <div class="menu-card-body">
            <h4>干锅肥肠</h4>
            <p>肥肠处理干净，配洋葱、青椒大火翻炒，香辣够味，口感软糯弹牙，下饭一绝。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 扫码点餐 -->
    <section class="section" id="order">
      <h2 class="section-title">扫码点餐</h2>
      <div class="divider"></div>
      <div class="scan-wrapper">
        <!-- 左侧：二维码卡片 -->
        <div class="scan-left">
          <div class="qrcode-card">
            <img src="/src/assets/code.png" alt="小程序二维码" class="qrcode-img" />
            <p class="qrcode-tip">微信扫一扫</p>
          </div>
        </div>
        <!-- 右侧：功能介绍 -->
        <div class="scan-right">
          <h3 class="scan-title">扫码进入小程序</h3>
          <p class="scan-desc">微信扫码，即刻享受便捷点餐服务</p>
          <ul class="scan-list">
            <li>
              <span class="scan-icon">🍽️</span>
              <div>
                <strong>扫码点餐</strong>
                <p>无需排队，轻松下单</p>
              </div>
            </li>
            <li>
              <span class="scan-icon">🥘</span>
              <div>
                <strong>团餐预定</strong>
                <p>预约团餐，专人配送上门</p>
              </div>
            </li>
            <li>
              <span class="scan-icon">🚚</span>
              <div>
                <strong>定点配送</strong>
                <p>满额免配送费，快速送达</p>
              </div>
            </li>
            <li>
              <span class="scan-icon">✨</span>
              <div>
                <strong>高端单点</strong>
                <p>精选食材，品质保障</p>
              </div>
            </li>
            <li>
              <span class="scan-icon">💻</span>
              <div>
                <strong>持续迭代</strong>
                <p>自主研发，专业团队维护</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="section" id="contact">
      <h2 class="section-title">联系我们</h2>
      <div class="divider"></div>
      <div class="contact-map-full">
        <iframe
          class="map-iframe"
          src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=yuehaofan&coord=29.717488,106.554783"
          loading="lazy"
          allow="geolocation"
          frameborder="0"
        ></iframe>
      </div>
      <div class="contact-info-bar">
        <a href="tel:18166253520" class="contact-item contact-phone">
          <span class="contact-icon">📞</span>
          <span>181-6625-3520</span>
        </a>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <span>重庆市两江新区悦来街道悦山路35号附23号</span>
        </div>
        <div class="contact-item">
          <span class="contact-icon">🕐</span>
          <span>周一至周六 08:00 - 20:00</span>
        </div>
        <a href="https://lbs.qq.com/search.html?keyword=%E6%B8%A9%E6%9D%A5%E5%B1%B1%E8%B7%AF35%E5%8F%B7%E9%99%8423%E5%8F%B7&pointx=106.554783&pointy=29.717488" target="_blank" class="map-link">在地图中查看 →</a>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-links">
        <a href="#about" @click="scrollTo('#about')">关于我们</a>
        <a href="#menu" @click="scrollTo('#menu')">招牌菜单</a>
        <a href="#order" @click="scrollTo('#order')">扫码点餐</a>
        <a href="#contact" @click="scrollTo('#contact')">联系我们</a>
      </div>
      <div class="footer-info">
        <span>© 2026 约好饭 · 川湘快餐</span>
        <span class="sep">|</span>
        <span>主办单位: 两江新区约好饭餐饮餐馆（个体工商户）</span>
        <span class="sep">|</span>
        <span>食品经营许可证: JY25001570035274</span>
      </div>
      <div class="footer-icp">
        ICP备案号: 渝ICP备2026010461号-1
      </div>
    </footer>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import http from '../../request/http'

const fetchData = async () => {
  console.log('hhh')
  try {
	await http.post('/app-api/system/area/tree', {
	  id: 1,
	  name: '我就是POST请求的参数'
	})
	.then(res => {
	  console.log(res, '-----')
	})
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}

// 丝滑滚动到底部锚点
const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (!el) return
  const app = document.querySelector('#app')
  if (!app) return
  const targetTop = el.offsetTop
  const startTop = app.scrollTop
  const distance = targetTop - startTop
  const duration = 500
  let startTime = null

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    app.scrollTop = startTop + distance * ease
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
@import './index.css';
</style>
