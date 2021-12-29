<template>
<div class="w-full h-screen bg-white flex overflow-hidden">
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
