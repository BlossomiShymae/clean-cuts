<template>
  <div class="d-flex flex-column gap-2">
      <h1>Summoner Icons</h1>

      <vc:search></vc:search>

      <vc:pagination path="/SummonerIcon" list="@Model.Icons.Pages"></vc:pagination>


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
                <tr v-for="icon in icons" :key="icon.id">
                        <th scope="row">
                            <NuxtLink class="text-decoration-none text-light" :to="`/summoner-icons/overview/${icon.id}`">
                                {{ icon.id }}
                            </NuxtLink>
                        </th>
                        <td>
                            <NuxtLink class="text-decoration-none text-light" :to="`/summoner-icons/overview/${icon.id}`">
                                <img :src="icon.getImage('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src='/img/error.png'"/>
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink class="text-decoration-none text-light" :to="`/summoner-icons/overview/${icon.id}`">
                                @icon.Title
                            </NuxtLink>
                        </td>
                </tr>
              </tbody>
          </table>
      </div>

      <vc:pagination path="/SummonerIcon" list="@Model.Icons.Pages"></vc:pagination>
  </div>
</template>

<script setup lang="ts">
import Pagination from '~/components/Pagination.vue';
import useClient from '../../composables/useClient';

const { client } = useClient();

const icons = await client.summonerIcons.listAsync({locale: "default", version: "latest"});
</script>