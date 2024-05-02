export default function usePagination<T>(iterable: Array<T>, pageSize: number) {
  const length = Math.ceil(iterable.length / pageSize);
  const pages = Array.from({ length: length }, (v, k) => {
    return iterable.slice(k * pageSize, k * pageSize + pageSize);
  });
  const index = ref(0);

  const prev = () => {
    if (index.value - 1 < 0) return;
    index.value--;
  };
  const next = () => {
    if (index.value + 1 >= length) return;
    index.value++;
  };
  const first = () => {
    index.value = 0;
  };
  const last = () => {
    index.value = length - 1;
  };

  return {
    count: length,
    pages: pages,
    index: index,
    prev,
    next,
    first,
    last,
  };
}