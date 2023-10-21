<template>
  <div class="skills">

    <div class="skills__row">
      <div class="skills__languages">
        <Language name="JavaScript"/>
        <Language name="TypeScript"/>
      </div>
      <div class="skills__description">
        <p>React や Vue と Firebase を用いた Web アプリ制作。</p>
        <p>Electron や Tauri を用いたデスクトップアプリ制作。</p>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__languages">
        <Language name="Python"/>
      </div>
      <div class="skills__description">
        <p>pandas などを用いたデータ分析。</p>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__languages">
        <Language name="Dart"/>
      </div>
      <div class="skills__description">
        <p>Flutterの状態管理の方法を勉強中。</p>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__languages">
        <Language name="Java"/>
      </div>
      <div class="skills__description">
        <p>Swing を用いた簡単なGUIアプリ開発。</p>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__languages">
        <Language name="Rust"/>
      </div>
      <div class="skills__description">
        <p>所有権や文字列の扱い方あたりを勉強中。</p>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.skills {
  display: table;
  margin-block: 2rem;
  margin-inline: auto;
  width: 100%;
  max-width: 600px;
  border-top: var(--base-20) 1px solid;

  &__row {
    display: table-row;
  }

  &__languages {
    display: table-cell;
    text-align: center;
    padding-inline: 0.4rem;
    max-width: 5rem;
    border-bottom: var(--base-20) 1px solid;
  }

  &__description {
    display: table-cell;
    padding-inline: 0.4rem;
    border-bottom: var(--base-20) 1px solid;

    p {
      font-size: 0.9rem;
      margin-block: 0.4rem;
    }
  }
}
</style>