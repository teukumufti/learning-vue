<template>
  <input key="text" v-model="cari" placeholder="Cari">
  <ul>
      <li v-for="item in cariData" :key="item.id">
      {{ item.title }} - {{ item.price }}
      </li>
    </ul>
</template>

<script>
export default {
  name: "computedProperties",
  data() {
    return {
      cari: "",
      products: []
    }
  },
  created() {
    this.products = [
      {id: 1, title: "product 1", price: "1000"},
      {id: 2, title: "product 2", price: "2000"},
      {id: 3, title: "product 3", price: "3000"},
      {id: 4, title: "product 4", price: "4000"},
      {id: 5, title: "product 5", price: "5000"},
    ]
  },
  computed:{
    cariData(){
      return this.products.filter((item)=> {
        return item.title.match(this.cari)
      })
    }
  }
}
</script>

<style>

</style>