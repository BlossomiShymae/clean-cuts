export default defineNuxtRouteMiddleware((to, from) => {
  useHead({
    htmlAttrs: {
      style: to.fullPath == "/" ? "background: url('/clean-cuts/img/background.jpg');" : "background: rgb(21, 11, 48)"
    },
  });
});