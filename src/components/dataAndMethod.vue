<template>
  <h1>nama: {{ nama }}</h1>
  <!-- you can also use v-on:click -->
  <button @click="changeName">Change name</button>
</template>

<script>
export default {
  name: 'dataAndMethod',
  data(){
    return {
      nama: 'TM Mufti'
    }
  },
  methods: {
    changeName() {
      this.nama = "Fadhlillah";

    }
  }
}
</script>

<style>

</style>