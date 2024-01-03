<template>
  <div class="footer">
    <div class="footer__inner">

      <div class="footer__nav">
        <nuxt-link to="/#projects">Projects</nuxt-link>
        <nuxt-link to="/#posts">Posts</nuxt-link>
      </div>

      <div class="footer__license">
        (C) 2024 wateka
      </div>

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
    flex-direction: column;
    gap: 0.5rem;
    margin: 0 auto;
    width: calc(100% - 2rem);
    min-height: 5rem;
    padding: 1rem;
    max-width: var(--max-width);
  }

  &__nav {
    display: flex;
    gap: 1rem;
  }

  &__license {
    color: var(--base-60);
  }
}
</style>
