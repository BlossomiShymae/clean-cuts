<script setup lang="ts">
const props = defineProps<{
  pagination: {
    count: number;
    pages: any[][];
    index: globalThis.Ref<number, number>;
    prev: () => void;
    next: () => void;
    first: () => void;
    last: () => void;
  }
}>();

const hasPrevCss = computed(() => { return !(props.pagination.index.value > 0) ? "disabled" : ""; });
const hasNextCss = computed(() => { return !(props.pagination.index.value < props.pagination.count - 1) ? "disabled" : "";})
</script>

<template>
  <div class="btn-group app-background" style="min-width: 300px;">
    <a :class="`btn btn-outline-secondary border-light border-opacity-25`"
      @click="pagination.first()">
      <MaterialIcon name="chevron-double-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 ${hasPrevCss}`"
      @click="pagination.prev()">
      <MaterialIcon name="chevron-left" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 text-light`">
      <span class="d-flex justify-content-center align-items-center h-100 w-100">{{ `${pagination.index.value + 1} / ${pagination.count}` }}</span>
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25 ${hasNextCss}`"
      @click="pagination.next()">
      <MaterialIcon name="chevron-right" :size="32" />
    </a>
    <a :class="`btn btn-outline-secondary border-light border-opacity-25`"
      @click="pagination.last()">
      <MaterialIcon name="chevron-double-right" :size="32" />
    </a>
  </div>
</template>