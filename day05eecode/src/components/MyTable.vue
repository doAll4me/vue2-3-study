<template>
  <table class="MyTable">
    <thead>
      <tr>
        <!-- 表头自定义——设置插槽 -->
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <!-- 表主体自定义——设置插槽 -->
        <slot name="body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import MyTag from "./MyTag.vue";
export default {
  props: {
    data: Array,
  },
  components: {
    // MyTag,
  },
  data() {
    return {
      temp: "水杯",
    };
  },
};
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }

  .MyTable {
    width: 100%;
    border-spacing: 0;
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      vertical-align: middle;
    }
    th {
      background: #f5f5f5;
      border-bottom: 2px solid #069;
    }
    td {
      border-bottom: 1px dashed #ccc;
    }
    td,
    th {
      text-align: center;
      padding: 10px;
      transition: all 0.5s;
      &.red {
        color: red;
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
}
</style>
