<template>
  <div id="app">
    <div>
      <section>
      <nav>
        <router-link class="home" to="/">&nbsp;Home</router-link>
        <router-link class="ativos" to="/ativos">&nbsp;Concluidos</router-link>
      </nav>
    </section>
    </div>
    <router-view />
    </div>
</template>


<script>

</script>


<style>
.home{
  display: contents;
}
.ativos{
  display: contents;
}
</style>