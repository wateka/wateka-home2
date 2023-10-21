<template>
  <div class="profile_link">
    <nuxt-link class="profile_link__avatar" to="/profile">
      <div class="profile_link__avatar_icon">
        <img src="~/assets/images/avatar.webp" alt="watekaのアバター" />
      </div>
      <div class="profile_link__text">プロフィールはこちら</div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.profile_link {
  display: flex;
  width: 100%;
  height: calc(95vh - 3.6rem - 5rem);
  justify-content: center;
  align-items: center;

  &__avatar_icon {
    display: block;
    margin-inline: auto;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  &__text {
    display: block;
    text-align: center;
    margin-block-start: 0.5rem;
    font-size: 0.9rem;
    font-family: var(--font-emphasized);
  }

  &__avatar {
    color: var(--base-60);
    transition: all 0.3s;

    &:hover {
      color: var(--base-80);
      text-decoration: none;
      transform: scale(1.04);
    }
  }
}
</style>