<template>
    <div class="artic-item-wrap">
        <div v-for="item in data" class="artic-item" @click="moveToView(item.file)">
            <div>{{item.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavLayout",
    props: {
        data: Array,
        path: String
    },
    methods: {
        moveToView(file) {
            this.$router.push({
                path: `${this.path}${file}`
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.artic-item-wrap {
    .artic-item {
        padding: 5px 10px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #3eaf7c;
        transition:border-width 0.3s;
    }
    .artic-item:hover {
        cursor: pointer;
        // border-left:5px solid #3eaf7c;
        color: #000;
    }
}

.artic-item-wrap:after {
    content: "";
    display: block;
    clear: both;
}
</style>