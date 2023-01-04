<template>
  <nav>
    <router-link to="/">Data and Method</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/two-way-data-binding">Two Way Data Binding</router-link> |
    <router-link to="/conditions-and-loops">Conditions And Loops</router-link> |
    <router-link to="/lifecycle-hooks">Lifecycle Hooks</router-link> |
    <router-link to="/computed-properties">Computed Properties</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
