
const isNumeric = (num: any) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num as number);

export default function useQueryablePagination<T>(iterable: Array<T>, pageSize: number, query: Ref<string>) {
  const pagination = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = iterable.filter((x: any) => x.id == parseInt(query.value, 10));
    else 
        filtered = iterable.filter((x) => x.title.toLowerCase().includes(query.value.toLowerCase()));

    return usePagination(icons, 100);
})

  return {
  
  }
}