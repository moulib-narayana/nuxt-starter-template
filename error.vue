<template>
  <button @click="handleError">Clear errors</button>
</template>

<script setup lang='ts'>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
