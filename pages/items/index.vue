<template>
  <div class="d-flex flex-column gap-2">
      <h1>Items</h1>

      <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
          <table class="sortable table table-borderless">
              <thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Icon</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id" style="position: relative;">
                    <th scope="row">
                        <NuxtLink class="text-decoration-none text-light stretched-link" :to="`/items/overview/${item.id}`">
                            {{ item.id }}
                        </NuxtLink>
                    </th>
                    <td>
                        <NuxtLink class="text-decoration-none text-light" :to="`/items/overview/${item.id}`">
                            <img class="rounded" :src="item.getIcon('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src = '/clean-cuts/img/error.png'"/>
                        </NuxtLink>
                    </td>
                    <td>
                        <NuxtLink class="text-decoration-none text-light" :to="`/items/overview/${item.id}`">
                            <span v-html="item.name"></span>
                        </NuxtLink>
                    </td>
                    <td>
                        <NuxtLink class="text-decoration-none text-light" :to="`/items/overview/${item.id}`">
                            {{ item.priceTotal }}
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
const items = await client.items.listAsync({ locale: "default", version: "latest"});
</script>