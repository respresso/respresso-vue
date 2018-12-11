<template>
  <div id="app">
    <img alt="Vue logo" src="../respresso/image/profile_avatar.svg">
    <HelloWorld :msg="$t('profile.firstname')"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: $background
}
img {
  background-color: $profil_photo_background
}
</style>
