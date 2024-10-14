<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getSummaries = async () => (await client.championSummaries.listAsync({locale: currentLocale.value, version: "latest"}))
    .filter((x) => x.id != -1) // Remove placeholder champion
    .sort((a, b) => a.name.localeCompare(b.name));
const getSkins = async () => await client.skins.listAsync({locale: currentLocale.value, version: "latest"});

const summaries = ref(await getSummaries());
const skins = ref(await getSkins());
watch(currentLocale, async () => {
    summaries.value = await getSummaries();
    skins.value = await getSkins();
});

const { query, results } = useQueryable(summaries, (x) => x.id, (x) => x.name);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-end gap-2">
        <Card class="d-flex justify-content-center align-items-center me-auto">
            <span>{{ summaries.length }} champions</span> 
        </Card>
        <Search v-model="query"/>
    </div>
    <div class="d-flex flex-row flex-wrap gap-4 justify-content-center">
        <div v-for="summary in results" :key="`${summary.id}`" 
            style="width: 200px;"
            data-aos="zoom-out"
            data-aos-duration="500">
            <NuxtLink :to="`/champions/${summary.id}`">
                <div class="ratio ratio-16x9 position-relative trans-hover-grow">
                    <LLazyImg class="object-fit-cover rounded" img-class="object-fit-cover rounded" :src="skins.find(x => (x.id / 1000) == summary.id)?.getTile({locale: currentLocale, version: 'latest'})"/>
                    <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                        <div class="d-inline-flex justify-content-between align-items-center px-2 bg-dark-gradient rounded-bottom">
                            <span class="fs-5 fw-light">{{ summary.name }}</span>
                            <span class="fw-bold">{{ summary.id }}</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div class="d-flex justify-content-center w-100">
        <BackToTopButton/>
    </div>
  </div>
</template>