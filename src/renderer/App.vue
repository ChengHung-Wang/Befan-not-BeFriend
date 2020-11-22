<template>
  <div id="app">
    <el-container>
      <el-aside width="20%">
        <Navbar :all_ports="all_ports" :plist="plist" :port="port" :projects="projects" :rd="rd" :tx="tx"
                @connectDriver="connectDriver" @reset="reset">

        </Navbar>
      </el-aside>
      <el-container>
        <el-main>
          <router-view :all_ports="all_ports" :plist="plist" :port="port" :projects="projects" :rd="rd" :tx="tx"
                       @connectDriver="connectDriver" @reset="reset">

          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  const SerialPort = require('serialport');
  export default {
    name: 'befan_not_befriend',
    data() {
      return {
        all_ports: null,
        plist: {
          driver: null,
          baudRate: 9600,
          length: 1
        },
        // full projects
        projects: [
          {
            title: "108年 技藝競賽-數位電子(第二站)",
            url: "./project/108-2"
          },
          {
            title: "109年 技藝競賽-數位電子(公告)",
            url: "./project/109-2-public"
          },
          {
            title: "109年 技藝競賽-數位電子(模擬賽2-鶯歌)",
            url: "./project/109-2-visual2"
          }
        ],
        port: null,
        // rd and tx
        rd: {
          data: null,
          log: []
        },
        tx: {}
      }
    },
    async created() {
      await SerialPort.list().then(port => {
        this.all_ports = port;
      });
      await this.init();
    },
    components: {
      Navbar
    },
    methods: {
      reset() {
        localStorage.removeItem('selected_com');
      },
      init() {
        if(
          localStorage.getItem('selected_com') != null &&
          this.all_ports.filter(e => e.path == localStorage.getItem("selected_com")).length >= 1
        )
          this.connectDriver(localStorage.getItem('selected_com'));
      },
      async connectDriver(driver) {
        localStorage.setItem("selected_com", driver);
        if(this.plist.driver == driver)
          return;
        this.plist.driver = driver;
        this.port = await new SerialPort(this.plist.driver, this.plist).on("data", async e => {
          this.rd.data = await e;
          await this.rd.log.push({
            data: e,
            date: Date.now(),
            driver_info: this.plist
          });
        });
        setInterval(() => {

        })
      },
      async write(string, buffer = false) {
        if(buffer)
          this.port.write(Buffer.from(string));
        else
          this.port.write(string);
      }
    },
    watch: {
      rd: {
        handler (newV, oldV) {
          console.log(newV.data);
        },
        deep: true
      }
    }
  }
</script>

<style>
  /* CSS */
  * {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #app {
    margin-top: 30px;
  }
  .container {
    min-width: 80%;
  }
  .cet-windows, .titlebar {
    background: #fff!important;
    height: 60px!important;
    color: #333!important;
  }
  .window-title {
    font-size: 15px!important;
  }
  .titlebar> .window-appicon {
    width: 50px!important;
    height: 50px!important;
    background-size: 80% !important;
    margin-left: 5px!important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .card-left i {
    width: 80px;
    height: 80px;
    margin: 0;
    font-size: 60px;
    object-fit: cover;
  }


  .profile_frame{
    padding: 15px;
  }
  .profile{
    width: 100%;
    height: 100px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    display: flex;
    border-radius: 15px;
    align-items: center;
    box-shadow: 0 0 20px -5px rgba(100,100,100,0.5);
    padding: 15px;
  }
  .profile>img{
    border-radius: 50%;
    max-width: 80px;
    max-height: 80px;
    min-width: 80px;
    min-height: 80px;
    object-fit: cover;
    box-shadow: 0 0 40px -20px;
  }
  .profile>h4{
    color: #777;
    margin-left: 15px;
    margin-bottom: 0;
  }
  .profile>h4>span{
    color: #676767;
    font-size: 12px;
    font-weight: 400;
  }
  .profile>h4>.profile_link>a>span{
    font-size: 16px;
    color: #bfa67a;
  }
  .profile_link{
    display: flex;
    justify-content: space-between;
  }
  .fcc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fac {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .fbc {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fec {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .fsc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>
