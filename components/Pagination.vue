<template>
  <div class="btn-group">
    <a :class="`btn btn-outline-dark`"
      @click="onFirst()">
      <MaterialIcon name="chevron-double-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-dark ${hasPrevCss}`"
      @click="onPrev()">
      <MaterialIcon name="chevron-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-dark text-light`">
      {{ `${index + 1} / ${count}` }}
    </a>
    <a :class="`btn btn-outline-dark ${hasNextCss}`"
      @click="onNext()">
      <MaterialIcon name="chevron-right" :size="32" />
    </a>
    <a :class="`btn btn-outline-dark `"
      @click="onLast()">
      <MaterialIcon name="chevron-double-right" :size="32" />
    </a>
  </div>
</template>

<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';

const props = defineProps<{
  index: number,
  pages: Array<any>,
  count: number,
  onPrev: () => void,
  onNext: () => void,
  onFirst: () => void,
  onLast: () => void,
}>();

const hasPrevCss = computed(() => { return !(props.index > 0) ? "disabled" : ""; });
const hasNextCss = computed(() => { return !(props.index < props.count - 1) ? "disabled" : "";})
</script>

<style lang="scss" scoped>

</style>