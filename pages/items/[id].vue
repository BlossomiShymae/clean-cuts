<script setup lang="ts">
import { Item } from '~/core/models';

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

<template>
  <div>
    <Card class="d-flex flex-row flex-wrap gap-2" data-aos="fade-right" data-aos-duration="1000">
        <div class="pb-3">
            <h1 class="display-4 mb-0"> {{ item.name }}</h1>
            <p class="text-muted" v-html="item.description"></p>
            <div class="d-flex flex-wrap gap-3">
                <Badge label="ID">{{ item.id }}</Badge>
                <Badge label="Price">{{ item.priceTotal }}</Badge>
                <Badge label="Sell">{{ item.price }}</Badge>
                <Badge label="" v-if="item.active">Active</Badge>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center flex-grow-1">
            <div class="tf-tree tf-custom">
                <ul>
                    <li>
                        <span class="tf-nc">
                            <div class="d-flex flex-column">
                                <img class="border rounded border-dark" :src="item.getIcon('latest')"/>
                                <div class="text-center w-100">
                                    {{ item.priceTotal }}
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li v-for="component in components" class="p-0">
                                <span class="tf-nc">
                                    <NuxtLink class="text-decoration-none" :to="`/items/${component.id}`" :key="component.id">
                                        <div class="d-flex flex-column">
                                            <img class="border rounded" :src="component.getIcon('latest')"/>
                                            <div class="text-center w-100">
                                                {{ component.priceTotal }}
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </Card>
  </div>
</template>