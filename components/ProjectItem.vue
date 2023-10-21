<script setup lang="ts">
  const props = defineProps({
    slug: String,
    name: String,
    description: String,
    imageFileName: String,
    projectUrl: String,
    githubUrl: String,
  })

  const image = computed(() => props.imageFileName
    ? `/images/${props.imageFileName}`
    : ""
  )
</script>

<template>
  <div class="project-item">
    <div class="image">
      <img :src="image" :alt="`${props.name}のサムネイル`"/>
    </div>
    <div class="detail">
      <div class="name">
        {{ props.name }}
      </div>
      <div class="description">
        {{ props.description }}
      </div>
    </div>
    <div class="links">
      <ButtonLink text="サイトを見る" :link="props.projectUrl" external primary />
      <ButtonLink text="GitHub" :link="props.githubUrl" external />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-item {
  width: 100%;

  .image {
    margin-block-end: 0.4rem;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    outline: 1px solid var(--base-20);

    img {
      display: block;
      width: 100%;
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-block-start: 1rem;
    padding-inline: 0.2rem;
  }

  .name {
    display: block;
    font-size: 1.28rem;
    color: var(--base);
    font-family: var(--font-emphasized);
  }

  .description {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--base-80);
  }

  .links {
    display: flex;
    gap: 1rem;
    margin-block: 1rem;
  }
}
</style>