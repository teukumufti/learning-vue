<template>
  <!-- this conditions in vue js -->
  <div v-if="products.length">
    <ul>
      <!-- this loops in vue js -->
      <li v-for="item in products" :key="item.id">
      {{ item.title }} - {{ item.price }}
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>No data found</h1>
  </div>
</template>

<script>
export default {
  name: 'conditionsAndLoops',
  data() {
    return {
      products: [
      {id: 1, title: "product 1", price: "1000"},
      {id: 2, title: "product 2", price: "2000"},
      {id: 3, title: "product 3", price: "3000"},
      {id: 4, title: "product 4", price: "4000"},
      {id: 5, title: "product 5", price: "5000"},
      ]
    }
  }
}
</script>

<style>

</style>