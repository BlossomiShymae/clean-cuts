<template>
  <div class="d-flex flex-column gap-2">
    <h1>TFT Items</h1>

    <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
      <table class="sortable table table-borderless">
        <thead>
          <tr>
            <th scope="col">Guid</th>
            <th scope="col">Icon</th>
            <th scope="col">Name</th>
            <th scope="col">Name Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tftItem in tftItems" :key="tftItem.guid" style="postion: relative;">
            <th scope="row">
              <span class="text-decoration-none text-light fw-normal">{{ tftItem.guid }}</span>
            </th>
            <th scope="row">
              <img class="rounded" :src="tftItem.getSquareIcon('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src = '/clean-cuts/img/error.png'"/>
            </th>
            <th scope="row">
              <span class="text-decoration-none text-light fw-normal">{{ tftItem.name }}</span>
            </th>
            <th scope="row">
              <span class="text-decoration-none text-light fw-normal">{{ tftItem.nameId }}</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import useClient from '~/composables/useClient';
import useLocale from '~/composables/useLocale';

const { client } = useClient();
const { currentLocale } = useLocale();
const getTftItems = async() => await client.tftItems.listAsync({ locale: currentLocale.value, version: "latest"});

const tftItems = ref(await getTftItems());
watch(currentLocale, async() => {
  tftItems.value = await getTftItems();
});
</script>