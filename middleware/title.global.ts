export default defineNuxtRouteMiddleware((to, from) => {
  useHead({
    title: to.fullPath == "/" ? "Clean Cuts" : to.fullPath
      .split("/")
      .filter(x => x != "")
      .map(x => x
        .split("-") // Remove hypens
        .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // Titlecase words
        .join(" "))
      .join(" • ")
  })
});