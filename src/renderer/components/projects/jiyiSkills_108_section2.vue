<template>
    <div id="app">
        <div class="container">
            <div class="row fcc">
                <div class="col-11">
                    <h2>自動點餐系統</h2>
                </div>
                <div class="col-1 fec">
                    <el-button icon="el-icon-refresh-right" circle></el-button>
                </div>
                <div class="col-12">
                    <hr>
                </div>
            </div>
            <div class="row" v-if="lock">
                <div class="col-12">
                    <h3 class="text-danger">disabled</h3>
                </div>
            </div>
            <div class="row fac" v-if="!lock">
                <div @click="eat_method = 0" class="col-sm-3 profile_frame">
                    <div class="profile" style="height: 115px;" :class="{'alert-warning': eat_method == 0}">
                        <i class="el-icon-upload2 text-secondary h1"></i>
                        <h4>
                            外帶 <br>
                            <span>就是帶走吃</span>
                        </h4>
                        <br>
                    </div>
                </div>

                <div @click="eat_method = 1" class="col-sm-3 profile_frame">
                    <div class="profile" :class="{'alert-warning': eat_method == 1}" style="height: 115px;">
                        <i class="el-icon-download text-secondary h1"></i>
                        <h4>
                            內用<br>
                            <span>就是內部吃</span>
                        </h4>
                        <br>
                    </div>
                </div>
                <transition name="fade">
                    <div class="col-6" v-if="eat_method == 1 && status == 'd'">
                        <div class="fac w-100">
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'A').length >= 1)}" @click="chose('A')" class="cube fcc">
                                <h2 class="text-secondary m-0">A</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'B').length >= 1)}" @click="chose('B')" class="cube fcc">
                                <h2 class="text-secondary m-0">B</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'C').length >= 1)}" @click="chose('C')" class="cube fcc">
                                <h2 class="text-secondary m-0">C</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'D').length >= 1)}" @click="chose('D')" class="cube fcc">
                                <h2 class="text-secondary m-0">D</h2>
                            </el-button>
                        </div>
                        <div class="fac w-100">
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'E').length >= 1)}" @click="chose('E')" class="cube fcc">
                                <h2 class="text-secondary m-0">E</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'F').length >= 1)}" @click="chose('F')" class="cube fcc">
                                <h2 class="text-secondary m-0">F</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'G').length >= 1)}" @click="chose('G')" class="cube fcc">
                                <h2 class="text-secondary m-0">G</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'H').length >= 1)}" @click="chose('H')" class="cube fcc">
                                <h2 class="text-secondary m-0">H</h2>
                            </el-button>
                        </div>
                        <div class="fac w-100">

                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'I').length >= 1)}" @click="chose('I')" class="cube fcc">
                                <h2 class="text-secondary m-0">I</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'J').length >= 1)}" @click="chose('J')" class="cube fcc">
                                <h2 class="text-secondary m-0">J</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'K').length >= 1)}" @click="chose('K')" class="cube fcc">
                                <h2 class="text-secondary m-0">K</h2>
                            </el-button>
                            <el-button :class="{'alert-warning': (selected.filter(e => e.site == 'L').length >= 1)}" @click="chose('L')" class="cube fcc">
                                <h2 class="text-secondary m-0">L</h2>
                            </el-button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jiyiSkills_108_section2",
        data() {
            return {
                lock: true,
                eat_method: null,
                selected: [],
                status: "b",
                state_plist: {
                    a: "初始狀態",
                    b: "待機狀態",
                    c: "選擇服務",
                    d: "選擇座位",
                    e: "選擇餐點",
                    f: "活動優惠",
                    g: "付款",
                    h: "完成"
                }
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
                // press enter key
                if(this.lock) {
                    this.lock = false;
                    this.status = "c";
                }else if(this.status == "c") {

                }else if(this.status == "d") {

                }
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
    .key_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px auto;
    }
    .key_row img {
        width: 15%;
    }
    .key_active {
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
    .cube {
        width: 100px;
        height: 100px;
        border-radius: 15px;
        border: 1px rgba(0, 0, 0, .1) solid;
        margin: 15px;
    }
    .el-button:focus {
        outline: none!important;
    }
    .profile {
        background-image: none;
    }
</style>