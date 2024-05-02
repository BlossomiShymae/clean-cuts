<template>
  <div class="row">
      <div class="col-md-6 col-sm-12">
          <h1 class="display-4 mb-0">{{ skin.name }}</h1>
          <p class="text-muted border-bottom pb-3 border-light border-opacity-25 border-4">{{ skin.regionDescriptions[0].description }}</p>

          <div class="d-flex flex-wrap gap-3">
              <Badge name="identifier">{{ skin.id }}</Badge>
              <Badge name="star" v-if="skin.isLegacy"></Badge>
          </div>
      </div>

      <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img class="position-relative" :src="skin.getWardImage('latest')"/>
          <img class="position-absolute z-index--10" :src="skin.getWardShadowImage('latest')" />
      </div>
  </div>
</template>

<script setup lang="ts">
import { WardSkin } from '~/core/models';
import Badge from '../../../components/Badge.vue';
import useClient from '../../../composables/useClient';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();

const skins = await client.wardSkins.listAsync({locale: "default", version: "latest"});
const skin = skins.find((x) => x.id == id) || new WardSkin({});
</script>