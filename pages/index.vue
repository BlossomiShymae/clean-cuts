<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center gap-2" style="margin-top: 25%;">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="display-4"><TheTitle /></h1>
            <p>Your local League of Legends companion index.</p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 col-sm-12">
            <h2>The <TheTitle /> Project</h2>
            <p>Our primary purpose is to make game data viewable in a human-friendly 
                format without needing computer programming or scripting knowledge. 
            </p>
            <p>CommunityDragon, the unofficial League of Legends data resource, is used for our project.</p>
        </div>

        <div class="col-md-6 col-sm-12">
            <h2>Resources</h2>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center align-items-stretch gap-2">
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25" asp-area="" asp-page="/Champion/Index">
                          <MaterialIcon name="account-group" :size="24"/> Champions
                        </a>
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="magic-staff" :size="24"/> Items
                        </a>
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="shield" :size="24"/> Runes
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex flex-column justify-content-center align-items-stretch gap-2">
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="image" :size="24"/> Summoner Icons
                        </a>
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="floor-lamp" :size="24"/> Ward Skins
                        </a>
                        <a class="btn btn-dark bg-transparent bg-blur-3 border-light border-opacity-25">
                          <MaterialIcon name="face-woman-shimmer" :size="24"/> Emotes
                        </a>
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