<template>
  <input type="text" v-model="nama">
  {{ nama }}
</template>

<script>
export default {
  name: "twoWayDataBinding",
  data() {
    return {
      // meskipun stringnya ada isi tetap bisa di ubah misal nama: "ur name"
      nama: ""
    }
  }
}
</script>

<style>

</style>