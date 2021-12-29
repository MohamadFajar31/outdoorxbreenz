<template> 

 <div class="hidden lg:block lg:w-5/12 lg:h-full">
<img src="kemeja.png" class="w-full h-full">
</div>

 <div class="w-full p-10 lg:w-7/12 h-full bg-white-900 px-16 pt-12">
  <img src="brend.png" class="lg:w-full lg:w-1/2 h-auto m-auto"> 
  
   <button class="w-9/12 m-auto absolute bottom-6 lg:bottom-1/4 lg:bottom-6/12 w-6/12 bg-gray-800 text-white  py-5 2xl:py-11 text-3xl rounded-2xl font-medium filter drop-shadow-xl"> 
     Get Started</button>
 
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
