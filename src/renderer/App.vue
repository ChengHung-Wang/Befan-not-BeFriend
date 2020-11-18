<template>
  <div id="app">
    <router-view>

    </router-view>
    <transition name="fade">
      <PortSelect
              v-if="all_ports != null && all_ports != undefined && !plist.selected"
              :all_ports="all_ports" :plist="plist"
              @connectDriver="connectDriver"
      >
        <!--   port select option component   -->
      </PortSelect>
    </transition>
  </div>
</template>
<style>
  body {
    background: #333;
  }
</style>
<script>
  import PortSelect from "./components/PortSelect";
  const SerialPort = require('serialport');
  export default {
    name: 'befan_not_befriend',
    data() {
      return {
        all_ports: null,
        plist: {
          driver: null,
          baudRate: 9600,
          length: 1,
          selected: false
        },
        port: null,
        rd: {
          data: null,
          log: []
        },
        tx: {
          data: null,
          log: []
        }
      }
    },
    async created() {
      await SerialPort.list().then(port => {
        this.all_ports = port;
      });
    },
    components: {
      PortSelect
    },
    methods: {
      async connectDriver() {
        if(this.plist.selected) {
          this.port = await new SerialPort(this.plist.driver, this.plist).on("data", async e => {
            await this.rd.log.push({
              data: e,
              date: Date.now(),
              driver_info: this.plist
            });
            this.rd.data = this.plist.length == 1 ? e[0] : e;
            this.rd = JSON.parse(JSON.stringify(this.rd));
          })
        }
      }
    },
    watch: {
      rd() {
        console.log(this.rd.data);
      }
    }
  }
</script>

<style>
  /* CSS */
  * {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
