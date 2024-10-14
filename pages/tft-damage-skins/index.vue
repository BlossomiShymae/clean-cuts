<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getTftDamageSkins = async () => (await client.tftDamageSkins.listAsync({ locale: currentLocale.value, version: "latest"}))
  .sort((a, b) => a.itemId - b.itemId);

const tftDamageSkins = ref(await getTftDamageSkins());
watch(currentLocale, async() => {
  tftDamageSkins.value = await getTftDamageSkins();
});

const { query, results } = useQueryable(tftDamageSkins, (x) => x.itemId, (x) => x.name);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ tftDamageSkins.length }} TFT damage skins</span>
      </Card>
      <Search v-model="query"/>
    </div>

    <div class="d-flex flex-wrap gap-4 justify-content-center">
      <div style="width: 200px;" v-for="tftDamageSkin in results" :key="`${tftDamageSkin.itemId}`"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative trans-hover-grow">
          <LLazyImg class="rounded" img-class="rounded" :src="tftDamageSkin.getLoadoutsIcon({locale: currentLocale, version: 'latest'})"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-end bg-dark-gradient p-2">
              <span>{{ tftDamageSkin.name }}</span>
              <span>{{ tftDamageSkin.itemId }}</span>
            </div>
          </div>
          <div class="position-absolute z-2 d-flex flex-column justify-content-start align-items-end">
            <span class="rounded px-1 m-1" style="background: #0008; padding: 1px;">{{ tftDamageSkin.rarity }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center w-100">
      <BackToTopButton/>
    </div>
  </div>
</template>