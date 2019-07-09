<template>
  <div id="app">
    <fish-date-picker v-model="datePickerValue"></fish-date-picker>
  </div>
</template>

<script>
import FishDatePicker from "fish-ui/src/components/DatePicker";

export default {
  name: 'app',
  components: {
    FishDatePicker
  },
  data(){
    return {
      datePickerValue: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
