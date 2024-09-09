<template>
  <div>
    <div class="row">
      <h1 class="display-4 mb-4">Settings</h1>
      <div class="d-flex flex-column justify-items-stretch gap-1">
        <div v-for="(value, key, index) in locales">
          <button class="btn border border-1 w-100" :class="{'btn-secondary': currentLocale == key}" @click="setLocale(key)" >
            {{ value }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLocale from "../composables/useLocale";

const { locales, currentLocale, setLocale } = useLocale();
</script>