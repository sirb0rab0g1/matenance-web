<template>
<about-us></about-us>
</template>

<script>
  import GlobalDummy from '~/plugins/mixins/global_dummy'

  export default {
    mixins: [
      GlobalDummy
    ],
    transition: 'slide'
  }
</script>
