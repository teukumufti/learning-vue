<!-- ini adalah cara jika ingin mengambil data dari child ke parent -->
<template>
  <customEvent @changeTitle="ubahText" :text="text"/>
</template>

<script>
import customEvent from '@/components/customEvent.vue';

export default {
  name: "Taski8",
  components: {
    customEvent
  },
  data() {
    return {
      text: "ini text parents"
    }
  },
  // method untuk mengambil data dari child
  methods: {
    ubahText(newText) {
      this.text = newText
    }
  }
}
</script>

<style>

</style>