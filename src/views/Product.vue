<template>
  <section>
    <template v-if="!loading">
      <div class="mobile mobile-name name">{{ product.name }}</div>
      <div class="img-container">
        <img :src="imageUrl" :alt="product.name" />
      </div>
      <div class="data">
        <div class="name desktop">{{ product.name }}</div>
        <div class="description">{{ product.description }}</div>
        <div class="price">${{ product.price }}</div>
        <div class="return">
          <router-link to="/">Regresar</router-link>
        </div>
      </div>
    </template>
    <loader v-if="loading"></loader>
  </section>
</template>

<script>
import Loader from '../components/Loader.vue'
import { getOneProduct } from '../services/products'
export default {
  name: 'Product',
  components: {
    Loader,
  },
  data() {
    return {
      product: {},
      loading: true,
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_BACKEND_URL}${this.product.image.bigUrl}`
    },
  },
  mounted() {
    const { id } = this.$route.params
    getOneProduct(id).then((response) => {
      if (response === 'Error') this.error = 'Ha habido un error'
      else if (response.success) this.product = response.product
      else if (response.data.error.code === 1) this.$router.push('/404')
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
  min-height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
}

.img-container {
  width: 30%;
  text-align: center;
}

.img-container img {
  height: 50vh;
  min-height: 300px;
}

.data {
  width: 70%;
  padding: 50px;
}

.name {
  font-size: 2.2rem;
  font-weight: 600;
}

.description {
  font-size: 1.5rem;
  margin: 10px 0;
}

.return {
  margin-top: 20px;
}

.return a {
  text-decoration: none;
  font-size: 1.1rem;
  color: rgb(20, 20, 20);
}

.price {
  font-size: 1.2rem;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 1000px) {
  section {
    display: block;
  }
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  .mobile-name {
    width: 100%;
    height: 60px;
    font-size: 1.8rem;
    margin-top: 15px;
  }

  .img-container {
    width: 100%;
  }

  .img-container img {
    width: 35%;
    height: auto;
    min-height: unset;
  }

  .data {
    width: 100%;
  }
}
</style>
