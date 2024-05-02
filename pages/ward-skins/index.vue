<template>
  <div class="d-flex flex-column gap-2">
      <h1>Ward Skins</h1>

      <Pagination :pages="pages" :count="count" :index="index" :on-prev="prev" :on-next="next"
        :on-first="first" :on-last="last"/>
      
      <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
          <table class="sortable table table-borderless">
              <thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Icon</th>
                      <th scope="col">Name</th>
                  </tr>
              </thead>
              <tbody>
                      <tr v-for="skin in pages[index]" :key="skin.id">
                          <th scope="row">
                              <NuxtLink class="text-decoration-none text-light" :to="`/ward-skins/overview/${skin.id}`">
                                  {{ skin.id }}
                              </NuxtLink>
                          </th>
                          <td>
                              <NuxtLink class="text-decoration-none text-light" :to="`/ward-skins/overview/${skin.id}`">
                                  <img :src="skin.getWardImage('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src='/img/error.png'"/>
                              </NuxtLink>
                          </td>
                          <td>
                              <NuxtLink class="text-decoration-none text-light" :to="`/ward-skins/overview/${skin.id}`">
                                  {{ skin.name }}
                              </NuxtLink>
                          </td>
                      </tr>
              </tbody>
          </table>
      </div>

      <Pagination :pages="pages" :count="count" :index="index" :on-prev="prev" :on-next="next"
        :on-first="first" :on-last="last"/>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../../components/Pagination.vue';
import useClient from '../../composables/useClient';
import usePagination from '../../composables/usePagination';

const { client } = useClient();

const skins = await client.wardSkins.listAsync({locale: "default", version: "latest"});
const { count, pages, index, prev, next, first, last } = usePagination(skins, 100);
</script>