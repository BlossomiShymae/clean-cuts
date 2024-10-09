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
</script>

<template>
  <div class="d-flex flex-row flex-wrap gap-4 justify-content-center">
    <div v-for="summary in summaries" :id="`${summary.id}`" 
        style="width: 200px;"
        data-aos="zoom-out"
        data-aos-duration="500">
        <NuxtLink :to="`/champions/${summary.id}`">
            <div class="ratio ratio-16x9 position-relative">
                <img class="object-fit-cover rounded" 
                    :src="skins.find(x => (x.id / 1000) == summary.id)?.getTile({locale: currentLocale, version: 'latest'})"
                    loading="lazy"/>
                <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                    <div class="d-inline-flex justify-content-between align-items-center px-2" style="background: #0008;">
                        <span class="fs-5 fw-light">{{ summary.name }}</span>
                        <span class="fw-bold">{{ summary.id }}</span>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
    </div>
</template>