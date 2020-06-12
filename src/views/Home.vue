<template>
  <section>
    <product-item
      v-for="product in products"
      :key="product.id"
      :idProduct="product.id"
      :smallUrl="product.image.smallUrl"
      :name="product.name"
      :price="product.price"
    >
    </product-item>
  </section>
</template>

<script>
import { getProducts } from '../services/products'
import ProductItem from '../components/ProductItem.vue'
export default {
  name: 'Home',
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    }
  },
  components: {
    ProductItem,
  },
  mounted() {
    getProducts().then((response) => {
      if (response === 'Error') this.error = 'Ha habido un error'
      else if (response.success) this.products = response.products
      this.loading = false
    })
  },
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
