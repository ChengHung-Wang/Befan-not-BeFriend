<template>
    <div id="app">
        <div class="container">
            <div class="row fcc">
                <div class="col-10">
                    <h3>ATM 自動櫃員機</h3>
                </div>
                <div class="col-2 fec">
                    <span class="badge badge-pill" v-bind:class="[this.state != 'login' ? 'badge-warning' : 'badge-success']" v-html="this.state == 'login' ? '允許登入' : '不允許登入'"></span>
                </div>
                <div class="col-12">
                    <hr>
                </div>
                <div class="col-6">
                    <div class="password_input_frame flc flex-wrap">
                        <h5 class="w-100 mb-2">輸入密碼</h5>
                        <input type="text" v-model="password.join('')" class="password_input">
                    </div>
                </div>
                <div class="col-4">
                    <div class="key_row fac">
                        <input type="button" value="7" class="btn btn-secondary btn-lg" @click="password.push(7)">
                        <input type="button" value="8" class="btn btn-secondary btn-lg" @click="password.push(8)">
                        <input type="button" value="9" class="btn btn-secondary btn-lg" @click="password.push(9)">
                    </div>
                    <div class="key_row fac">
                        <input type="button" value="4" class="btn btn-secondary btn-lg" @click="password.push(4)">
                        <input type="button" value="5" class="btn btn-secondary btn-lg" @click="password.push(5)">
                        <input type="button" value="6" class="btn btn-secondary btn-lg" @click="password.push(6)">
                    </div>
                    <div class="key_row fac">
                        <input type="button" value="1" class="btn btn-secondary btn-lg" @click="password.push(1)">
                        <input type="button" value="2" class="btn btn-secondary btn-lg" @click="password.push(2)">
                        <input type="button" value="3" class="btn btn-secondary btn-lg" @click="password.push(3)">
                    </div>
                    <div class="key_row fac">
                        <input type="button" value="  " class="btn btn-secondary btn-lg">
                        <input type="button" value="0" class="btn btn-secondary btn-lg" @click="password.push(0)">
                        <input type="button" value="  " class="btn btn-secondary btn-lg">
                    </div>
                </div>
                <div class="col-2">
                    <div class="key_row fac">
                        <input type="button" class="w-100 btn-secondary btn-lg" @click="password = []" value="清除">
                    </div>
                    <div class="key_row fac">
                        <input type="button" class="w-100 btn-secondary btn-lg" @click="password.pop()" value="返回">
                    </div>
                    <div class="key_row fac">
                        <input type="button" class="w-100 btn-secondary btn-lg" @click="send_password()" value="送出">
                    </div>
                    <div class="key_row fac">
                        <input type="button" class="w-100 btn-secondary btn-lg" value="    ">
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <img :src="require('../../assets/logo.png')" alt="">
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>`
        </footer>
    </div>
</template>

<script>
    export default {
        name: "jiyiSkills_109_section2_1",
        data() {
            return {
                mode: ["init", "cardin", "login"],
                state: "",
                password: []
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
            send_password() {
                if(this.password.length != 5) {
                    alert("長度錯誤");
                    return;
                }
                this.$emit("write", this.password.join(""))
            },
            change_mode(mode_name) {
                let index = this.mode.indexOf(mode_name);
                if(index == -1)
                    return;
                this.state = this.mode[index];
            }
        },
        watch: {
            rd: {
                handler (new_val, old_val) {
                    // debug
                    if(new_val.data != null) {
                        console.log(new_val.data);
                        let this_val = new_val.data.toString();
                        let is_function = this_val.indexOf("!") != -1;
                        if(is_function) {
                            let this_function = this_val.split("").filter(e => e != "!").join("");
                            // !important function router
                            if (this_function == "login") {}
                                this.change_mode("login")
                        }
                    }
                },
                immediate: true,
                deep: true
            }
        }
    }
</script>

<style scoped>
    .password_input_frame {
        background: rgba(0, 0, 0, .6);
        width: 400px;
        height: 180px;
        border-radius: 15px;
        padding: 60px 30px 80px 30px;
        backdrop-filter: blur(30px) saturate(180%);
        color: white!important;
    }
    .password_input {
        background: rgba(255, 255, 255, .8);
        backdrop-filter: blur(30px) saturate(180%);
        color: #333;
        border-radius: 5px;
        padding: 5px 15px;
        border: 0 transparent solid;
        width: 370px;
    }
    .password_input:focus {
        outline: none;
    }
    .btn-lg {
        box-shadow: none;
        border: none;
    }
    .btn-lg:focus {
        background: #ffc107!important;
        border: none;
        color: white!important;
        outline: none;
        box-shadow: none;
    }
    .key_row {
        padding: 0 15px;
        margin: 15px;
    }
    footer {
        position: fixed;
        bottom: 0;
    }
    footer .col-4> img {
        width: 100%;
        margin-bottom: 30px
    }
</style>