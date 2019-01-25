<template>
  <svg class="svg-icon" aria-hidden="true" :class="iconClass" :width="width" :height="height" :fill="color">
    <use :xlink:href="`#${iconClass}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'svgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  created() {
    require(`@/assets/svgicon/${this.icon}.svg`)
  },
  computed: {
    iconClass() {
      return `icon-${this.icon}`
    }
  }
}

</script>
<style>
.svg-icon {
  overflow: hidden;
}
</style>
