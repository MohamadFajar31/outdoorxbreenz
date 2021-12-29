<template> 
<div class="w-full h-full flex">
  <div class="hidden lg:block lg:w-5/12 lg:h-full">
   <img src="first.png" class="w-full h-full">
  </div>
  
   <div class="w-full p-10 lg:w-7/12 h-full lg:px-16 pt-12 ">
    
   <img src="brend.png" class="w-full lg:w-1/2 h-auto m-auto "> 
    <router-link to="/test"  class="w-9/12 m-auto absolute bottom-6 lg:bottom-1/4 lg:w-6/12  bg-gray-800 text-white py-5 2xl:py-16 text-3xl rounded-2xl font-medium filter drop-shadow-xl text-center">
      Get Started</router-link>
  </div>
</div>
 
</template>

<script>
export default { 

}
</script>
