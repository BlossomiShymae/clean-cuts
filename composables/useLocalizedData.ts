export default async function useLocalizedData<T>(producer: (locale: string) => Promise<T>) {
  const { currentLocale } = useLocale();
  const data = ref(await producer(currentLocale.value));
  watch(currentLocale, async () => {
    data.value = await producer(currentLocale.value);
  });

  return {
    currentLocale,
    data
  };
}