<template>
  <div class="row">
    <div data-aos="fade-right" data-aos-duration="1000">
      <div>
        <h1 class="display-4">{{ skin!.name }}</h1>
        <p v-if="skin?.description">{{ skin.description }}</p>
      </div>
      <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
          <button class="nav-link text-light"
            :class="{'active': selector == 'splash'}" @click="selector = 'splash'">Splash</button>
        </li>
        <li class="nav-item">
          <button class="nav-link text-light"
            :class="{'active': selector == 'uncenteredSplash'}" @click="selector = 'uncenteredSplash'">Uncentered Splash</button>
        </li>
        <li class="nav-item text-light">
          <button class="nav-link text-light" 
            :class="{'active': selector == 'tile'}" @click="selector = 'tile'">Tile</button>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center align-items-center mb-4"
      data-aos="fade-left" data-aos-duration="1000">
      <img class="img-fluid" :src="selection"/>
    </div>
    <div v-if="skinUniverses.length > 0">
      <h5 class="border-bottom border-light border-opacity-25 border-2 mb-2 pb-2">Universes</h5>
      <div v-for="skinUniverse in skinUniverses">
        <div v-if="skinUniverse" :id="`${skinUniverse!.id}`">
          <h6 class="fw-bold">{{ skinUniverse?.name }}</h6>
          <p class="ms-2">{{ skinUniverse?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useClient from '~/composables/useClient';
import useLocale from '~/composables/useLocale';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getSkins = async () => await client.skins.listAsync({ locale: currentLocale.value, version: "latest"});
const getUniverses = async () => await client.universes.listAsync({ locale: currentLocale.value, version: "latest"});

const skins = ref(await getSkins());
const universes = ref(await getUniverses());
watch(currentLocale, async() => {
  skins.value = await getSkins();
  universes.value = await getUniverses();
});

const skin = computed(() => skins.value.find((x) => x.id == id));
const selector = ref("splash");
const selection = computed(() => {
  switch (selector.value) {
    case "splash":
      return skin.value!.getSplash({locale: currentLocale.value, version: "latest"});
    case "uncenteredSplash":
      return skin.value!.getUncenteredSplash({locale: currentLocale.value, version: "latest"});
    case "tile":
      return skin.value!.getTile({locale: currentLocale.value, version: "latest"});
    default:
      return "/img/error.png";
  }
});
const skinUniverses = computed(() => skin.value?.skinLines
  ?.map((x) => universes.value.find((y) => y.skinSets.includes(x.id)))
  .filter(x => x != null) ?? []);
</script>