<script setup lang="ts">
import type { Skin } from '~/core/models';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale, data: champion } = await useLocalizedData(async (x) => await client.champions.getAsync(id as number, {locale: x, version: "latest"}));

const data = computed(() => `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champion.value.id}.json`);

const currentSkin = ref(champion.value.skins[0]);
const swapCurrentSkin = (id: number) => {
    currentSkin.value = champion.value.skins.find((x) => x.id == id) as Skin;
}
</script>

<template>
  <div>
    <Card class="mb-2 aos-fix" data-aos="fade-right" data-aos-duration="1000" style="z-index: 100 !important;">
      <div class="d-flex gap-4 flex-wrap align-items-center justify-content-center">
        <div style="min-width: 300px; max-width: 300px;">
            <div class="ratio ratio-4x3">
              <img class="object-fit-cover rounded" :src="currentSkin.getTile({locale: currentLocale, version: 'latest'})"/>
            </div>
            <div class="dropdown w-100">
              <button class="btn dropdown-toggle w-100 text-light" type="button" data-bs-toggle="dropdown">
                {{ currentSkin.name }} <span class="ms-2 fw-bold">ID: {{ currentSkin.id }}</span>
              </button>
              <ul class="dropdown-menu w-100 p-2">
                <li v-for="skin in champion.skins">
                  <button class="btn" type="button" @click="swapCurrentSkin(skin.id)">{{ skin.name }}</button>
                </li>
              </ul>
            </div>
        </div>
        <div class="flex-grow-1" style="width: 300px;">
          <h1 class="display-4 mb-0">{{ champion.name }}</h1>
          <h3 class="ms-4 text-light fw-light">{{ champion.title }}</h3>
          <p class="text-light">{{ champion.shortBio }}</p>
          <div class="d-flex flex-wrap gap-3 mb-3">
            <Badge label="ID">{{ champion.id }}</Badge>
            <Badge label="Key">{{ champion.alias }}</Badge>
            <Badge label="Total Skins">{{ champion.skins.length - 1 }}</Badge>
            <Badge label="Damage">{{ champion.playstyleInfo.damage }}</Badge>
            <Badge label="Durability">{{ champion.playstyleInfo.durability }}</Badge>
            <Badge label="Crowd Control">{{ champion.playstyleInfo.crowdControl }}</Badge>
            <Badge label="Mobility">{{ champion.playstyleInfo.mobility }}</Badge>
            <Badge label="Utility">{{ champion.playstyleInfo.utility }}</Badge>
          </div>
          <a :href="data" class="text-light text-decoration-none">Source: {{ data }}</a>
        </div>
      </div>
    </Card>

    <div class="list-group" data-aos="fade-left" data-aos-duration="1000">
      <div class="list-group-item d-flex gap-3 border-light border-opacity-25">
        <div style="min-width: 64px;">
          <div class="ratio ratio-1x1">
            <img :src="champion.passive.getAbilityIcon('latest')" class="rounded"/>
          </div>
        </div>
        <div>
          <h5 class="text-light"><span class="fw-bold me-2 text-uppercase">p</span> {{ champion.passive.name}}</h5>
          <small v-html="champion.passive.description"></small>
        </div>
      </div>
      <div class="list-group-item d-flex gap-3 border-light border-opacity-25"
          v-for="spell in champion.spells">
          <div style="min-width: 64px;">
            <div class="ratio ratio-1x1">
              <img :src="spell.getAbilityIcon('latest')" class="rounded"/>
            </div>
          </div>
          <div>
            <h5 class="text-light"><span class="fw-bold me-2 text-uppercase">{{ spell.spellKey }}</span> {{ spell.name }}</h5>
            <small v-html="spell.description"></small>
          </div>
      </div>
    </div>
  </div>
</template>