<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const onclick = () => {
  count.value += 1;
};
</script>

<template>
  <div>
    {{ count }}
  </div>
  <button @click="onclick">+1</button>
</template>



<style></style>
