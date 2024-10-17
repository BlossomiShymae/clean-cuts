export default defineNuxtRouteMiddleware((to, from) => {
  useHead({
    htmlAttrs: {
      style:
        to.fullPath == "/"
          ? "background: url('/clean-cuts/img/background.jpg'); background-position: center; background-size: cover;"
          : "background: rgb(21, 11, 48)",
    },
  });
});
