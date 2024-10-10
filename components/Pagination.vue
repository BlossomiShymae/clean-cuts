<script setup lang="ts">
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

<template>
  <div class="btn-group app-background">
    <a :class="`btn btn-outline-secondary border-light border-opacity-25`"
      @click="onFirst()">
      <MaterialIcon name="chevron-double-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 ${hasPrevCss}`"
      @click="onPrev()">
      <MaterialIcon name="chevron-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 text-light`">
      <span class="d-flex justify-content-center align-items-center h-100 w-100">{{ `${index + 1} / ${count}` }}</span>
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 ${hasNextCss}`"
      @click="onNext()">
      <MaterialIcon name="chevron-right" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25`"
      @click="onLast()">
      <MaterialIcon name="chevron-double-right" :size="32" />
    </a>
  </div>
</template>