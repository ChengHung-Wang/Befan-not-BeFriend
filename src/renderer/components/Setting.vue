<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <i class="el-icon-setting text-center h1"></i>
                    <h2 class="text-center">設定</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 profile_frame" v-for="option in options">
                    <div class="profile" style="height: 115px;">
                        <img :src="option.icon" alt="">
                        <h4 v-html="option.title + '<br><span>' + option.description + '</span>'"></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Setting',
        data() {
            return {
                options: [
                    {
                        title: "SerialPort",
                        description: "baudRate, Data Length",
                        icon: require("./setting_targets/serialport-logo-small.svg"),
                        click_action: null
                    },
                    {
                        title: "重置",
                        description: "重置所有設定，恢復至預設值",
                        icon: require("./setting_targets/reset.png"),
                        click_action: "reset"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>