<template>
<div class="w-full h-screen bg-white-500 flex">

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
