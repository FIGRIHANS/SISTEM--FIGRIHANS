<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="flex items-center justify-center min-h-screen px-4 mb-8">
      <div class="w-full max-w-3xl">
        <section class="mt-32 max-md:mt-10">
          <h2 class="text-base font-black leading-none text-center text-gray-800 uppercase tracking-[3px]">
            Contact us
          </h2>
          <h1 class="mt-3 text-5xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full max-md:text-4xl">
            Let's Start a Conversation
          </h1>
          <p class="mt-6 text-base leading-7 text-center text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </section>

        <section class="px-16 py-12 mt-16 max-w-full bg-amber-300 max-md:px-5 max-md:mt-10">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
                <h3 class="text-sm leading-none opacity-60">Working hours</h3>
                <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                <p class="mt-4 font-bold">Monday To Friday</p>
                <p class="font-bold">9:00 AM to 8:00 PM</p>
                <p class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
                <h3 class="text-sm leading-none opacity-60">Contact Us</h3>
                <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                <p class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905</p>
                <p class="text-base leading-7 opacity-60">hello@finsweet.com</p>
              </div>
            </div>
          </div>
        </section>

        <form class="mt-8 w-full">
          <label for="fullName" class="sr-only">Full Name</label>
          <input id="fullName" type="text" placeholder="Full Name" class="gap-2.5 self-stretch p-6 mt-8 max-w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full" />

          <label for="email" class="sr-only">Your Email</label>
          <input id="email" type="email" placeholder="Your Email" class="gap-2.5 self-stretch p-6 mt-4 max-w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full" />

          <div class="flex flex-wrap gap-4 items-center mt-3.5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap w-full">
            <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px]">
              <label for="province" class="sr-only">Province</label>
              <select id="province" class="w-full bg-transparent">
                <option value="">Province</option>
              </select>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
            </div>
            <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px]">
              <label for="city" class="sr-only">City</label>
              <select id="city" class="w-full bg-transparent">
                <option value="">City</option>
              </select>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
            </div>
          </div>

          <label for="message" class="sr-only">Message</label>
          <textarea id="message" placeholder="Message" class="gap-2.5 px-6 pt-6 pb-24 mt-5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] w-full"></textarea>

          <button type="submit" class="px-16 py-4 mt-4 max-w-full text-2xl font-bold leading-none text-gray-800 bg-blue-600 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>
