<template>
  <div class="app">
    <!-- <BaseSelect :selectId="selectId" @handleChange="handleChange"></BaseSelect> -->
    <BaseSelect
      :selectId="selectId"
      @handleChange="selectId = $event"
    ></BaseSelect>
    <!--也可以直接这样写，不用额外封装函数 -->
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    // handleChange(e) {
    //   console.log(e);
    //   this.selectId = e;
    // },
  },
};
</script>

<style></style>
