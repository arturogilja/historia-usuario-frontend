<template>
  <div class="card">
    <router-link :to="`/product/${idProduct}`">
      <img :src="imageUrl" :alt="title" class="image" />
      <div class="name">{{ name }}</div>
      <div class="price">$ {{ price }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['idProduct', 'name', 'price', 'smallUrl'],
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_BACKEND_URL}${this.smallUrl}`
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.card {
  width: 270px;
  border: 1px rgb(240, 240, 240) solid;
  margin: 20px;
  padding: 10px;
}

.image {
  width: auto;
  max-height: 250px;
}

.name {
  margin-top: 5px;
  font-size: 1.1rem;
}

.price {
  margin-top: 5px;
}
</style>
