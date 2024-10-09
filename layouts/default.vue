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