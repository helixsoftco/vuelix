<template>
  <nav>
    <strong>PROJECT NAME</strong>
    <div>
      Hello Developer!
    </div>
  </nav>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
nav {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  justify-content: space-between;
}
</style>