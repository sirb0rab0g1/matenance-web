<template>
<faq-template></faq-template>
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
