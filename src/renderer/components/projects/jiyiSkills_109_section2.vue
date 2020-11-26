<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <span class="badge-pill badge badge-primary mb-1" v-html="'金融卡帳號: ' + account"></span>
          <h3>請輸入密碼 8 ~ 12 位數字</h3>
          <hr>
          <input type="text" v-model="password.join('')" placeholder="金融卡密碼" class="form-control col-12">
          <br>
          <span class="text-danger" v-html="'輸入密碼錯誤' + password_err + '次'"></span>
        </div>
        <div class="col-4 fcc flex-wrap">
          <div class="w-100 mt-3 mb-3 fac">
            <input type="button" @click="password.push('1')" value="1" class="c_btn">
            <input type="button" @click="password.push('2')" value="1" class="c_btn">
            <input type="button" @click="password.push('3')" value="1" class="c_btn">
          </div>
          <div class="w-100 mt-3 mb-3 fac">
            <input type="button" @click="password.push('4')" value="1" class="c_btn">
            <input type="button" @click="password.push('5')" value="1" class="c_btn">
            <input type="button" @click="password.push('6')" value="1" class="c_btn">
          </div>
          <div class="w-100 mt-3 mb-3 fac">
            <input type="button" @click="password.push('7')" value="1" class="c_btn">
            <input type="button" @click="password.push('8')" value="1" class="c_btn">
            <input type="button" @click="password.push('9')" value="1" class="c_btn">
          </div>
          <div class="w-100 mt-3 mb-3 fac">
            <input type="button" value="1" class="c_btn" @click="password.shift()">
            <input type="button" @click="password.push('0')" value="BACK" class="c_btn">
            <input type="button" value="確定" class="c_btn">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiyiSkills_109_section2",
  data() {
    return {
      lock: false,
      mode: ["init", "idle", "card_in", "login", "password_err", "amount", "receipt", "card_out"],
      state: this.mode[0],
      account: "no card !!!",
      password: [],
      password_err: 0,
    }
  },
  props: {
    plist: Object,
    all_ports: Array,
    port: Object,
    projects: Array,
    rd: Object,
    tx: Object,
  },
  methods: {
    chose(site) {
      let index = this.selected.filter(e => {
        return e.site == site;
      })
      if(index.length >= 1) {
        this.selected = this.selected.filter(e => {
          return e.site != site;
        })
        return;
      }
      this.selected.push({
        lock: false,
        site: site
      });
    },
    enter() {

    },
    back() {
      // press back key
    }
  },
  watch: {
    rd: {
      handler (new_val, old_val) {
        // debug
        if(new_val.data != null) {
          console.log(new_val.data);
          let this_val = new_val.data;
          if(this_val[0] == 15)
            this.enter();
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>
  .c_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    border: #777 solid 1px;
    line-height: 1;
    font-size: 22px;
    width: 70px;
    height: 70px;
    background: transparent;
    border-radius: 50%;
  }
  .c_btn:focus {
    outline: none;
  }
</style>