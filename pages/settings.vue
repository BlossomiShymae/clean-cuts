<script setup lang="ts">
const { locales, currentLocale, setLocale } = useLocale();
</script>

<template>
  <div class="app-background p-4 rounded">
    <div class="d-flex flex-column justify-items-stretch gap-1">
      <div v-for="(value, key, index) in locales"
        data-aos="fade-right"
        data-aos-duration="500">
        <button class="btn border border-1 w-100" :class="{'btn-secondary': currentLocale == key}" @click="setLocale(key)" >
          {{ value }}
        </button>
      </div>
    </div>
  </div>
</template>