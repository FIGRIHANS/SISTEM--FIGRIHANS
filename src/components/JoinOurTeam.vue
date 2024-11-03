<template>
    <section class="flex flex-col items-center font-bold max-w-[407px] mx-auto mb-24 mt-24">
      <h2 class="z-10 self-stretch mt-0 w-full text-4xl tracking-tighter leading-10 text-center text-gray-800">
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600" @click="handleJoinNow">
        Join Now
      </button>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'JoinOurTeam',
    methods: {
      handleJoinNow() {
        // Handle join now button click
        console.log('Join Now clicked');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan CSS kustom jika diperlukan */
  </style>
  