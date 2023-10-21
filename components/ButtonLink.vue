<script setup lang="ts">
  const { text, link, external, primary } = defineProps({
    text: String,
    link: String,
    external: Boolean,
    primary: Boolean,
  })
</script>

<template>
  <NuxtLink class="button-link" :class="{ primary }" :to="link" :target="external ? 'new' : ''">
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

  &.primary {
    color: var(--white);
    background: var(--primary);
  }
}

.button-link:hover {
  background: var(--secondary);
  text-decoration: none;

  &.primary {
    background: var(--primary-hover);
  }
}
</style>
