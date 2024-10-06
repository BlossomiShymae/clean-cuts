<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center gap-2" style="margin-top: 25%;"
      data-aos="fade-down" data-aos-duration="1000">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="display-4">
              <img class="me-4" src="/favicon.png"/>
              <TheTitle />
            </h1>
            <p>Your local League of Legends companion index.</p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialIcon from '~/components/MaterialIcon.vue';
import TheTitle from '~/components/TheTitle.vue';
</script>