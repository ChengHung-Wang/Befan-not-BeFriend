<template>
    <div id="app">
        <el-popover v-for="port_info in all_ports"
                placement="top-start"
                :title="port_info.path"
                width="220">
            <p v-html="port_info.manufacturer + ' ' + port_info.locationId"></p>
            <el-button slot="reference" class="cube">
                <i class="el-icon-cpu"></i>
                <h4 v-html="port_info.path"></h4>
            </el-button>
            <h4 style="margin: 0">baudRate</h4>
            <el-select v-model="plist.baudRate" filterable placeholder="baudRate">
                <el-option label="300" value="300"></el-option>
                <el-option label="600" value="600"></el-option>
                <el-option label="1200" value="1200"></el-option>
                <el-option label="1800" value="1800"></el-option>
                <el-option label="2400" value="2400"></el-option>
                <el-option label="4800" value="4800"></el-option>
                <el-option label="7200" value="7200"></el-option>
                <el-option label="9600" value="9600"></el-option>
                <el-option label="14400" value="14400"></el-option>
                <el-option label="19200" value="19200"></el-option>
                <el-option label="38400" value="38400"></el-option>
                <el-option label="57600" value="57600"></el-option>
                <el-option label="115200" value="115200"></el-option>
            </el-select>
            <h4 style="margin: 15px 0 0 0;">Data Length</h4>
            <el-input-number style="width: 100%;" v-model="plist.length"></el-input-number>
            <div style="text-align: right; margin-top: 15px">
                <el-button type="primary" icon="el-icon-check" @click="plist.driver = port_info.path;plist.selected = true;$emit('connectDriver')">確定</el-button>
            </div>
        </el-popover>
        <img :src="require('../assets/logo.png')" alt="">
    </div>
</template>

<script>
    export default {
        name: "PortSelect",
        props: {
            all_ports: Array,
            plist: Object
        }
    }
</script>

<style scoped>
    #app {
        position: fixed;
        left: 50%;
        flex-wrap: inherit;
        top: 45%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, .8);
        width: 60vw;
        height: 30vh;
        border: 1px rgba(255, 255, 255, 1);
        border-radius: 15px;
        backdrop-filter: blur(30px) saturate(180%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow-x: auto;
    }
    .cube {
        border: 1px white solid;
        border-radius: 30px;
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;
        width: 120px;
        height: 120px;
        margin: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 7.5px;
        background: transparent!important;
    }
    .cube:hover {
        box-shadow: 5px 5px 40px 1px rgba(0, 0, 0, 0.3);
        color: white;
        border: 1px white solid;
    }
    .cube h4 {
        color: white;
        margin: 15px 0 0 0;
    }
    i {
        color: white;
        font-size: 60px;
    }
    img {
        position: absolute;
        width: 20%;
        bottom: 15px;
    }
</style>