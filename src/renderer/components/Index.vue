<template>
  <div id="app">
    <h1>blabla</h1>
  </div>
</template>
<style>
  .item {
    margin-right: 40px;
  }
</style>
<script>
  export default {
    name: "Index",
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>