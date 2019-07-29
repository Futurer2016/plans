<template>
<div class="db-sign">
  <div class="container clearfix">
    <!-- 注册/登录 -->
    <div class="sign-box">
      <!-- 页签管理 -->
      <div class="tab">
        <!-- switch class name: active -->
        <ul class="tab-list tab-start clearfix active">
          <li class="on">短信登录/注册</li>
          <li>密码登录</li>
        </ul>
        <!-- switch class name: active -->
        <ul class="tab-list tab-quick clearfix">
          <li class="on">二维码登录</li>
        </ul>
        <!-- switch class name : qr-quick <-> qr-start -->
        <a class="qr-switch qr-quick"></a>
      </div>
      <!-- 页签页面 -->
      <div class="tabcon-start">
        <!-- tips -->
        <p class="tips">登录注册表示同意 <a target="_blank" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a> </p>
        <!-- error msg -->
        <!-- switch class name show to display error info msg -->
        <div class="err-info"><span class="err-content">请正确填写手机号</span></div>
        <!-- tel num -->
        <div class="tel">
          <label>
            <span class="tel-label">手机号: </span>
            <input type="text" maxlength="13" placeholder="手机号">
            <div class="tel-area-code">
              <span>+86</span>
            </div>
          </label>
        </div>
        <!-- tel code -->
        <div class="tel-code">
          <label>
            <span class="code-label">验证码: </span>
            <input type="text" maxlength="6" placeholder="验证码">
            <div class="tel-code-btn">
              <a href="javascript: void 0;">获取验证码</a>
            </div>
          </label>
        </div>
        <div class="sign-in-btn">
          <a href="javascript: void 0;">登录豆瓣</a>
        </div>
        <!-- 登录选项 -->
        <div class="sign-fit clearfix">
          <div class="find-back">收不到验证码</div>
          <div class="remember-box">
            <label>
              <input type="checkbox">
              <span>下次自动登录</span>
            </label>
          </div>
        </div>
        <div class="other-sign-in clearfix">
          <span>第三方登录: </span>
          <ul>
            <li v-for="(other, index) in otherSignInList" :key="index">
              <a href="#" :style="{backgroundImage: other.image}"></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 二维码页面 -->
      <div class="tabcon-quick"></div>
    </div>
    <!-- app 二维码 -->
    <div class="app">
      <h2>豆瓣<span>6.0</span></h2>
      <a href="#">下载豆瓣 App</a>
      <div class="app-qr">
        <a href="javascript: void 0;">
          <img src="./../../assets/img/SignIn/icon_qrcode_green.png" alt="二维码">
        </a>
        <div class="app-qr-expand">
          <img src="./../../assets/img/SignIn/doubanapp_qrcode.png" alt="">
          <p>iOS / Android 扫码直接下载</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      otherSignInList: [
        {
          'image': `url("data:image/svg+xml;charset=utf-8,%3Csvg width='36' height='37' viewBox='0 0 36 37' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EGroup 6%3C/title%3E%3Cg transform='translate(-.015 .266)' fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%2364C574' cx='18' cy='18' r='18'/%3E%3Cpath d='M20.062 18c-.48 0-.962.529-.962 1.18 0 .53.481 1.06.962 1.06.722 0 1.238-.53 1.238-1.06 0-.651-.516-1.18-1.238-1.18m-1.99-4.481c.628 0 1.028-.449 1.028-1.121 0-.705-.4-1.12-1.029-1.12-.6 0-1.171.415-1.171 1.12 0 .672.572 1.12 1.171 1.12m-3.385 9.02c-1.001 0-1.732-.182-2.68-.486l-2.733 1.55.786-2.613C8.136 19.469 7 17.553 7 15.212c0-4.134 3.464-7.295 7.686-7.295 3.736 0 7.065 2.493 7.714 6.019a3.348 3.348 0 0 0-.73-.091c-3.682 0-6.523 3.1-6.523 6.84 0 .638.081 1.215.216 1.823-.216.03-.46.03-.677.03m11.597 3.345l.549 2.2-2.086-1.314c-.796.183-1.564.459-2.36.459-3.677 0-6.586-2.812-6.586-6.296 0-3.482 2.909-6.293 6.586-6.293 3.485 0 6.614 2.811 6.614 6.293 0 1.956-1.18 3.697-2.717 4.951M11.498 11.278c-.585 0-1.198.415-1.198 1.12 0 .672.613 1.12 1.198 1.12.556 0 1.002-.448 1.002-1.12 0-.705-.446-1.12-1.002-1.12M24.478 18c-.524 0-.978.529-.978 1.18 0 .53.454 1.06.977 1.06.699 0 1.223-.53 1.223-1.06 0-.651-.524-1.18-1.223-1.18' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E")`
        },
        {
          'image': `url("./../../assets/img/SignIn/weibo.svg")`
        }
      ]
      
    }
  }
}
</script>

<style lang="scss">
  @import "./SignIn.css";
</style>
