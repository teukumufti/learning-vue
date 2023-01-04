<!-- ini adalah cara jika ingin mengambil data dari parent ke child -->
<template>
  <!-- data dari parent -->
  <h1>{{ text }}</h1>
  <!--  -->
  <button @click="changeText">Ubah Text</button>
</template>

<script>
export default {
  name: "customEvent",
  // ini untuk mengambil data parents
  props: ['text'],
  // -------
  data(){
    return {
      newText: "ini text dari child"
    }
  },
  methods: {
    changeText(){
      this.$emit("changeTitle", this.newText);
    }
  },
  emits: ["changeTitle"]
}
</script>

<style>

</style>