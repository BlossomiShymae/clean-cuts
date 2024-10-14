<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getCompanions = async () => (await client.companions.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.itemId - b.itemId);

const companions = ref(await getCompanions());
watch(currentLocale, async() => {
  companions.value = await getCompanions();
});

const { query, paginate } = useQueryable(companions, (x) => x.itemId, (x) => x.name);
const pagination = paginate(100);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-wrap gap-2 justify-content-end">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ companions.length }} companions</span>
      </Card>
      <Pagination :pagination="pagination"/>
      <Search v-model="query"/>
    </div>

    <div class="d-flex flex-row flex-wrap justify-content-center gap-4">
      <div style="width: 350px;" v-for="companion in pagination.pages[pagination.index.value]" :key="companion.itemId"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-16x9 position-relative trans-hover-grow">
          <LLazyImg class="object-fit-cover rounded" img-class="object-fit-cover rounded" :src="companion.getLoadoutsIcon('latest')" />
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

    <div class="d-flex justify-content-center w-100">
      <BackToTopButton/>
    </div>
  </div>
</template>