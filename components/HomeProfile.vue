<template>
  <div id="home-profile">
    <div id="avatar">
      <img src="~/assets/images/avatar.webp" alt="watekaのアバター" width="160"/>
    </div>
    
    <div id="text">
      <div id="name">wateka</div>
      <div id="introduction">
        主にWeb開発をしているエンジニアです。フロントエンドが得意です。
      </div>
      <div id="social">
        <ButtonLink text="GitHub" link="https://github.com/wateka" external/>
        <ButtonLink text="Bluesky" link="https://bsky.app/profile/wateka.bsky.social" external/>
        <ButtonLink text="AtCoder" link="https://atcoder.jp/users/wateka" external/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-profile {
  display: grid;
  gap: 2rem;
  margin-block: 2rem;
  padding-inline: 1rem;
  grid-template-columns: 10rem 1fr;
  width: calc(100% - 2rem);

  @include smartphone {
    grid-template-columns: 1fr;
  }

  #avatar {
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

  #text {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;

    #name {
      font-size: 2rem;
      font-family: var(--font-emphasized);
    }

    #social {
      display: flex;
      gap: 0.6rem;
    }
  }
}
</style>