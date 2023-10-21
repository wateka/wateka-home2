<template>
  <div class="header">
    <div class="header__inner">
      <NuxtLink class="header__home_link" to="/">wateka.dev</NuxtLink>
      <div class="header__navigation">
        <NuxtLink class="header__navigation_item" to="/profile">
          Profile
        </NuxtLink>
        <NuxtLink class="header__navigation_item" to="/#projects">
          Projects
        </NuxtLink>
        <NuxtLink class="header__navigation_item" to="/#articles">
          Articles
        </NuxtLink>
      </div>
      <div class="header__icons">
        <a class="header__icon" href="https://github.com/wateka" target="new">
          <img src="~/assets/images/GitHub-Mark-32px.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: block;
  position: absolute;
  inset-block-start: 0;
  width: 100%;
  font-family: var(--font-emphasized);

  &__inner {
    display: flex;
    margin: 0 auto;
    height: 2rem;
    width: calc(100% - 2rem);
    padding: 0.8rem 1rem;
    max-width: var(--header-max-width);
  }

  &__home_link {
    display: block;
    line-height: 2rem;
    color: var(--base);
    transition: all var(--transition-duration-text);

    &:hover {
      color: var(--primary);
      text-shadow: var(--primary-text-shadow);
    }
  }

  &__navigation {
    display: flex;
    gap: 1rem;

    @include smartphone {
      font-size: 0.9rem;
      gap: 0.5rem;
    }

    &::before {
      content: "/";
      color: var(--base-40);
      font-family: var(--font-text);
      margin-inline-start: 1rem;
      font-size: 1.2rem;
      line-height: 2rem;

      @include smartphone {
        margin-inline-start: 0.5rem;
      }
    }
  }

  &__navigation_item {
    display: block;
    color: var(--base);
    line-height: 2rem;
  }

  &__icons {
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  &__icon {
    display: block;
    margin: 0.2rem;
    width: 1.6rem;
    height: 1.6rem;

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>