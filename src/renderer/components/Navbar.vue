<template>
    <div id="app">
        <el-row>
            <el-col :span="24">
                <el-menu
                    default-active="1"
                   @open="handleOpen"
                   @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-cpu"></i>
                            <span>
                                選擇設備
                                <span v-if="port != null" class="text-secondary" v-html="'(已選擇 - ' + plist.driver + ')'"></span>
                            </span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">COM Port</template>
                            <el-menu-item
                                    @click="$emit('connectDriver', port_info.path)"
                                    v-for="port_info in all_ports"
                                    v-html="port_info.path + ' ' + port_info.locationId">
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>



                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-cpu"></i>
                            <span>專案</span>
                        </template>
                        <el-menu-item-group>
                            <router-link v-for="project in projects" class="text-dark" :to="project.url">
                                <el-menu-item v-html="project.title"></el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>


                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <router-link slot="title" class="text-dark" to="/setting">設定</router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        },
        props: {
            plist: Object,
            all_ports: Array,
            port: Object,
            projects: Array
        }
    }
</script>

<style scoped>
    .el-col> ul {
        height: calc(100vh - 120px)
    }
</style>