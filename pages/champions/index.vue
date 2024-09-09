<template>
  <div class="d-flex flex-column gap-2">
      <h1>Champions</h1>

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
            <tr v-for="summary in summaries" :key="summary.id" style="position: relative;">
                <th scope="row">
                    <NuxtLink class="text-decoration-none text-light stretched-link" :to="`/champions/overview/${summary.id}`">
                        {{ summary.id }}
                    </NuxtLink>
                </th>
                <td>
                    <NuxtLink :to="`/champions/overview/${summary.id}`">
                        <img :src="summary.getIcon({locale: 'default', version: 'latest'})" width="32px" height="32px" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png'"/>
                    </NuxtLink>
                </td>
                <td>
                    <NuxtLink class="text-decoration-none text-light" :to="`/champions/overview/${summary.id}`">
                        {{ summary.name }}
                    </NuxtLink>
                </td>
            </tr>
          </tbody>
      </table>
      </div>
  </div>
</template>

<script setup lang="ts">
import useClient from '../../composables/useClient';
import useLocale from "../../composables/useLocale";

const { client } = useClient();
const { currentLocale } = useLocale();
const getSummaries = async () => (await client.championSummaries.listAsync({locale: currentLocale.value, version: "latest"}))
.filter((x) => x.id != -1);

const summaries = ref(await getSummaries());
watch(currentLocale, async () => {
    summaries.value = await getSummaries();
});
</script>