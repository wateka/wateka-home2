<script setup lang="ts">
useSeoMeta({
  title: "wateka.dev",
  description: "主にWeb開発をしているエンジニア wateka のページです。"
})
</script>

<template>
  <HomeProfile />

  <section>
    <h2 id="projects">Projects</h2>
    <ProjectList>
        <ProjectItem
          name="idee"
          imageFileName="idee.webp"
          description="Web上で動く、ピアノロール式の作曲アプリケーションです。"
          projectUrl="https://idee.wateka.dev/"
        />
      <ProjectItem
        name="コード当てゲーム"
        imageFileName="chord_game.webp"
        description="和音を聞いて、コード名を4つの選択肢から当てるゲームです。"
        projectUrl="https://chord-game-wateka.netlify.app/"
        githubUrl="https://github.com/wateka/chord-game/"
      />
      <ProjectItem
        name="ニューモーフィズム電卓"
        imageFileName="neumorphism_calc.webp"
        description="ニューモーフィズムでデザインした電卓のWebアプリケーションです。"
        projectUrl="https://festive-dijkstra-8c3c69.netlify.app/"
        githubUrl="https://github.com/wateka/neumorphism-calc/"
      />
    </ProjectList>
  </section>

  <section>
    <h2 id="posts">Posts</h2>
    記事はまだありません。
  </section>

</template>
