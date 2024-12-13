<script lang="ts" setup>
const config = useRuntimeConfig();

// OpenGraph Share Image component
// todo : make specific template images for index & event & user pages
// todo image is quite tall, make it more widescreen ratio
defineOgImageComponent("NuxtSeo", {
  title: `${config.public.name} 👩🏻‍💻`,
  description: config.public.description,
  theme: "#265773",
  colorMode: "dark",
});
</script>
<template>
  <div class="tracking-component"></div>
</template>
