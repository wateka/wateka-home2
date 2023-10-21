<template>
  <div id="site">
    <SiteHeader />
    <div id="page-container">
      <NuxtPage />
    </div>
    <SiteFooter />
    <SiteScrollTop />
  </div>
</template>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
}

#page-container {
  margin-inline: auto;
  padding-block-start: 4rem;
  padding-inline: 1rem;
  width: calc(100% - 2rem);
  max-width: var(--max-width);
  min-height: calc(100lvh - 12rem);
}
</style>
