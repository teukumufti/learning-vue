<template>
  <!-- ini adalah cara membuat props di vue jika ingin mengambil data dari parent to child -->
  <!-- <Props  text="Hallo Semua" /> -->

  <!-- sedangka ini cara jika ingin teks nya di binding atau di jadikan data binding agar dinamis-->
  <Props :text="text"/>
</template>

<script>
import Props from "@/components/props.vue"

export default {
 name: "Task7",
 components: {
  Props
 },
//  ini cara jika datanya di binding agar dynamis
 data() {
  return {
    text: "ini adalah text dynamis"
  }
 }
}
</script>

<style>

</style>