<template>
<!-- you can also use v-bind:href -->
  <a :href="url" target=" blank">go to this link</a>
</template>

<script>
export default {
  name: 'data binding',
  data() {
    return {
      url: "https://youtube.com"
    }
  }
}
</script>

<style>

</style>