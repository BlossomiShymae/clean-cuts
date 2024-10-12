<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getSkins = async () => await client.wardSkins.listAsync({locale: currentLocale.value, version: "latest"});

const query = ref("");

const skins = ref(await getSkins());
watch(currentLocale, async() => {
    skins.value = await getSkins();
});

const { isNumeric } = useIsNumeric();
const p = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = skins.value.filter((x) => x.id == parseInt(query.value, 10));
    else 
        filtered = skins.value.filter((x) => x.name.toLowerCase().includes(query.value.toLowerCase()));

    return filtered;
});
</script>

<template>
  <div class="d-flex flex-column gap-4">
      <div class="d-flex gap-2 justify-content-end">
        <Card class="d-flex justify-content-center align-items-center me-auto">
            <span>{{ skins.length }} skins</span>
        </Card>
        <div class="input-group" style="max-width: 400px;">
            <input type="text" class="form-control border-light border-opacity-25" placeholder="Search" name="Search"
                v-model="query"/>
        </div>
      </div>
      
      <div class="d-flex flex-row flex-wrap gap-4 justify-content-center">
        <div v-for="wardSkin in p" :key="`${wardSkin.id}`"
            style="width: 225px;"
            data-aos="zoom-out"
            data-aos-duration="500">
            <div class="ratio ratio-1x1 position-relative trans-hover-grow">
                <LLazyImg class="rounded app-background" img-class="rounded app-background" :src="wardSkin.getWardShadowImage('latest')"/>
                <LLazyImg class="rounded" :src="wardSkin.getWardImage('latest')"/>
                <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                    <div class="d-inline-flex justify-content-between align-item-between p-1 rounded-bottom bg-dark-gradient">
                        <span class="fs-6 fw-light">{{ wardSkin.name }}</span>
                        <span class="fw-bold">{{ wardSkin.id }}</span>
                    </div>
                </div>
                <div class="position-absolute z-2 d-flex flex-column justify-content-start align-items-end">
                    <div class="m-2">
                        <span v-if="wardSkin.isLegacy" style="background: #0008;" class="rounded p-1">Legacy</span>
                        <span v-if="wardSkin.rarities && wardSkin.rarities.length > 0 && wardSkin.rarities[0].rarity != '0'" style="background: #0008;" class="rounded ms-1 p-1">{{ useRarities(wardSkin.rarities[0].rarity) }}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="d-flex justify-content-center w-100">
        <BackToTopButton/>
      </div>
  </div>
</template>