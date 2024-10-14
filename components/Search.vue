<script setup lang="ts">
const model = defineModel();
</script>

<template>
  <div class="input-group" style="max-width: 400px;">
    <input type="text" class="form-control border-light border-opacity-25"
      placeholder="Search" name="Search" v-model="model" />
  </div>
</template>