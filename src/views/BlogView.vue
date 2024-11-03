<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue'
  import AllCategories from '@/components/AllCategories.vue';
  import JoinOurTeam from '@/components/JoinOurTeam.vue';
</script>

<template>
  <MainLayout>
    <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <router-link to="/blogpost" class="flex flex-col text-base font-semibold leading-none text-amber-300">
          <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
            <p class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</p>
            <h1
              class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p class="mt-4 text-sm leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> l May 23, 2022
            </p>
            <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5">
              Read More &gt;
            </button>
          </div>
        </router-link>
        </article>
        <aside class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d8e2ad51b83243c6a1b8dc7a5ef0551de55869448857de5ea983f125477ec0?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
            alt="Featured post illustration"
            class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full" />
        </aside>
      </div>
    </section>


    <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">All posts
      </h2>
      <hr class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full" />
      <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Blog post image 1" class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/166941846cc8a759998da1832ed117e392c3a909fb28a336b9a5dcca1aa8c9a3?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Blog post image 2"
                class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cfeccf80166a1a1e1a67e39fb048144c2077f71940df4513cedf2d316b6abdb?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Blog post image 3"
                class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe6bc17e39e42108cfc446ef3fd97e7f17a962c19271f726d02e325ad5f94701?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Blog post image 4"
                class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0be6a1f9097cb952a5de7feb721005b8d46fa8df024af017b76dc4b028d480?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Blog post image 5"
                class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
              <router-link to="/category" class="flex flex-col text-base font-semibold leading-none text-amber-300">
                <p class="self-start uppercase tracking-[3px]">Startup</p>
                <h3
                  class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  Design tips for designers that cover everything you need
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
                <p class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">Business</p>
                <h3
                  class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  How to build rapport with your web design clients
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
                <p class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">Startup</p>
                <h3
                  class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  Logo design trends to avoid in 2022
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
                <p class="self-start mt-48 uppercase tracking-[3px] max-md:mt-10">Technology</p>
                <h3
                  class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  8 Figma design systems you can downloa2d for free today
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
                <p class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">Economy</p>
                <h3
                  class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  Font sizes in UI design: The complete guide to follow
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="flex gap-5 justify-between self-center mt-16 ml-7 max-w-full font-bold text-center w-[185px] max-md:mt-10">
        <a href="#" class="my-auto text-2xl leading-none text-zinc-500">&lt; Prev</a>
        <a href="#" class="text-3xl tracking-tighter leading-none text-gray-800">Next &gt;</a>
      </nav>
    </section>

    <AllCategories />
    <JoinOurTeam />
  </MainLayout>
</template>
