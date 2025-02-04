<script setup>
const { data: page } = await useAsyncData("wikiPage", () => {
  console.log("useNuxtApp().$event.context")
  console.log(useNuxtApp().$event.context.content)
  return useNuxtApp().$event.context;
});
</script>

<template>
  <div v-if="page">
    <div v-html="page.content || ''"></div>
  </div>
  <NuxtRouteAnnouncer />
</template>
