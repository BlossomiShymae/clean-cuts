<template>
  <div>
    <div class="row mb-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="d-flex align-items-center flex-column">
            <div class="col-md-6">
                    <h1 class="display-4">About <TheTitle /> </h1>
                <p class="lead">The <TheTitle /> project was started after experiencing stumbling blocks
                    with a shelved project.
                </p>
                <p>Our purpose is to provide League of Legends game data that is easy 
                    to view for the common person. This game data is provided by CommunityDragon, another community resource. :3
                </p>
                </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">
            <div style="width: 250px !important;" class="d-flex flex-column justify-content-center align-items-center gap-1 border border-light border-opacity-25 bg-blur-3 rounded">
                <img class="img-fluid rounded mb-2" src="/img/avatar.png"/>
                <div class="px-3">
                    <div class="d-flex gap-2">
                    <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://blossomishymae.github.io"><h5 class="text-light mb-0">Blossomi Shymae</h5></NuxtLink>
                    <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://github.com/BlossomiShymae"><span><MaterialIcon name="github" :size="20" /> </span></NuxtLink>
                </div>
                    <h5 class="fw-bold m-0 mb-2">Shy elf girl</h5>
                    <p>She likes to chat with her friends and do random programming projects, such as this one.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 d-flex flex-column justify-content-around" data-aos="fade-left" data-aos-duration="1000"   >
            <div>
                <h3 class="fw-light">Technology stack</h3>
                <p>This website uses Nuxt.js, the meta-framework of universal application.</p>
                <p >Other libraries used include Bootstrap, the CSS framework, and Material Design for icons.</p>
            </div>
            <div>
                <h3 class="fw-light">Contact</h3>
                <p><a href="https://discord.gg/chEvEX5J4E">Blossomi Shymae can be reached via her Discord server.</a></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MaterialIcon from '~/components/MaterialIcon.vue';
import TheTitle from '~/components/TheTitle.vue';
</script>