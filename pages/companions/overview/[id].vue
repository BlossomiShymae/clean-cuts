<template>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <h1 class="display-4 mb-0">{{ companion.name }}</h1>
      <p class="text-muted border-bottom -b-3 border-light border-opacity-25 border-4">{{ companion.description }}</p>

      <div class="d-flex flex-wrap gap-3">
        
      </div>

    </div>

    <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
      <img :src="companion.getLoadoutsIcon('latest')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from "../../../components/Badge.vue";
import useClient from "../../../composables/useClient";
import useLocale from "~/composables/useLocale";
import { Companion } from "~/core/models";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getCompanions = async () => await client.companions.listAsync({locale: currentLocale.value, version: "latest"});

const companions = ref(await getCompanions());
watch(currentLocale, async() => {
  companions.value = await getCompanions();
});

const companion = companions.value.find((x) => x.itemId == id) || new Companion({});
</script>