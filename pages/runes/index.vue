<script setup lang="ts">
const { client } = useClient();
const { currentLocale } = useLocale();
const getRunes = async () => (await client.perks.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.id - b.id)

const query = ref("");

const runes = ref(await getRunes());
watch(currentLocale, async() => {
    runes.value = await getRunes();
});

const { isNumeric } = useIsNumeric();
const filteredRunes = computed(() => {
    let filtered = [];
    if (isNumeric(query.value))
        filtered = runes.value.filter((x) => x.id == parseInt(query.value, 10));
    else 
        filtered = runes.value.filter((x) => x.name.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()));
    return filtered;
})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="d-flex flex-column gap-3">
        <div class="d-flex justify-content-end gap-2">
            <Card class="d-flex justify-content-center align-items-center me-auto">
                <span>{{ runes.length }} runes</span>
            </Card>
            <div class="input-group" style="max-width: 400px;">
                <input type="text" class="form-control border-light border-opacity-25" placeholder="Search" name="Search"
                    v-model="query"/>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center gap-2">
            <Card class="d-flex w-50 flex-column" v-for="rune in filteredRunes" :key="rune.id"
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