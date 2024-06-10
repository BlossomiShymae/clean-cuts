<template>
  <div class="d-flex flex-column gap-2">
    <h1>Companions</h1>

    <div class="input-group">
      <input type="text" class="form-control bg-transparent border-light border-opacity-25"
        placeholder="Search" name="Search" v-model="query" />
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
      :on-first="p.first" :on-last="p.last"/>

    <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
      <table class="sortable table table-borderless">
        <thead>
          <tr>
            <th scope="col">Item Id</th>
            <th scope="col">Icon</th>
            <th scope="col">Name</th>
            <th scope="col">Species ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="companion in p.pages[p.index.value]" :key="companion.contentId" style="position: relative;">
            <td scope="row">
              <NuxtLink class="text-decoration-none text-light stretched-link" :to="`/companions/overview/${companion.contentId}`">
                {{ companion.itemId }}
              </NuxtLink>
            </td>
            <td>
              <img :src="companion.getLoadoutsIcon('latest')" height="48px" loading="lazy"
              onerror="this.onerror = null; this.src='/clean-cuts/img/error.png'" />
            </td>
            <td>
              {{ companion.name }}
            </td>
            <td>
              {{ companion.speciesId }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
      :on-first="p.first" :on-last="p.last"/>
  </div>
</template>

<script setup lang="ts">
import Pagination from "../../components/Pagination.vue";
import useClient from "../../composables/useClient";
import useIsNumeric from "../../composables/useIsNumeric";
import usePagination from "../../composables/usePagination";

const { client } = useClient();

const query = ref("");

const companions = (await client.companions.listAsync({locale: "default", version: "latest"}))
  .sort((a, b) => a.itemId - b.itemId);

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
    filtered = companions.filter((x) => x.itemId == parseInt(query.value, 10));
  else
    filtered = companions.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));

  return usePagination(filtered, 100);
})
</script>