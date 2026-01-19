<script setup>
import { defineModel } from "vue";
//Vue3.3新特性
// 不用props和emit即可接受和修改父组件的值
const modelValue = defineModel();
</script>

<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="(e) => (modelValue = e.target.value)"
    />
  </div>
</template>
