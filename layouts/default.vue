
<template>
  <div class="h-100">
    <header>
        <div class="background background-transparent background-blur-2"></div>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom border-light border-opacity-25 border-2 box-shadow">
            <div class="container">
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
            </div>
        </nav>
    </header>
    <div class="container">
        <main role="main" class="pt-3 pb-3">
            <slot></slot>
        </main>
    </div>

    <footer class="container border border-light border-opacity-25 rounded p-4 pb-2 mt-2 mb-4 bg-blur-4">
        <div class="d-flex justify-content-around align-items-center gap-2 mb-3 flex-wrap">
            <NuxtLink class="text-decoration-none text-light" to="/about">About</NuxtLink>
            <a class="text-decoration-none text-light" href="https://challenges.darkintaqt.com" referrerpolicy="no-referrer">Challenge Tracker</a>
            <a class="text-decoration-none text-light" href="https://github.com/BlossomiShymae/clean-cuts" referrerpolicy="no-referrer">
              <MaterialIcon name="github" :size="24" /> GitHub
            </a>
            <a class="text-decoration-none text-light" href="https://blossomishymae.github.io/" referrerpolicy="no-referrer">blossomishymae.github.io</a>
            <a class="text-decoration-none text-light" href="https://communitydragon.org" referrerpolicy="no-referrer">CommunityDragon</a>
            <!-- <a class="text-decoration-none text-light" href="https://discord.com/invite/riotgamesdevrel" referrerpolicy="no-referrer">DevRel Discord</a> -->
        </div>

        <div class="d-flex justify-content-center align-items-center pt-2 border-top border-light border-opacity-25">
            <p class="text-muted fw-light" style="font-size: 0.8rem;"><TheTitle/> was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project. </p>
        </div>
    </footer>
  </div>
</template>

<script>
import MaterialIcon from '~/components/MaterialIcon.vue';
import TheTitle from '~/components/TheTitle.vue';

// Hardcode splash art links for performance reasons. This is the layout after all.
const splashes = [
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498000.jpg", // Xayah - Sunday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498001.jpg", // Cosmic Dusk - Monday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498002.jpg", // Sweetheart - Tuesday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498004.jpg", // Star Guardian - Wednesday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498028.jpg", // Arcana - Thursday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498037.jpg", // Broken Convenant - Friday
  "https://raw.communitydragon.org/14.9/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498038.jpg", // Redeemed Star Guardian - Saturday
];

const date = new Date();
const day = date.getDay();

useHead({
  htmlAttrs: {
    "data-bs-theme": "dark",
    "style": `background-image: url('${splashes[day]}')` // Use splash of corresponding day
  }
});
</script>

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