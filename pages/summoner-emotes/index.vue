<script setup lang="ts">
const { client } = useClient();

const { data: emotes } = await useLocalizedData(async (x) => (await client.summonerEmotes.listAsync({locale: x, version: "latest"}))
.sort((a, b) => a.id - b.id));

const { query, paginate } = useQueryable(emotes, (x) => x.id, (x) => x.name);
const pagination = paginate(100);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ emotes.length }} summoner emotes</span>
      </Card>
      <Pagination :pagination="pagination"/>
      <Search v-model="query"/>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <div style="width: 200px;" v-for="summonerEmote in pagination.pages[pagination.index.value]" :key="`${summonerEmote.id}`"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative trans-hover-grow">
          <LLazyImg class="app-background rounded" :src="summonerEmote.getInventoryIcon('latest')"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between bg-dark-gradient p-2 rounded-bottom">
              <span>{{ summonerEmote.name }}</span>
              <span class="fw-bold">{{ summonerEmote.id }}</span>
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