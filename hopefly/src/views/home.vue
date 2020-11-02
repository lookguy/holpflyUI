<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>导航1</li>
        <li>导航2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>UI Name</h1>
      <h2>one good UI frame</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  border: 1px solid red;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 300px auto;
  min-height: 3rem;
  .logo {
    font-size: 2.6rem;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 1rem;
    >*{
      padding: 0 2rem;
    }
  }
}
</style>