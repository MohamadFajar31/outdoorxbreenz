<template>
<div class="w-full h-screen bg-white flex">
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
