<template>
    <div class="artic-item-wrap">
        <div v-for="artic in data">
            <div v-if="artic.classify" class="artic-classify">{{artic.classify}} <span class="artic-subtitle">{{artic.subtitle}}</span></div>
            <div v-for="item in artic.data" class="artic-item" @click="moveToView(item.file)">
                <div>{{item.title}}</div>
            </div>
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
        padding: 5px 20px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #3eaf7c;
        transition:border-width 0.3s;
    }
    .artic-item:hover {
        cursor: pointer;
        color: #000;
    }
    .artic-classify {
        margin:10px 0 5px 0;
    }
    .artic-subtitle {
        color:#a8a8a8;
        font-size:12px;
    }
}

.artic-item-wrap:after {
    content: "";
    display: block;
    clear: both;
}
</style>