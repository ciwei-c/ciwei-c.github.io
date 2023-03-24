<template>
  <div style="width:100%;height:100%">
  	<iframe :src="src" frameborder="0" style="border:0;width:100%;height:100%"></iframe>
  </div>
</template>
<script>
  export default {
    props:{
      src:String
    },
    data(){
      return {}
    }
  }
</script>
<style lang="stylus" scoped>

</style>