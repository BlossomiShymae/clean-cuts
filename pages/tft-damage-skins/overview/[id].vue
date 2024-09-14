<template>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <h1 class="display-4 pb-2 mb-3 border-bottom border-light border-opacity-25 border-4">{{ tftDamageSkin!.name }}</h1>

      <div class="d-flex flex-wrap gap-3 mb-3">
        <Badge label="Content ID:">{{ tftDamageSkin!.contentId }}</Badge>
        <Badge label="Item ID:">{{ tftDamageSkin!.itemId }}</Badge>
        <Badge label="Group ID:">{{ tftDamageSkin!.groupId }}</Badge>
      </div>
    </div>

    <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
      <img :src="tftDamageSkin!.getLoadoutsIcon('latest')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/components/Badge.vue';
import useClient from '~/composables/useClient';
import useLocale from '~/composables/useLocale';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getTftDamageSkins = async () => await client.tftDamageSkins.listAsync({ locale: currentLocale.value, version: "latest"});

const tftDamageSkins = ref(await getTftDamageSkins());
watch (currentLocale, async() => {
  tftDamageSkins.value = await getTftDamageSkins();
});

const tftDamageSkin = computed(() => tftDamageSkins.value.find((x) => x.itemId == id));
</script>