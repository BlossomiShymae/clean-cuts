<script setup lang="ts">
import { Loot } from '~/core/models';

const { client } = useClient();

const query = ref("");
const filter = ref("");

const { data: loots } = await useLocalizedData(async (x) => (await client.loots.listAsync({locale: x, version: "latest"}))
  .sort((a, b) => a.id.localeCompare(b.id))
  .filter((x) => x.id != ""));

const { data: summaries } = await useLocalizedData(async (x) => await client.championSummaries.listAsync({locale: x, version: "latest"}));

const clearFilter = () => filter.value = "";
const applyFilter = (category: string) => filter.value = category;

const categories = new Set(loots.value.map((x) => x.type));

const pagination = computed(() => {
  let filtered = [];
  
  filtered = loots.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));
  if (filter.value != "")
    filtered = loots.value.filter((x) => x.type == filter.value);

  return usePagination(filtered, 100);
});

const getLootImage = (loot: Loot) => {
  if (loot.type.includes('Statstone'))
    return summaries.value.find((x) => loot.name.toLowerCase().includes(x.name.toLowerCase()))?.getIcon({locale: "default", version: "latest"});

  return loot.getImage('latest');
}
</script>

<template>  
  <div class="d-flex flex-column gap-4">
    <div class="btn-group flex-wrap gap-2">
      <a class="btn btn-outline-dark" @click="clearFilter()">
        <MaterialIcon name="backspace-outline" :size="24" />
      </a>
      <a class="btn btn-outline-dark text-light" v-for="category in categories" @click="applyFilter(category)">
        {{ category }}
      </a>
    </div>

    <div class="d-flex justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ loots.length }} loots</span>
      </Card>
      <Pagination :pagination="pagination"/>
      <Search v-model="query"/>
    </div>

    <div class="d-flex flex-wrap justify-content-center gap-4">
      <div style="width: 225px;" v-for="loot in pagination.pages[pagination.index.value]" :key="`${loot.id}`"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative trans-hover-grow">
          <LLazyImg class="app-background rounded" img-class="rounded" :src="getLootImage(loot)" />
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-end bg-dark-gradient rounded p-2">
              <span>{{ loot.name }}</span>
              <span>{{ loot.id }}</span>
            </div>
          </div>
          <div class="position-absolute z-2 d-flex flex-column justify-content-start align-content-end">
            <div class="d-inline-flex justify-content-end m-1">
              <span class="rounded px-1" style="background: #0008; padding: 1px;">{{ loot.type }}</span>
              <span v-if="loot.rarity != 'Default'" class="rounded px-1 ms-1" style="background: #0008; padding: 1px;">{{ loot.rarity }}</span>
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