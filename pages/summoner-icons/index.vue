<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getIcons = async () => (await client.summonerIcons.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.id - b.id);

const query = ref("")

const icons = ref(await getIcons());
watch(currentLocale, async() => {
    icons.value = await getIcons();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = icons.value.filter((x) => x.id == parseInt(query.value, 10));
    else 
        filtered = icons.value.filter((x) => x.title.toLowerCase().includes(query.value.toLowerCase()));

    return usePagination(filtered, 100);
});
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-wrap justify-content-end gap-2">
        <Card class="d-flex justify-content-center align-items-center me-auto">
            <span>{{ icons.length }} summoner icons</span>
        </Card>
        <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
            :on-first="p.first" :on-last="p.last" style="min-width: 300px;"/>
        <div class="input-group" style="max-width: 400px;">
            <input type="text" class="form-control border-light border-opacity-25" placeholder="Search" name="Search"
                v-model="query"/>
        </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center gap-4">
        <div style="width: 200px;" v-for="summonerIcon in p.pages[p.index.value]"
            data-aos="zoom-out"
            data-aos-duration="500">
            <div class="ratio ratio-1x1 position-relative">
                <img :src="summonerIcon.getImage('latest')" loading="lazy" class="rounded"/>
                <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                    <div class="d-inline-flex justify-content-between align-items-end bg-dark-gradient rounded-bottom p-2">
                        <span>{{ summonerIcon.title }}</span>
                        <span class="fw-bold">{{ summonerIcon.id }}</span>
                    </div>
                </div>
                <div class="position-absolute z-2 d-flex flex-column justify-content-start align-items-end">
                    <div class="d-inline-flex justify-content-end gap-1 m-1">
                        <span style="background: #0008; padding: 1px;" class="px-1 rounded">{{ summonerIcon.yearReleased }}</span>
                        <span v-if="summonerIcon.isLegacy" class="px-1 rounded" style="background: #0008; padding: 1px;">{{ summonerIcon.isLegacy }}</span>
                        <span v-if="summonerIcon.rarities && summonerIcon.rarities.length > 0 && summonerIcon.rarities[0].rarity != '0'" class="px-1 rounded" style="background: #0008; padding: 1px;">{{ summonerIcon.rarities[0].rarity }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>