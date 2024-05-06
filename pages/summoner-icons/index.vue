<template>
  <div class="d-flex flex-column gap-2">
      <h1>Summoner Icons</h1>

      <div class="input-group">
        <input type="text" class="form-control bg-transparent border-light border-opacity-25" placeholder="Search" name="Search"
            v-model="query"/>
      </div>

      <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
        :on-first="p.first" :on-last="p.last"/>

      <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
          <table class="sortable table table-borderless">
              <thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Icon</th>
                      <th scope="col">Title</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="icon in p.pages[p.index.value]" :key="icon.id" style="position: relative;">
                        <th scope="row">
                            <NuxtLink class="text-decoration-none text-light stretched-link" :to="`/summoner-icons/overview/${icon.id}`">
                                {{ icon.id }}
                            </NuxtLink>
                        </th>
                        <td>
                            <NuxtLink class="text-decoration-none text-light" :to="`/summoner-icons/overview/${icon.id}`">
                                <img :src="icon.getImage('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png'"/>
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink class="text-decoration-none text-light" :to="`/summoner-icons/overview/${icon.id}`">
                                {{ icon.title }}
                            </NuxtLink>
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
import Pagination from '~/components/Pagination.vue';
import useClient from '../../composables/useClient';
import usePagination from '../../composables/usePagination';
import useIsNumeric from '../../composables/useIsNumeric';

const { client } = useClient();

const query = ref("")

const icons = (await client.summonerIcons.listAsync({locale: "default", version: "latest"}))
    .sort((a, b) => a.id - b.id);

const { isNumeric } = useIsNumeric();
const p = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = icons.filter((x) => x.id == parseInt(query.value, 10));
    else 
        filtered = icons.filter((x) => x.title.toLowerCase().includes(query.value.toLowerCase()));

    return usePagination(filtered, 100);
});
</script>