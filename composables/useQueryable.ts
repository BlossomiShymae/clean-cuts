export default function useQueryable<T>(
  items: Ref<T[]>,
  idPredicate: (x: T) => number,
  namePredicate: (x: T) => string
) {
  const query = ref("");
  const { isNumeric } = useIsNumeric();

  const useResults = () => {
    let _results = [];
    if (isNumeric(items.value))
      _results = items.value.filter((x) => idPredicate(x) == parseInt(query.value, 10));
    else
      _results = items.value.filter((x) => namePredicate(x).toLocaleLowerCase().includes(query.value.toLocaleLowerCase()));
    return _results;
  }

  const results = computed(() => {
    return useResults();
  });

  const paginate = (count: number) => {
    return computed(() => {
      const results = useResults();
      return usePagination(results, count);
    })
  };

  return {
    query,
    results,
    paginate
  }
}