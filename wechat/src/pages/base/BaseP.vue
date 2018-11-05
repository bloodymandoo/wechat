<template>
  <div class="content">
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Section from '@/components/common/Section'
import Footer from '@/components/common/Footer'
export default {
  name: 'BaseP',
  components: {
    Header,
    Footer,
    Section
  }
}
</script>

<style scoped>
.content{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
