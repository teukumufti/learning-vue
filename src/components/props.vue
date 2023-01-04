<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: 'props',
  // ini adalah cara membuat props di vue dari parent to child
  props: ["text"]
}
</script>

<style>

</style>