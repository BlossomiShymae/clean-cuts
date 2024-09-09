<template>
  <div class="d-flex flex-column gap-2">
      <h1>Runes</h1>

      <div class="overflow-hidden rounded border border-light border-opacity-25 p-4">
          <table class="sortable table table-borderless">
              <thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Icon</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="rune in runes" :key="rune.id">
                    <th scope="row">
                        {{ rune.id }}
                    </th>
                    <td>
                        <img :src="rune.getIcon('latest')" width="32" height="32" loading="lazy" onerror="this.onerror = null; this.src = '/clean-cuts/img/error.png';"/>
                    </td>
                    <td>
                        {{ rune.name }}
                    </td>
                    <td>
                        <span v-html="rune.shortDesc"></span>
                    </td>
                </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script setup lang="ts">
import useClient from '../../composables/useClient';
import useLocale from '~/composables/useLocale';

const { client } = useClient();
const { currentLocale } = useLocale();
const getRunes = async () => (await client.perks.listAsync({locale: currentLocale.value, version: "latest"}))
.sort((a, b) => a.id - b.id)

const runes = ref(await getRunes());
watch(currentLocale, async() => {
    runes.value = await getRunes();
});
</script>