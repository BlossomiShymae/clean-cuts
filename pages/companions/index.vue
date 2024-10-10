<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getCompanions = async () => (await client.companions.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.itemId - b.itemId);

const query = ref("");

const companions = ref(await getCompanions());
watch(currentLocale, async() => {
  companions.value = await getCompanions();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
    filtered = companions.value.filter((x) => x.itemId == parseInt(query.value, 10));
  else
    filtered = companions.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));

  return usePagination(filtered, 100);
})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-wrap gap-2 justify-content-end">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ companions.length }} companions</span>
      </Card>

      <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
        :on-first="p.first" :on-last="p.last" style="min-width: 300px;"/>

      <div class="input-group" style="max-width: 400px;">
        <input type="text" class="form-control border-light border-opacity-25"
          placeholder="Search" name="Search" v-model="query" />
      </div>
    </div>

    <div class="d-flex flex-row flex-wrap justify-content-center gap-4">
      <div style="width: 350px;" v-for="companion in p.pages[p.index.value]"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-16x9 position-relative">
          <img class="object-fit-cover rounded" :src="companion.getLoadoutsIcon('latest')" loading="lazy" />
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-center p-2 bg-dark-gradient rounded">
              <span class="fs-6">{{ companion.name }}</span>
              <span class="fw-bold">{{ companion.itemId }}</span>
            </div>
          </div>
          <div class="position-absolute z-2 d-flex flex-column justify-content-start align-items-end">
            <span v-if="companion.rarity != 'Default'" class="rounded px-1 m-1" style="background: #0008; padding: 1px;">{{ companion.rarity }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>