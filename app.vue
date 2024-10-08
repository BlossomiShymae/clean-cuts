<template>
  <NuxtLoadingIndicator color="#FBDCFB"/>
  <NuxtLayout>
    <NuxtPage keepalive />
  </NuxtLayout>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<style lang="scss">
.app-background { 
  background: rgba(41, 31, 68, 0.875);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.125rem);
}

.layout-enter-active,
.layout-leave-active {
  transform: none;
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-100%);
}

* {
  color: white;
}

html {
  font-size: 14px;

  background-image: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100%;

  position: relative;
  z-index: 0;
}

body {
  position: relative;
  background-color: transparent;
  z-index: 10;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.btn:focus, 
.btn:active:focus, 
.btn-link.nav-link:focus, 
.form-control:focus, 
.form-check-input:focus,
a:focus-visible {
  box-shadow: 0.05rem 0.05rem 0.375rem 0.1rem rgba(255, 255, 255, 0.744) !important;
  outline: none;
}

svg {
  filter: invert(100%);
}

table {
  background-color: #0004 !important;
}

thead, tbody, th, td {
  background-color: transparent !important;
}

table > tbody > tr:nth-of-type(2n+1) > * {
  background-color: #0004 !important;
}

table > tbody > tr:hover > * {
  background-color: #0008 !important;
}

ul.dropdown-menu {
  @extend .app-background
}

.dropdown-menu {
  width: 200px; 
}

.background {
  height: 100%;
  width: 100%;

  position: absolute;
}

.z-index--10 {
  z-index: -10;
}

.z-index-10 {
  z-index: 10;
}
</style>
