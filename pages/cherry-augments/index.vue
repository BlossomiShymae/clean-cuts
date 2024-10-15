<script setup lang="ts">
const { client } = useClient();

const { data: cherryAugments } = await useLocalizedData(async (x) => (await client.cherryAugments.listAsync({locale: x, version: "latest"}))
  .sort((a, b) => a.id - b.id));
  
const { query, results } = useQueryable(cherryAugments, (x) => x.id, (x) => x.nameTRA);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-row justify-content-end gap-2">
      <Card class="d-flex justify-content-center align-items-center me-auto">
        <span>{{ cherryAugments.length }} augments</span>
      </Card>
      <Search v-model="query"/>
    </div>

    <div class="d-flex flex-wrap justify-content-around gap-4">
      <div v-for="cherryAugment in results" :key="`${cherryAugment.id}-${cherryAugment.nameTRA}`"
        style="width: 200px;"
        data-aos="zoom-out"
        data-aos-duration="500">
        <div class="ratio ratio-1x1 position-relative trans-hover-grow">
          <LLazyImg class="rounded app-background" img-class="rounded app-background" :src="cherryAugment.getAugmentSmallIcon('latest')"/>
          <div class="position-absolute z-1 d-flex flex-column justify-content-end">
            <div class="d-inline-flex justify-content-between align-items-center p-1 bg-dark-gradient" >
              <span class="fs-6 fw-light ">{{ cherryAugment.nameTRA }}</span>
              <span class="fw-bold rounded">{{ cherryAugment.id }}</span>
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