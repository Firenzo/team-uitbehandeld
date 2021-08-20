<template>
<div class="content">
  <client-only><PageHeader v-if="window.innerWidth >= 1250" />
  <PageHeaderMobile v-else />
  </client-only>
  <PageFooter />
</div>
</template>

<script>
export default {}

</script>

<style lang="scss">
@use "styles/main";
</style>
