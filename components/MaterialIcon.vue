<template>
  <svg :width="size" :height="size">
    <image :href="`https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/${name}.svg`"
      :width="size"
      :height="size"/>
  </svg>
</template>

<script setup lang="ts">
  defineProps<{
    name: string,
    size: number
  }>();
</script>


<style lang="scss" scoped>

</style>