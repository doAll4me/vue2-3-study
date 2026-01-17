<template>
  <div>
    <header class="todo-header">
      <h1>小黑记事本</h1>
      <input
        v-model="name"
        placeholder="请输入任务"
        class="new-todo"
        @keyup.enter="addList"
      />
      <button class="add" @click="addList">添加任务</button>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addList() {
      if (this.name.trim() === "") {
        alert("请输入内容");
        return;
      }
      this.$emit("addList", this.name);
      this.name = "";
    },
  },
};
</script>

<style scoped>
#app .todo-header input {
  border: 2px solid rgba(175, 47, 47, 0.8);
  border-radius: 10px;
}

#app .add {
  position: absolute;
  right: 15px;
  top: 15px;
  height: 68px;
  width: 140px;
  text-align: center;
  background-color: rgba(175, 47, 47, 0.8);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0 10px 10px 0;
}

#app input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

#app input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

#app input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: gray;
}

#app h1 {
  position: absolute;
  top: -120px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.8);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
