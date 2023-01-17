<template>
  <a-row class="login-container">
    <a-col
      :xs="{ span: 20, offset: 2 }"
      :sm="{ span: 12, offset: 6 }"
      :md="{ span: 12, offset: 6 }"
      :lg="{ span: 6, offset: 9 }"
    >
      <div class="text-wrap mb-32">
        <label>สวัสดี, คุณอดิศักดิ์</label>
      </div>
      <div class="image-success mb-32">
        <img src="~/assets/images/Frame (1).svg" alt="" />
      </div>
      <div class="text-alert">
        <p align="center">
          ขณะนี้บัญชีของท่านได้ถูกเชื่อมต่อเพื่อรับการ<br />แจ้งเตือนผ่าน Line
        </p>
      </div>
    </a-col>
    <div class="cancel-connect">
      <a @click="$router.push('/')">ยกเลิกการเชื่อมต่อ</a>
    </div>
  </a-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('~/assets/css/style.scss');
.login-container {
  height: 100vh;
  padding: 20vh 0 0 0;
  & div.image-success {
    text-align: center;
    & img {
      width: 200px;
      height: 200px;
    }
  }
  div.text-alert {
    text-align: center;
    & p {
      font-family: 'Sarabun', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 18px;
      text-align: center;

      color: #000000;

      opacity: 0.65;
    }
  }
  .cancel-connect {
    display: flex;
    position: absolute;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    align-items: center;
    justify-content: center;
    padding: 14px;
    bottom: 0;
    & a {
      text-decoration: none;
      font-family: 'Noto Sans Thai Condensed Light';
      font-size: 1rem;
      line-height: 24px;

      color: #2196f3;
    }
  }
  .text-wrap {
    text-align: center;
    & label {
      font-family: 'Noto Sans Thai Condensed Bold';
      font-size: 1.5rem;
      line-height: 33px;
      color: #000000;
    }
  }
}
</style>
