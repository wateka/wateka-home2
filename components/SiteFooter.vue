<template>
  <div class="footer">
    <div class="footer__inner">
      <nuxt-link to="/profile">Profile</nuxt-link>
      <nuxt-link to="/#projects">Projects</nuxt-link>
      <nuxt-link to="/#articles">Articles</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: block;
  width: 100%;
  font-family: var(--font-emphasized);

  &__inner {
    display: flex;
    gap: 1rem;
    margin: 0 auto;
    width: calc(100% - 2rem);
    min-height: 5rem;
    padding: 1rem;
    max-width: var(--max-width);
  }
}
</style>
