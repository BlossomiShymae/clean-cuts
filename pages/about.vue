<template>
  <div class="container d-flex flex-column gap-4">
    <div class="d-flex gap-4 o-wrap justify-content-center">
        <div class="d-flex justify-content-center align-items-center gap-3" style="min-width: 250px;"
            data-aos="zoom-out"
            data-aos-duration="1000">
            <div class="ratio ratio-4x3 position-relative">
                <LLazyImg img-class="object-fit-cover rounded" src="/clean-cuts/img/avatar.png"/>
                <div class="position-absolute z-1 d-flex flex-column justify-content-end">
                    <div class="d-inline-flex flex-column align-items-end bg-dark-gradient w-100 p-2">
                        <div class="d-inline-flex w-100 align-items-center justify-content-between">
                            <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://blossomishymae.github.io"><h5 class="text-light mb-0">Blossomi Shymae</h5></NuxtLink>
                            <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://github.com/BlossomiShymae"><span><MaterialIcon name="github" :size="32" /> </span></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Card data-aos="fade-left" data-aos-duration="1000">
            <h1 class="display-4">About <TheTitle /> </h1>
            <p class="lead">The <TheTitle /> project was started after experiencing stumbling blocks
                with a shelved project.
            </p>
            <p>Our purpose is to provide League of Legends game data that is easy 
                to view for the common person. This game data is provided by CommunityDragon, another community resource. :3
            </p>
        </Card>
    </div>
    <Card data-aos="fade-right" data-aos-duration="1000">
        <h3 class="fw-bold d-inline-flex align-items-center"><span class="me-2"><MaterialIcon name="cog" :size=32></MaterialIcon></span>Technology stack</h3>
        <ul>
            <li>Nuxt 3, the meta universal application framework</li>
            <li>AOS, for animations</li>
            <li>Bootstrap, for heavy CSS theming</li>
            <li>Anime.js via nuxt-anime plugin, for home page</li>
            <li>LDRS, for loading indicators</li>
        </ul>
    </Card>
    <Card style="height: fit-content;" data-aos="fade-left" data-aos-duration="1000">
        <h3 class="fw-bold d-inline-flex align-items-center"><span class="me-2"><MaterialIcon name="mail" :size=32></MaterialIcon></span>Contact</h3>
        <p><a href="https://discord.gg/chEvEX5J4E" class="text-decoration-none text-light">Blossomi Shymae can be reached via her Discord server.</a></p>
    </Card>
  </div>
</template>

<style>
@media (max-width: 1200px) {
    .o-wrap {
        flex-wrap: wrap;
    }
}
</style>