<template>
  <div class="MyTag">
    <input
      v-if="isEdit"
      v-focus
      @blur="isEdit = false"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      :value="value"
      @keyup.enter="changeValue"
    />
    <div v-else @dblclick="edit" class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  // 数据回显 :value
  props: {
    value: String,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    edit() {
      this.isEdit = true;
      // 封装为全局指令了
      // // 等Dom更新完了再获取焦点
      // this.$nextTick(() => {
      //   this.$refs.inp.focus();
      // });
    },

    // 修改标签内容
    changeValue(e) {
      // console.log(e.target.value);
      if (e.target.value.trim() === "") {
        return alert("请输入内容");
      }
      this.$emit("input", e.target.value);
      this.isEdit = false;
    },
  },
};
</script>

<style lang="less" scoped>
.MyTag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
