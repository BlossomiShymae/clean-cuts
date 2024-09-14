<template>
  <div class="d-flex flex-column gap-2">
    <h1 class="mb-3">TFT Damage Skins</h1>

    <div class="input-group">
      <input type="text" class="form-control bg-transparent border-light border-opacity-25" placeholder="Search" name="Search"
        v-model="query"/>
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
    :on-first="p.first" :on-last="p.last"/>

    <div class="d-flex flex-wrap justify-content-around gap-2">
      <div class="card bg-tranparent bg-screen border-light border-opacity-25" style="max-width: 140px; width: 140px;"
        v-for="tftDamageSkin in p.pages[p.index.value]" :key="tftDamageSkin.itemId">
        <img :src="tftDamageSkin.getLoadoutsIcon('latest')" loading="lazy" onerror="this.onerror = null; this.src='/clean-cuts/img/error.png';" />

        <div class="card-body d-flex flex-column justify-content-end">
          <h5 class="card-title">{{ tftDamageSkin.name }}</h5>
          <Badge name="identifier">{{ tftDamageSkin.itemId }}</Badge>
        </div>
      </div>
    </div>

    <Pagination :pages="p.pages" :count="p.count" :index="p.index.value" :on-prev="p.prev" :on-next="p.next"
    :on-first="p.first" :on-last="p.last"/>
  </div>
</template>

<script setup lang="ts">
import Pagination from '~/components/Pagination.vue';
import Badge from '~/components/Badge.vue';
import useClient from '~/composables/useClient';
import useLocale from '~/composables/useLocale';
import useIsNumeric from '~/composables/useIsNumeric';
import usePagination from '~/composables/usePagination';

const { client } = useClient();
const { currentLocale } = useLocale();
const getTftDamageSkins = async () => (await client.tftDamageSkins.listAsync({ locale: currentLocale.value, version: "latest"}));

const query = ref("");

const tftDamageSkins = ref(await getTftDamageSkins());
watch(currentLocale, async() => {
  tftDamageSkins.value = await getTftDamageSkins();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
    filtered = tftDamageSkins.value.filter((x) => x.itemId == parseInt(query.value));
  else
    filtered = tftDamageSkins.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));
  return usePagination(filtered, 24);
})
</script>