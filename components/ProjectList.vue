<template>
  <div class="project-list">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.project-list {
  display: grid;
  gap: 2rem;
  padding-inline: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include smartphone {
    grid-template-columns: 1fr;
  }
}
</style>
