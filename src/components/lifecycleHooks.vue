<template>
  <ul>
      <!-- this lifecyle hooks -->
      <li v-for="item in products" :key="item.id">
      {{ item.title }} - {{ item.price }}
      </li>
    </ul>
</template>

<script>
export default {
 name: "lifecycleHooks",
 data() {
    return {
      products: []
    }
  },

//  di esekusi sebelum created
//  jika ingin menjalankan fungsi" sebelum komponen di buat
//  beforeCreate() {
//   console.log('before created')
//  },
 //  di esekusi sebelum before mount
//  jika ingin menjalankan perintah setelah komponen di buat
 created() {
  this.products = [
      {id: 1, title: "product 1", price: "1000"},
      {id: 2, title: "product 2", price: "2000"},
      {id: 3, title: "product 3", price: "3000"},
  ]
 },

 //  di esekusi sebelum mounted
//  jika ingin menjalankan beberapa fungsi setelah created
//  beforeMount () {
//   console.log("before mount")
//  },

//  jika ingin menjalankan fungsi setelah komponen monuted ke dom
//  mounted(){
//   console.log("mounted")
//  },
}
</script>

<style>

</style>