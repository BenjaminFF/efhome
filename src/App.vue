<template>
  <div id="app">
    <el-form ref="mForm" :model="formData" label-width="80px" :rules="formRules">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" v-if="showCaptcha">
        <el-input v-model="formData.captcha"></el-input>
        <div v-html="captchaData"></div>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" @click="submitForm('mForm')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    data() {
      return {
        formRules: [],
        formData: {},
        captchaData:"",
        showCaptcha:false
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.formRules = {
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 32, message: '密码长度在 6 到 32 个字符', trigger: 'blur'},
            {}
          ],
          captcha: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur'}
          ]
        }
        this.formData = {
          email: "",
          password: "",
          captcha: ""
        }
        this.fetchData();
      },
      fetchData(){

      },
      submitForm(formName) {
        this.validatePass();
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //this.validatePass();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      validatePass(){
        this.axios.post('/api/user/login');
      }
    }
  }
</script>

<style>
  body, html {
    width: 100%;
    height: 100%;
  }

  body, html, div {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
