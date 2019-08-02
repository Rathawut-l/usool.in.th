<template>
  <div :class="{ tip: true, 'custom-block': true, 'text-center': center, 'text-bold': bold }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IQuote',
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
