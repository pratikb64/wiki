<script setup>
const { data: page } = await useAsyncData("wikiPage", () => {
  return useNuxtApp().$event.context;
});
</script>

<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.content)" />
  </div>
</template>
