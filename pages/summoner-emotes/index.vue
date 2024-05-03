<template>
  <div class="d-flex flex-column gap-2">
      <h1 class="mb-3">Summoner Emotes</h1>

      <Pagination :pages="pages" :count="count" :index="index" :on-prev="prev" :on-next="next"
        :on-first="first" :on-last="last"/>

      <div class="d-flex flex-wrap justify-content-around gap-2">
        <div class="card bg-transparent bg-screen border-light border-opacity-25" style="max-width: 140px; width: 140px;"
            v-for="emote in pages[index]" :key="emote.id">
            <img :src="emote.getInventoryIcon('latest')" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png';" />

            <div class="card-body d-flex flex-column justify-content-end">
                <h5 class="card-title">{{ emote.name }}</h5>
                <Badge name="identifier">{{ emote.id }}</Badge>
            </div>
        </div>
      </div>

      <Pagination :pages="pages" :count="count" :index="index" :on-prev="prev" :on-next="next"
        :on-first="first" :on-last="last"/>
  </div>
</template>

<script setup lang="ts">
import Pagination from '../../components/Pagination.vue';
import Badge from '~/components/Badge.vue';
import useClient from '../../composables/useClient';
import usePagination from '../../composables/usePagination';

const { client } = useClient();;

const emotes = (await client.summonerEmotes.listAsync({locale: "default", version: "latest"}))
  .sort((a, b) => a.id - b.id);
const { count, pages, index, prev, next, first, last } = usePagination(emotes, 24);
</script>