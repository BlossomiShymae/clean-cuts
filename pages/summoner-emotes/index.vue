<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getEmotes = async () => (await client.summonerEmotes.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.id - b.id);

const query = ref("");

const emotes = ref(await getEmotes());
watch(currentLocale, async() => {
  emotes.value = await getEmotes();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
      filtered = emotes.value.filter((x) => x.id == parseInt(query.value, 10));
  else 
      filtered = emotes.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));

  return usePagination(filtered, 100);
})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ emotes.length }} summoner emotes</span>
      </Card>
      <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
        :on-first="p.first" :on-last="p.last" style="min-width: 300px;"/>
      <div class="input-group" style="max-width: 400px;">
        <input type="text" class="form-control border-light border-opacity-25" placeholder="Search" name="Search"
            v-model="query"/>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <div style="width: 200px;" v-for="summonerEmote in p.pages[p.index.value]"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative trans-hover-grow">
          <img class="app-backgroud rounded" :src="summonerEmote.getInventoryIcon('latest')" loading="lazy"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between bg-dark-gradient p-1 m-2 rounded-bottom">
              <span>{{ summonerEmote.name }}</span>
              <span>{{ summonerEmote.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100">
      <BackToTopButton/>
    </div>
  </div>
</template>