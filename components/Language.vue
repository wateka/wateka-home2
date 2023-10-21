<script setup lang="ts">
  const { name } = defineProps({
    name: String
  })
  const modifier = computed(() => name?.toLowerCase())
</script>

<template>
  <div class="language" :class="`language--${modifier}`">
    {{ name }}
  </div>
</template>

<style lang="scss" scoped>
.language {
  display: inline-block;
  padding: 0.1rem 0.4rem;
  font-size: 0.85rem;
  line-height: 1.2rem;
  font-family: var(--font-emphasized);
  background: #555;
  color: var(--white);
  border-radius: 0.2rem;

  &--javascript { color: var(--base); background: rgb(235, 220, 11); }
  &--typescript { color: var(--white); background: rgb(39, 137, 230); }
  &--python { color: var(--white); background: rgb(35, 113, 230); }
  &--dart { color: var(--white); background: rgb(32, 160, 211); }
  &--java { color: var(--white); background: rgb(228, 59, 47); }
  &--rust { color: var(--white); background: rgb(230, 106, 35); }

  
  &--react { color: var(--white); background: rgb(16, 170, 197); }

  & + .language {
    margin-inline-start: 0.2rem;
  }

}
</style>