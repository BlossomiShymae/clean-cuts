<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getTftMapSkins = async () => (await client.tftMapSkins.listAsync({ locale: currentLocale.value, version: "latest"}))
  .sort((a, b) => a.itemId - b.itemId);

const query = ref("");

const tftMapSkins = ref(await getTftMapSkins());
watch(currentLocale, async() => {
  tftMapSkins.value = await getTftMapSkins();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
    filtered = tftMapSkins.value.filter((x) => x.itemId == parseInt(query.value));
  else
    filtered = tftMapSkins.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));
  return filtered;
})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-wrap justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ tftMapSkins.length }} TFT map skins</span>
      </Card>
      <div class="input-group" style="max-width: 400px;">
        <input type="text" class="form-control bg-transparent border-light border-opacity-25" placeholder="Search" name="Search"
          v-model="query"/>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <div style="width: 350px;" v-for="tftMapSkin in tftMapSkins" :id="`${tftMapSkin.itemId}`"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-4x3 position-relative">
          <img class="object-fit-cover rounded" :src="tftMapSkin.getLoadoutsIcon('latest')" loading="lazy"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-end bg-dark-gradient p-2 rounded">
              <div class="d-flex flex-column">
                <span>{{ tftMapSkin.name }}</span>
                <span class="text-muted">{{ tftMapSkin.groupName }}</span>
              </div>
              <span>{{ tftMapSkin.itemId }}</span>
            </div>
          </div>
          <div class="position-absolute z-2 d-flex flex-column justify-content-start align-items-end">
            <span v-if="tftMapSkin.rarity != 'Default'" class="rounded px-1 m-1" style="background: #0008; padding: 1px;">{{ tftMapSkin.rarity }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100">
      <BackToTopButton/>
    </div>
  </div>
</template>