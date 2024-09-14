<template>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <h1 class="display-4 pb-2 mb-3 border-bottom border-light border-opacity-25 border-4">{{ tftMapSkin.name }}</h1>

      <div class="d-flex flex-wrap gap-3 mb-3">
        <Badge label="Content ID:">{{ tftMapSkin.contentId }}</Badge>
        <Badge label="Item ID:">{{ tftMapSkin.itemId }}</Badge>
        <Badge label="Group Name:">{{ tftMapSkin.groupName }}</Badge>
        <Badge label="Group ID:">{{ tftMapSkin.groupId }}</Badge>
      </div>
    </div>

    <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
      <img :src="tftMapSkin.getLoadoutsIcon('latest')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/components/Badge.vue';
import useClient from '~/composables/useClient';
import useLocale from '~/composables/useLocale';
import { TftMapSkin } from '~/core/models';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getTftMapSkins = async () => await client.tftMapSkins.listAsync({ locale: currentLocale.value, version: "latest"});

const tftMapSkins = ref(await getTftMapSkins());
watch(currentLocale, async() => {
  tftMapSkins.value = await getTftMapSkins();
});

const tftMapSkin = computed(() => tftMapSkins.value.find((x) => x.itemId == id) || new TftMapSkin({}));
</script>