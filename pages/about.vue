<template>
  <div>
    <div class="row mb-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="d-flex align-items-center flex-column">
            <div class="col-md-6">
               <Card>
                    <h1 class="display-4">About <TheTitle /> </h1>
                    <p class="lead">The <TheTitle /> project was started after experiencing stumbling blocks
                        with a shelved project.
                    </p>
                    <p>Our purpose is to provide League of Legends game data that is easy 
                        to view for the common person. This game data is provided by CommunityDragon, another community resource. :3
                    </p>
               </Card>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">
            <div style="width: 250px !important;" class="d-flex flex-column justify-content-center align-items-center rounded">
                <img class="img-fluid rounded" src="/img/avatar.png"/>
                <Card>
                    <div class="d-flex gap-2">
                        <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://blossomishymae.github.io"><h5 class="text-light mb-0">Blossomi Shymae</h5></NuxtLink>
                        <NuxtLink class="text-decoration-none d-inline-block text-light m-0" to="https://github.com/BlossomiShymae"><span><MaterialIcon name="github" :size="20" /> </span></NuxtLink>
                    </div>
                    <h5 class="fw-bold m-0 mb-2">Shy elf girl</h5>
                    <p>She likes to chat with her friends and do random programming projects, such as this one.
                    </p>
                </Card>
            </div>
        </div>

        <div class="col-md-6 d-flex flex-column justify-content-around" data-aos="fade-left" data-aos-duration="1000"   >
            <Card>
                <h3 class="fw-bold d-inline-flex align-items-center"><span class="me-2"><MaterialIcon name="cog" :size=32></MaterialIcon></span>Technology stack</h3>
                <p>This website uses Nuxt.js, the meta-framework of universal applications.</p>
                <p>Other libraries used include AOS (Animate on Scroll), Bootstrap, and Material Design icons.</p>
            </Card>
            <Card>
                <h3 class="fw-bold d-inline-flex align-items-center"><span class="me-2"><MaterialIcon name="mail" :size=32></MaterialIcon></span>Contact</h3>
                <p><a href="https://discord.gg/chEvEX5J4E" class="text-decoration-none text-light">Blossomi Shymae can be reached via her Discord server.</a></p>
            </Card>
        </div>
    </div>
  </div>
</template>