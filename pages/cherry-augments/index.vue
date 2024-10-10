<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getCherryAugments = async () => (await client.cherryAugments.listAsync({locale: currentLocale.value, version: "latest"}))
  .sort((a, b) => a.id - b.id);

const query = ref("");

const cherryAugments = ref(await getCherryAugments());
watch (currentLocale, async() => {
  cherryAugments.value = await getCherryAugments();
});

const { isNumeric } = useIsNumeric();
const filteredCherryAugments = computed(() => {
  let filtered = [];
  if (isNumeric(query.value))
    filtered = cherryAugments.value.filter((x) => x.id == parseInt(query.value, 10));
  else
    filtered = cherryAugments.value.filter((x) => x.nameTRA.toLowerCase().includes(query.value.toLowerCase()));
  return filtered;
})
</script>

<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex flex-row justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ cherryAugments.length }} augments</span>
      </Card>
      <div class="input-group" style="max-width: 400px;">
        <input type="text" class="form-control border-light border-opacity-25" placeholder="Search" name="Search"
          v-model="query"/>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-around gap-2">
      <div v-for="cherryAugment in filteredCherryAugments" :id="`${cherryAugment.id}-${cherryAugment.nameTRA}`"
        style="width: 200px;"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative">
          <img class="rounded app-background p-4" :src="cherryAugment.getAugmentSmallIcon('latest')" loading="lazy"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-center p-1" style="background: #0008;" >
              <span class="fs-6 fw-light ">{{ cherryAugment.nameTRA }}</span>
              <span class="fw-bold rounded">{{ cherryAugment.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>