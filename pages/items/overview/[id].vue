<template>
  <div>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <h1 class="display-4 mb-0"> {{ item.name }}</h1>
            <p class="text-muted" v-html="item.description"></p>
        </div>

        <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img class="border rounded border-dark" :src="item.getIcon('latest')"/>
        </div>
    </div>

    <div class="row">
        <div class="d-flex flex-wrap gap-3">
            <Badge name="identifier">{{ item.id }}</Badge>
            <Badge name="hand-coin">{{ item.priceTotal }}</Badge>
            <Badge name="hand-coin-outline">{{ item.price }}</Badge>
            <Badge name="keyboard-variant" v-if="item.active">Active</Badge>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 col-sm-12 border-start border-light border-opacity-25 border-4"
            v-if="components.length > 0">
            <h4 class="fw-light">Component</h4>
            <div class="d-flex justify-content-around align-items-center gap-2 flex-wrap">
                <NuxtLink v-for="component in components" :to="`/items/overview/${component.id}`" :key="component.id">
                    <img class="border rounded border-dark" :src="component.getIcon('latest')"/>
                </NuxtLink>
            </div> 
        </div>

        <div class="col-md-6 col-sm-12 border-start border-light border-opacity-25 border-4"
            v-if="composites.length > 0">
            <h4 class="fw-light">Composite</h4>
            <div class="d-flex justify-content-around align-items-center gap-2 flex-wrap">
                <NuxtLink v-for="composite in composites" :to="`/items/overview/${composite.id}`" :key="composite.id">
                    <img class="border rounded border-dark" :src="composite.getIcon('latest')"/>
                </NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import useClient from '../../../composables/useClient';
import useLocale from '~/composables/useLocale';
import { Item } from '~/core/models';
import Badge from '~/components/Badge.vue';

const route = useRoute();
const id = route.params.id as unknown;

const { client } = useClient();
const { currentLocale } = useLocale();
const getItems = async () => await client.items.listAsync({locale: currentLocale.value, version: "latest"});

const items = ref(await getItems());
const _default = new Item({});

const item = computed(() => items.value.find((x) => x.id == id) || _default);
const components = computed(() => item.value.from.map((id) => items.value.find((x) => x.id == id) || _default));
const composites = computed(() => item.value.to.map((id) => items.value.find((x) => x.id == id) || _default));
</script>


<style lang="scss" scoped>

</style>