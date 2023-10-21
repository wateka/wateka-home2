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
  padding-block-start: 4rem;
  margin-inline: auto;
  width: var(--max-width);
}
</style>
