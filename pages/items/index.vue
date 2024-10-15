<script setup lang="ts">
const { client } = useClient();

const { data: items } = await useLocalizedData(async (x) => await client.items.listAsync({ locale: x, version: "latest"}));

const { query, results } = useQueryable(items, (x) => x.id, (x) => x.name);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-end gap-2">
        <Card class="d-flex justify-content-end me-auto">
            <span>{{ items.length }} items</span>
        </Card>
        <Search v-model="query"/>
    </div>
    <div class="d-flex flex-row flex-wrap gap-2 justify-content-center">
        <div v-for="item in results" :key="`${item.id}`"
            style="width: 64px;"
            data-aos="zoom-out"
            data-aos-duration="500">
            <NuxtLink :to="`/items/${item.id}`">
                <div class="ratio ratio-1x1 position-relative trans-hover-grow">
                    <LLazyImg class="rounded" img-class="rounded" :src="item.getIcon('latest')" />
                    <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                        <div class="d-inline-flex justify-content-end align-items-center">
                            <span class="fw-bold rounded m-1 px-1" style="font-size: 8pt; padding: 1px; background: #000C;">{{ item.id }}</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>

    <div class="d-flex justify-content-center w-100">
        <BackToTopButton/>
    </div>
  </div>
</template>