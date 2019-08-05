<template>
    <ul class="artic-item-wrap">
        <li v-for="artic in artics">
            <span class="artic-date">{{artic.date}}</span>
            <h2>
                <router-link :to="`${path}${artic.file}`">{{artic.title}}</router-link>
            </h2>
        </li>
    </ul>
</template>
<script>
export default {
  name: "NavLayout",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    path: String
  },
  date() {
    return {
      artics: []
    };
  },
  created() {
    this.artics = this.data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  },
  methods: {
    moveToView(file) {
      this.$router.push({
        path: `${this.path}${file}`
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.artic-item-wrap {
    li {
        list-style: none;
        border-bottom: 1px solid #e6e6e6;
        padding: 20px;
        display: flex;
        align-items: flex-start;

        .artic-date {
            width: 120px;
            transform: translateY(-2%);
        }

        h2 {
            flex: 1;
            font-size: 18px;
            letter-spacing: 1px;
            border-bottom: none;
            margin: 0;

            a {
                color: #444;
            }

            a:hover {
                color: #3eaf7c;
            }
        }
    }
}
</style>