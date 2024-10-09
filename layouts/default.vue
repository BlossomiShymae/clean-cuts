<script setup lang="ts">
const route = useRoute();
const breadcrumbs = computed(() => {
  const names = route.fullPath.split("/").filter(x => x != "");
  let _breadcrumbs = [];
  let stack = "";
  for (const name of names) {
    stack += "/" + name;
    _breadcrumbs.push({
      name: name,
      path: stack
    });
  }
  return _breadcrumbs;
});
</script>

<template>
  <div class="h-100">
    <header class="container-fluid">
        <Card>
          <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light m-0 p-0">
            <NuxtLink class="navbar-brand fw-light" to="/" >
              <img class="me-1" src="/favicon.png" width="24" height="24"/>
              <TheTitle />
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <div class="dropdown">
                          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            League
                          </button>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <NuxtLink class="nav-link" to="/champions">
                                <MaterialIcon name="account-group" :size="24" /> Champions
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink class="nav-link" to="/items">
                                <MaterialIcon name="magic-staff" :size="24" /> Items
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink class="nav-link" to="/runes">
                                <MaterialIcon name="shield" :size="24" /> Runes
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink class="nav-link" to="/ward-skins">
                                <MaterialIcon name="floor-lamp" :size="24" /> Ward Skins
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink class="nav-link" to="/cherry-augments">
                                <MaterialIcon name="dice-multiple-outline" :size="24" /> Cherry Augments
                              </NuxtLink>
                            </li>
                          </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                      <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          TFT
                        </button>
                        <ul class="dropdown-menu p-2">
                          <li>
                            <NuxtLink class="nav-link" to="/companions">
                              <MaterialIcon name="penguin" :size="24" /> Companions
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="nav-link" to="/tft-items">
                              <MaterialIcon name="magic-staff" :size="24" /> Items
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="nav-link" to="/tft-map-skins">
                              <MaterialIcon name="map" :size="24" /> Map Skins
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="nav-link" to="/tft-damage-skins">
                              <MaterialIcon name="creation" :size="24" /> Damage Skins
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Shared
                        </button>
                        <ul class="dropdown-menu p-2">
                          <li>
                            <NuxtLink class="nav-link" to="/summoner-icons">
                              <MaterialIcon name="image" :size="24" /> Summoner Icons
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="nav-link" to="/summoner-emotes">
                              <MaterialIcon name="face-woman-shimmer" :size="24" /> Emotes
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="nav-link" to="/loots">
                              <MaterialIcon name="treasure-chest" :size="24" /> Loots
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <div class="ms-2 d-flex align-items-center">
                      <NuxtLink class="text-decoration-none text-light nav-item" to="/settings">
                        <MaterialIcon name="cog" :size="24" /> Settings
                      </NuxtLink>
                    </div>
                </ul>
            </div>
          </nav>
          <nav v-if="breadcrumbs.length > 0" style="--bs-breadcrumb-divider: '|';">
              <ol class="breadcrumb pb-0 mb-0 border-top border-light border-opacity-25">
                <li class="breadcrumb-item" v-for="breadcrumb in breadcrumbs"><NuxtLink :to="breadcrumb.path" class="text-decoration-none text-light" style="text-transform: capitalize;">{{ breadcrumb.name }}</NuxtLink></li>
              </ol>
            </nav>
        </Card>
    </header>
    <div class="container-fluid">
        <main role="main" class="pt-3 pb-3">
            <slot></slot>
        </main>
    </div>

    <footer class="container-fluid mb-4">
        <Card>
          <div class="d-flex justify-content-around align-items-center gap-2 mb-3 flex-wrap">
              <NuxtLink class="text-decoration-none text-light" to="/about">About</NuxtLink>
              <a class="text-decoration-none text-light" href="https://challenges.darkintaqt.com" referrerpolicy="no-referrer">Challenge Tracker</a>
              <a class="text-decoration-none text-light" href="https://github.com/BlossomiShymae/clean-cuts" referrerpolicy="no-referrer">
                <MaterialIcon name="github" :size="24" /> GitHub
              </a>
              <a class="text-decoration-none text-light" href="https://discord.gg/chEvEX5J4E" referrerpolicy="no-referrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg> Discord
              </a>
              <a class="text-decoration-none text-light" href="https://blossomishymae.github.io/" referrerpolicy="no-referrer">blossomishymae.github.io</a>
              <a class="text-decoration-none text-light" href="https://communitydragon.org" referrerpolicy="no-referrer">CommunityDragon</a>
              <!-- <a class="text-decoration-none text-light" href="https://discord.com/invite/riotgamesdevrel" referrerpolicy="no-referrer">DevRel Discord</a> -->
          </div>

          <div class="d-flex flex-column justify-content-center align-items-center pt-2 border-top border-light border-opacity-25">
              <p class="text-muted fw-light mb-1" style="font-size: 0.8rem;"><TheTitle/> was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project. </p>
              <a class="text-decoration-none text-light" href="https://www.artstation.com/sundownpink"><p class="fw-light mb-1" style="font-size: 0.8rem;">Artwork by Chao Liu.</p></a>
          </div>
        </Card>
    </footer>
  </div>
</template>

<style lang="scss">
a.navbar-brand {
  white-space: normal;
  text-align: center;
  word-break: break-all;
}

a {
  color: #0077cc;
}

.btn-primary {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.box-shadow {
  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
}

button.accept-policy {
  font-size: 1rem;
  line-height: inherit;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  white-space: nowrap;
  line-height: 60px;
}
</style>