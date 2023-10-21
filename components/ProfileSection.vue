<template>
  <div class="profile_section">
    <div class="profile_section__avatar">
      <img src="~/assets/avatar.webp" alt="watekaのアバター" />
    </div>
    <div class="profile_section__information">
      <div class="profile_section__name">wateka</div>
      <div class="profile_section__links">
        <a class="profile_section__link" href="https://github.com/wateka">
          <span class="profile_section__link_image"><img src="~/assets/GitHub-Mark-32px.png"/></span>
          <span class="profile_section__link_text">GitHubはこちら</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile_section {
  display: flex;
  align-items: center;
  margin-block: 2rem;
  gap: 2rem;

  &__avatar {
    display: block;
    grid-area: 1 / 1 / 2 / 1;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
    }
  }

  &__information {
    flex: 1;
  }

  &__name {
    font-size: 1.5rem;
    margin-block-end: 0.8rem;
    font-family: var(--font-emphasized);
  }

  &__links {
    display: flex;
  }

  &__link {
    display: flex;
  }
  
  &__link_image {
    display: inline-block;
    margin-inline-end: 0.4rem;
    width: 1.6rem;
    line-height: 1.6rem;

    img {
      display: block;
      width: 100%;
    }
  }
  
  &__link_text {
    display: inline;
    line-height: 1.5rem;
    font-family: var(--font-emphasized);
  }
}
</style>