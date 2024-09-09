<template>
  <div class="d-flex flex-column gap-2">
      <h1>Ward Skins</h1>

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
                      <th scope="col">Name</th>
                  </tr>
              </thead>
              <tbody>
                      <tr v-for="skin in p.pages[p.index.value]" :key="skin.id" style="position: relative;">
                          <th scope="row">
                              <NuxtLink class="text-decoration-none text-light stretched-link" :to="`/ward-skins/overview/${skin.id}`">
                                  {{ skin.id }}
                              </NuxtLink>
                          </th>
                          <td>
                              <NuxtLink class="text-decoration-none text-light" :to="`/ward-skins/overview/${skin.id}`">
                                  <img :src="skin.getWardImage('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png'"/>
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

      <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
        :on-first="p.first" :on-last="p.last"/>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../../components/Pagination.vue';
import useClient from '../../composables/useClient';
import useLocale from '~/composables/useLocale';
import useIsNumeric from '../../composables/useIsNumeric';
import usePagination from '../../composables/usePagination';

const { client } = useClient();
const { currentLocale } = useLocale();
const getSkins = async () => await client.wardSkins.listAsync({locale: currentLocale.value, version: "latest"});

const query = ref("");

const skins = ref(await getSkins());
watch(currentLocale, async() => {
    skins.value = await getSkins();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = skins.value.filter((x) => x.id == parseInt(query.value, 10));
    else 
        filtered = skins.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));

    return usePagination(filtered, 100);
});
</script>