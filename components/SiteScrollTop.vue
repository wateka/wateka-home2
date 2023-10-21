<template>
  <a class="scroll_top" href="#top">↑</a>
</template>

<style lang="scss" scoped>
.scroll_top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset-block-end: 2rem;
  inset-inline-end: 1rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 3px 6px #11111133;

  &:hover {
    color: var(--white);
    background: var(--primary);
    text-decoration: none;
  }
}
</style>