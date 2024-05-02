<template>
  <div class="row">
      <div class="col-md-6 col-sm-12">
          <h1 class="display-4 mb-0">{{ icon.title }}</h1>
          <h4 class="ms-4 border-bottom border-light border-opacity-25 border-4 pb-2">{{ icon.yearReleased }}</h4>
          <div class="d-flex flex-wrap gap-2 mt-3 mb-3">
            <Badge name="identifier">{{ icon.id }}</Badge>
            <Badge name="star" v-if="icon.isLegacy"></Badge>
          </div>
          <p class="text-muted">{{ icon.descriptions[0].description }}</p>
      </div>

      <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img class="border rounded border-dark" :src="icon.getImage('latest')"/>
      </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/components/Badge.vue';
import { useRoute } from 'vue-router';
import useClient from '../../../composables/useClient';
import { SummonerIcon } from '~/core/models';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();

const icons = await client.summonerIcons.listAsync({locale: "default", version: "latest"});
const icon = icons.find((x) => x.id == id) || new SummonerIcon({});
</script>