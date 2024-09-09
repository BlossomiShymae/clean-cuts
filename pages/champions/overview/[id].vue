<template>
  <div class="row">
      <div class="col-md-6 col-sm-12">
          <h1 class="display-4 mb-0">{{ champion.name }}</h1>
          <h3 class="ms-4 text-muted fw-light">{{ champion.title }}</h3>
          <p class="text-muted">{{ champion.shortBio }}</p>

          <div class="d-flex flex-wrap gap-3 mb-3">
            <Badge name="identifier">{{ champion.id }}</Badge>
            <Badge name="tag">{{ champion.alias }}</Badge>
            <Badge name="sword">{{ champion.playstyleInfo.damage }}</Badge>
            <Badge name="shield">{{ champion.playstyleInfo.durability }}</Badge>
            <Badge name="cancel">{{ champion.playstyleInfo.crowdControl }}</Badge>
            <Badge name="run">{{ champion.playstyleInfo.mobility }}</Badge>
            <Badge name="hammer-wrench">{{ champion.playstyleInfo.utility }}</Badge>
          </div>

          <div class="list-group bg-transparent">
            <div class="list-group-item bg-transparent bg-blur-4 border-light border-opacity-25"
                v-for="spell in champion.spells">
                <h5><span class="fw-light me-2">{{ spell.spellKey }}</span> {{ spell.name }}</h5>
                <small v-html="spell.description"></small>
            </div>
          </div>
      </div>

      <div class="col-md-6 col-sm-12">
          <div class="d-flex justify-content-between mb-2">
              <div style="min-height: 560px; min-width: 308px;" id="champion-loading-screen">
                  <img class="border border-light border-opacity-25 rounded" :src="currentSkin" loading="lazy" />
              </div>
              <div class="d-flex flex-row flex-wrap align-items-center gap-2 border-start border-5 border-light border-opacity-10 ms-0 ps-2">
                <button class="btn btn-dark flex-grow-1 border-light border-opacity-25 bg-transparent bg-blur-3"
                  v-for="skin in champion.skins" :key="skin.id" @click="swapLoadScreen(skin.id)">
                    {{ skin.name }}
                </button>
              </div>
          </div>

          <div class="bg-transparent bg-blur-4 border border-light border-opacity-25 p-3 rounded">
              <h5><span class="fw-light me-2">i</span> {{ champion.passive.name}}</h5>
              <small v-html="champion.passive.description"></small>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/components/Badge.vue';
import { useRoute } from 'vue-router';
import useClient from '../../../composables/useClient';
import useLocale from '~/composables/useLocale';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getChampion = async () => await client.champions.getAsync(id as number, {locale: currentLocale.value, version: "latest"});

const champion = ref(await getChampion());
watch(currentLocale, async () => {
  champion.value = await getChampion();
});

const currentSkin = ref(champion.value.skins[0].getLoadScreen('latest'));
const swapLoadScreen = (id: number) => {
    currentSkin.value = champion.value.skins.find((x) => x.id == id)?.getLoadScreen('latest') as string;
}
</script>