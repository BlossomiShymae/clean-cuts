<template>  
  <div class="d-flex flex-column gap-2">
    <h1>Loots</h1>

    <div class="btn-group flex-wrap gap-2">
      <a class="btn btn-outline-dark" @click="clearFilter()">
        <MaterialIcon name="backspace-outline" :size="24" />
      </a>
      <a class="btn btn-outline-dark text-light" v-for="category in categories" @click="applyFilter(category)">
        {{ category }}
      </a>
    </div>

    <div class="input-group">
      <input type="text" class="form-control bg-transparent border-light border-opacity-25" placeholder="Search" name="Search"
        v-model="query"/>
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
    :on-first="p.first" :on-last="p.last"/>

    <div class="d-flex flex-wrap justify-content-around gap-2">
      <div class="card bg-transparent bg-screen border-light border-opacity-25" style="max-width: 180px; width: 180px;"
        v-for="loot in p.pages[p.index.value]" :key="loot.id">
        <img :src="loot.getImage('latest')" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png';" />

        <div class="card-body d-flex flex-column justify-content-end">
          <h5>{{ loot.name }}</h5>
          <span class="small pb-2 mb-2">{{ loot.id }}</span>
            <img v-if="loot.rarity != 'Default'" :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-parties/global/default/${loot.rarity.toLowerCase()}_plating_big.png`" />
        </div>
      </div>
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
        :on-first="p.first" :on-last="p.last"/>
  </div>
</template>

<script setup lang="ts">
import MaterialIcon from '../../components/MaterialIcon.vue';
import Pagination from "../../components/Pagination.vue";
import useClient from '../../composables/useClient';
import useIsNumeric from "../../composables/useIsNumeric";
import usePagination from '../../composables/usePagination';

const { client } = useClient();

const query = ref("");
const filter = ref("");

const clearFilter = () => filter.value = "";
const applyFilter = (category: string) => filter.value = category;

// Alphanumerically sort by id, remove null entries
const loots = (await client.loots.listAsync({locale: "default", version: "latest"}))
  .sort((a, b) => a.id.localeCompare(b.id))
  .filter((x) => x.id != "");

const categories = new Set(loots.map((x) => x.type));

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  
  filtered = loots.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));
  if (filter.value != "")
    filtered = loots.filter((x) => x.type == filter.value);

  return usePagination(filtered, 100);
});
</script>