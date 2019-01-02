<template>
	<div class="img-container">
	    <img :src="src" alt="">
	</div>
</template>
<script>
export default {
    name: "ImgCon",
    data() {
        return {

        }
    },
    props:{
    	src:{
    		type:String,
    		default:""
    	}
    }
}
</script>
<style lang="stylus" scoped>
</style>