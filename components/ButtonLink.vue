<script setup lang="ts">
  const { text, link } = defineProps({
    text: String,
    link: String,
  })
</script>

<template>
  <NuxtLink class="button-link" :to="link">
    {{ text }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button-link {
  height: 2.4rem;
  line-height: 2.4rem;
  padding-inline: 1.2rem;
  color: var(--base);
  background: var(--secondary-40);
  border-radius: 1.2rem;
  transition: background ease-out .2s;
}

.button-link:hover {
  background: var(--secondary);
  text-decoration: none;
}
</style>
