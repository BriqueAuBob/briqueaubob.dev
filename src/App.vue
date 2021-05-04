<template>
  <Navigation/>
  <div>
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
export default { 
  components: { Navigation, Footer },
}
</script>