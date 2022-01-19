<template> 
    <div class="w-full bg-gray-800 py-4  absolute top-0 filter drop-shadow-lg "><router-link to="/" ><img src="title.svg" class="w-3/12 m-auto"></router-link></div>
<div class="w-full h-auto flex absolute top-1/4 overflow-hidden">
 <div class="hidden lg:block lg:w-6/12 lg:h-full lg:px-10"> <router-link to="/store" >
   <img src="store.png" class="w-full h-auto transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
  </router-link></div>
  
  <div class="hidden lg:block lg:w-6/12 lg:h-full lg:px-10"><router-link to="/rent" >
   <img src="rent.png" class=" w-full h-auto  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
   </router-link>
 </div>

           </div>
</template>

<script>
export default { 
    
}
</script>
