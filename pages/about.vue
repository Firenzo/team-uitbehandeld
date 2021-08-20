<template>
<div>
  <PageHeaderMobile />
  <PageFooter />
  <h1>Hulpvraag</h1>
  <p></p>
</div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Team Uitbehandeld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'informatie voor uitbehandelde mensen en hun families'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @use "styles/main";
</style>
