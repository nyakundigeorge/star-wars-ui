<template>
  <div id="app">
    <TopNavigation/>
    <transition name="moveInUp">
      <router-view />
    </transition>
    <Footer/>
  </div>
</template>

<script>
import TopNavigation from "./components/Navigation/TopNavigation";
import Footer from "./components/Footer/Footer"

export default {
  name: 'app',
  components: {
    Footer,
    TopNavigation
  },
  data(){
    return {
      datePickerValue: ''
    }
  }
}
</script>

<style>
  @import "./themes/scss/default.scss";
</style>
