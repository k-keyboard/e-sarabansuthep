<template>
  <a-row class="login-container">
    <a-col
      :xs="{ span: 20, offset: 2 }"
      :sm="{ span: 12, offset: 6 }"
      :md="{ span: 12, offset: 6 }"
      :lg="{ span: 6, offset: 9 }"
    >
      <a-col class="header" align="center">
        <img src="../assets/images/logo.svg" alt="" />
        <div class="text-wrap">
          <label>ระบบบริหารจัดการสำนักงาน</label>
          <br />
          <label>เทศบาลตำบลสุเทพ</label>
        </div>
      </a-col>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form formWrap"
        @submit="handleSubmit"
      >
        <div>
          <label class="label-input-username">Username:</label>
          <a-form-item
            class="formWrap"
            
          >
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: 'กรุณากรอกชื่อผู้ใช้งานของคุณ' },
                  ],
                },
              ]"
              class="username"
              placeholder="Username"
            >
            </a-input>
          </a-form-item>
          <label class="label-input-password">รหัสผ่าน:</label>
          <a-form-item
            class="formWrap"
            
          >
            <a-input-password
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'กรุณากรอกรหัสผ่านของคุณ' },
                  ],
                },
              ]"
              placeholder="รหัสผ่าน"
            >
              <a-icon type="lock" style="color: rgba(0, 0, 0, 0.25)" />
            </a-input-password>
          </a-form-item>
          <!-- <div class="forgot">
            <a class="login-form-forgot" href=""> ลืมรหัสผ่าน? </a>
          </div> -->
          <a-form-item class="btn" align="center">
            <a-button
              id="btn-submit"
              block
              type="primary"
              html-type="submit"
              class="login-form-button"
              :loading="loading"
            >
              เข้าสู่ระบบ
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some((field) => fieldsError[field])
// }
const key = 'updatable'
export default {
  data(){
    return{
      loading:false
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     // To disabled submit button at the beginning.
  //     this.form.validateFields()
  //   })
  // },
  methods: {
    // // Only show error after a field is touched.
    // userNameError() {
    //   const { getFieldError, isFieldTouched } = this.form
    //   return isFieldTouched('userName') && getFieldError('userName')
    // },
    // // Only show error after a field is touched.
    // passwordError() {
    //   const { getFieldError, isFieldTouched } = this.form
    //   return isFieldTouched('password') && getFieldError('password')
    // },
    handleSubmit(e) {
      e.preventDefault()
      // this.loading = true
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
          this.$message.loading({ content: 'Loading...', key })
          setTimeout(() => {
            this.$message.success({ content: 'Loaded!', key, duration: 2 })
          }, 1000)
          setTimeout(() => {
            // this.$router.push('/profile')
          }, 1300)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('~/assets/css/style.scss');

.login-container {
  margin-top: 15vh;
  font-family: 'Noto Sans Thai', sans-serif;
  & .text-wrap {
    margin-bottom: 24px;
    margin-top: 4px;
    & label:nth-child(1) {
      font-family: 'Noto Sans Thai Condensed Bold';
      font-size: 1.25rem;
      line-height: 30px;
      color: #000000;
    }
    & label:nth-child(3) {
      font-family: 'Noto Sans Thai Condensed';
      font-size: 0.875rem;
      line-height: 16px;
      color: #000000;
      opacity: 0.55;
    }
  }
  & form.login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      max-width: 295px;
      width: 295px;
    }
    & .ant-form-item {
      margin-bottom: 0;
      & input.username {
        border-radius: 4px;
        height: 40px;
      }
      & ::v-deep #normal_login_password {
        border-radius: 4px;
        height: 40px;
      }
      & ::v-deep ::placeholder {
        font-family: 'Sarabun', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.25);
      }
    }
    & .ant-form-item:first-of-type {
      margin: 0 0 20px 0;
    }
    & label.label-input-password {
      font-family: 'Noto Sans Thai Condensed';
      font-size: 0.75rem;
      line-height: 18px;
      margin-bottom: 4px;
      color: #000000;
      mix-blend-mode: normal;
      opacity: 0.65;
    }
    label.label-input-username {
      font-family: 'Noto Sans Thai', sans-serif;
      font-size: 0.75rem;
      line-height: 18px;
      margin-bottom: 4px;
      color: #000000;
      mix-blend-mode: normal;
      opacity: 0.65;
    }
    & div.forgot {
      text-align: right;
      margin-top: 14px;
      & a {
        font-family: 'Noto Sans Thai Condensed Light';
        font-size: 0.875rem;
        line-height: 18px;
        color: #2196f3;
      }
    }
    & .ant-form-item.btn {
      margin-top: 20px;
      & button.login-form-button {
        background: #1483ea;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        height: 40px;
        &[disabled] {
          background: rgba(20, 131, 234, 0.6);
          color: #f9f9f9;
          border: none;
        }
        & ::v-deep span {
          font-family: 'Noto Sans Thai', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 21px;
          text-align: center;
        }
      }
    }
  }
}
</style>
