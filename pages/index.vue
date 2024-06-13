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

    <div class="row">
        <div class="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
            <h2>The <TheTitle /> Project</h2>
            <p>Our primary purpose is to make game data viewable in a human-friendly 
                format without needing computer programming or scripting knowledge. 
            </p>
            <p>CommunityDragon, the unofficial League of Legends data resource, is used for our project.</p>
        </div>

        <div class="col-md-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
            <h2>Resources</h2>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center align-items-stretch gap-2">
                        <NuxtLink to="/champions" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="account-group" :size="24"/> Champions
                        </NuxtLink>
                        <NuxtLink to="/items" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="magic-staff" :size="24"/> Items
                        </NuxtLink>
                        <NuxtLink to="/runes" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="shield" :size="24"/> Runes
                        </NuxtLink>
                        <NuxtLink to="/summoner-icons" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="image" :size="24"/> Summoner Icons
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center align-items-stretch gap-2">
                        <NuxtLink to="/ward-skins" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="floor-lamp" :size="24"/> Ward Skins
                        </NuxtLink>
                        <NuxtLink to="/summoner-emotes" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="face-woman-shimmer" :size="24"/> Emotes
                        </NuxtLink>
                        <NuxtLink to="/companions" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="penguin" :size="24"/> Companions
                        </NuxtLink>
                        <NuxtLink to="/loots" class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="treasure-chest" :size="24"/> Loots
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialIcon from '~/components/MaterialIcon.vue';
import TheTitle from '~/components/TheTitle.vue';
</script>