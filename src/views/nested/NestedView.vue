<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name:'NestedOne', replace:true}">NestedOne</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name:'NestedTwo', replace:true}">NestedTwo</RouterLink>
      </li>
      <hr class="my-4" />
      <RouterView />
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>