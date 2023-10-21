<script lang="ts">
export default {
  name: "ArrowNavigation"
}
</script>

<template>
  <div class="arrow_navigation">
    <nuxt-link class="arrow_navigation__inner" to="/#projects">
      <div class="arrow_navigation__text">参加プロジェクト・記事はこちら</div>
      <div class="arrow_navigation__down_arrow">↓</div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.arrow_navigation {
  display: flex;
  justify-content: center;
  height: 5rem;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--base-60);
    transition: color 0.3s;

    &:hover {
      color: var(--base-80);
      text-decoration: none;
    }
  }

  &__text {
    display: block;
    margin-block-end: 0.5rem;
    font-size: 0.9rem;
    font-family: var(--font-emphasized);
  }

  &__down_arrow {
    font-size: 1.5rem;
    margin-block-end: 1.0rem;
    animation: downarrow 2s infinite;
  }
}

@keyframes downarrow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
  60% {
    transform: translateY(1rem);
  }
  90% {
    transform: translateY(0);
  }
}
</style>