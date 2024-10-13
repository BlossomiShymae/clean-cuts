<script setup lang="ts">
const { $anime } = useNuxtApp();
const textWrapper = useTemplateRef("my-letters");

onMounted(() => {
  textWrapper.value!.innerHTML = textWrapper.value!.textContent!.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  $anime.timeline({loop: true})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, textWrapper.value!.getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml11 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    }).add({
      targets: '.ml11',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 15000
    });
  });
</script>

<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center gap-2" style="margin-top: 25%;"
      data-aos="fade-down" data-aos-duration="1000">
        <Card class="d-flex flex-column justify-content-center align-items-center position-relative">
            <div class="d-flex justify-content-center align-items-center gap-2">
              <div style="width: 64px;">
                <div class="ratio ratio-1x1">
                  <LLazyImg img-class="rounded" :src="`/clean-cuts/favicon.png`"/>
                </div>
              </div>
              <div>
                  <h1 class="ml11">
                    <span class="text-wrapper">
                      <span class="line line1"></span>
                      <span class="letters" ref="my-letters">Clean Cuts</span>
                    </span>
                  </h1>
              </div>
            </div>
            <p>Your local League of Legends companion index.</p>
        </Card>
       
    </div>
  </div>
</template>

<style lang="scss">
.ml11 {
  font-weight: 300;
  font-size: 4rem;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>