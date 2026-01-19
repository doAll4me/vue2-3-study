<script setup>
import Son1Com from "@/components/Son1Com.vue";
import Son2Com from "@/components/Son2Com.vue";
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
import { useChannelStore } from "./store/channel";
const counterStore = useCounterStore();
const channelStore = useChannelStore();

// 此时，直接解构，不处理，数据会丢失响应式
// 因为state是一个用reactive包装的对象，但解构时会丢失他的响应式属性
// 等于 const count=counterStore.state.count
//        const msg=counterStore.state.msg
// const { count, msg } = counterStore

// 利用storeToRefs解构可以保持数据响应式
const { count, msg } = storeToRefs(counterStore);
const { channelList } = storeToRefs(channelStore);
// 但是actions方法可以直接解构
const { getList } = channelStore;
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ count }} - {{ msg }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr />
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
