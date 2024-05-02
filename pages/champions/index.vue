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
            <tr v-for="summary in summaries" :key="summary.id">
                <th scope="row">
                    <NuxtLink class="text-decoration-none text-light" :to="`/champions/overview/${summary.id}`">
                        {{ summary.id }}
                    </NuxtLink>
                </th>
                <td>
                    <NuxtLink :to="`/champions/overview/${summary.id}`">
                        <img :src="summary.getIcon({locale: 'default', version: 'latest'})" width="32px" height="32px" loading="lazy" onerror="this.onerror = null; this.src='/img/error.png'"/>
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

const { client } = useClient();

const summaries = await client.championSummaries.listAsync({locale: "default", version: "latest"});
</script>