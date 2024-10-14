<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getRunes = async () => (await client.perks.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.id - b.id)

const runes = ref(await getRunes());
watch(currentLocale, async() => {
    runes.value = await getRunes();
});

const { query, results } = useQueryable(runes, (x) => x.id, (x) => x.name);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-end gap-2">
            <Card class="d-flex justify-content-center align-items-center me-auto">
                <span>{{ runes.length }} runes</span>
            </Card>
            <Search v-model="query"/>
        </div>
        <div class="d-flex flex-column align-items-center gap-2">
            <Card class="d-flex w-50 flex-column" v-for="rune in results" :key="rune.id"
                data-aos="zoom-out"
                data-aos-duration="500"
                style="height: fit-content;">
                <div class="d-flex gap-2 border-bottom pb-1">
                    <div style="width: 32px;" class="d-flex justify-content-center align-items-center">
                        <div class="ratio ratio-1x1">
                            <LLazyImg :src="rune.getIcon('latest')" />
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-grow-1 ">
                        <span class="fw-light">{{ rune.name }}</span>
                        <span class="fw-bold">{{ rune.id }}</span>
                    </div>
                </div>
                <div style="color: #ccc;" v-html="rune.longDesc"></div>
            </Card>
        </div>
    </div>

    <div class="d-flex justify-content-center w-100">
        <BackToTopButton/>
    </div>
  </div>
</template>