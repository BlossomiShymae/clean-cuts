<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getItems = async () => await client.items.listAsync({ locale: currentLocale.value, version: "latest"});

const items = ref(await getItems());
watch(currentLocale, async () => {
    items.value = await getItems();
});
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-row flex-wrap gap-2 justify-content-center">
        <div v-for="item in items" :id="`${item.id}`"
            style="width: 64px;"
            data-aos="zoom-out"
            data-aos-duration="500">
            <NuxtLink :to="`/items/${item.id}`">
                <div class="ratio ratio-1x1 position-relative trans-hover-grow">
                    <img class="rounded" :src="item.getIcon('latest')" loading="lazy"/>
                    <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                        <div class="d-inline-flex justify-content-end align-items-center">
                            <span class="fw-bold bg-dark-subtle rounded m-1" style="font-size: 8pt; padding: 1px;">{{ item.id }}</span>
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