<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue'
  import ChooseCategory from '@/components/ChooseCategory.vue';
  import ListAuthor from '@/components/ListAuthor.vue';
  import JoinOurTeam from '@/components/JoinOurTeam.vue';
</script>

<template>
  <MainLayout>
    <section
      class="flex relative flex-col self-stretch w-full text-base font-bold text-white min-h-[720px] max-md:max-w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4825d3d5ed009d5bf167b4ce1d86a8ae5e428d3b7ca42ea9f792ba5b0347e7c7?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Background image for hero section" class="object-cover absolute inset-0 size-full" />
      <div class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <p class="font-semibold leading-none uppercase tracking-[3px]">
          <span class="font-medium">Posted on</span>
          <span class="font-black">startup</span>
        </p>
        <h1
          class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="mt-6 leading-7 text-blue-600">
          By <span class="text-blue-600">James West</span> | May 23, 2022
        </p>
        <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <a href="#read-more"
          class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 max-md:px-5 max-md:mt-10 max-md:mb-2.5">Read
          More &gt;</a>
      </div>
    </section>

    <section class="flex flex-col self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div
        class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
        <h2 class="tracking-tighter">Featured Post</h2>
        <h2 class="tracking-tighter">All Posts</h2>
        <a href="#view-all" class="my-auto text-base leading-7 text-amber-300">View All</a>
      </div>
      <div class="mt-10 max-md:max-w-full">
        <div class="flex gap-16 max-md:flex-col">
          <!-- Menambah jarak antar elemen utama menjadi dua kali lipat -->
          <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c651b39fb6730526c376a0d7d125fa0443fc8b0fa3d16aa41cb74d28393efb65?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
                alt="Featured post image" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
              <p class="mt-6 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </p>
              <h3 class="self-stretch mt-3 text-3xl tracking-tighter leading-9 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p class="mt-3 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <a href="#read-more"
                class="gap-3 px-10 py-3 mt-6 text-lg leading-none text-white bg-blue-600 max-md:px-5">Read More &gt;</a>
            </div>
          </article>
          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow gap-14 max-md:mt-8 max-md:max-w-full">
              <!-- Menambah jarak antar artikel samping menjadi dua kali lipat -->
              <article class="flex flex-col items-start py-6 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article class="flex flex-col items-start py-6 pr-20 pl-8 bg-orange-50 max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article class="flex flex-col items-start py-6 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article class="flex flex-col items-start py-6 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
            </div>
          </aside>
        </div>
      </div>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Decorative image"
        class="object-contain self-end mt-32 aspect-[45.45] max-w-[1061px] w-[1061px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full" />
    </section>

    <section class="mx-10 px-20 py-24 bg-gray-100 max-md:mx-2 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">ABOUT US</h2>
            <p class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
              We are a community of content writers who share their learnings
            </p>
            <p class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="#read-more" class="self-start mt-7 text-lg leading-8 text-amber-300">Read More &gt;</a>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our mission</h2>
            <p class="mt-6 text-3xl font-bold tracking-tighter leading-10">
              Creating valuable content for creatives all around the world
            </p>
            <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <router-link to="/category" class="flex flex-col text-base font-semibold leading-none text-amber-300">
      <ChooseCategory />
    </router-link>

    <section
      class="relative flex items-center justify-end min-h-[705px] pt-32 mt-32 max-md:pt-24 max-md:px-5 max-md:mt-10">
      <!-- Background Image -->
      <div class="absolute inset-0 w-[70%] h-full overflow-hidden left-[5%]">
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cf3d6450165144a0ef4eb8b2d9b1fa459630d3402d8949bbfde1d779507d11?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
          alt="Background image for Why We Started section" class="object-cover w-full h-full" />
      </div>

      <!-- Content Container -->
      <div
        class="relative flex flex-col p-20 bg-white w-[60%] max-w-[40%] mr-[5%] shadow-lg z-10 max-md:px-5 max-md:w-full">
        <h2 class="self-start font-semibold text-gray-800 uppercase tracking-[3px]">Why we started</h2>
        <p class="mt-6 text-5xl font-bold text-gray-800 leading-[64px] max-md:text-4xl max-md:leading-[60px]">
          It started out as a simple idea and evolved into our passion
        </p>
        <p class="mt-4 text-zinc-500 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <a href="#discover-story" class="self-start px-12 py-4 mt-8 text-lg text-white bg-blue-600 max-md:px-5">Discover
          our story &gt;</a>
      </div>
    </section>



    <ListAuthor />

    <section
      class="flex flex-wrap gap-10 mt-24 w-full max-w-[1237px] text-zinc-500 max-md:mt-10 max-md:max-w-full mx-auto">
      <div class="flex flex-col items-center text-center">
        <p class="self-start text-sm leading-none opacity-60">We are</p>
        <h2 class="text-2xl font-bold leading-none">Featured in</h2>
      </div>
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4423d4f8991ccfa21577df9ae7b50e9b509e52e49d996e0e7f1d48cd67173bf3?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Featured in logos"
        class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full" />
    </section>



    <section class="bg-white px-[80px] py-[40px]">
      <div class="bg-x-lightyellow flex justify-between gap-[40px] p-[112px]">
        <div class="w-[40%] flex flex-col gap-4">
          <h5 class="text-x-black font-semibold leading-[20px] tracking-[3px]">
            TESTIMONIALS
          </h5>
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">
            What people say about our blog
          </h2>
          <p class="text-x-black leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div
          class="w-[60%] flex flex-col justify-between gap-[112px] ps-[80px] border-s border-x-mediumgrey border-opacity-40">
          <h4 class="text-x-black text-xl font-bold leading-[32px] pe-[56px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div class="flex justify-between items-center">
            <div class="flex items-center justify-center gap-4">
              <img src="../assets/images/misc/Home/Profile picture.png" alt="Man with glasses" />
              <div>
                <h4 class="text-x-black text-xl font-bold leading-[32px]">
                  Jonathan Vallen
                </h4>
                <p class="text-x-mediumgrey leading-[28px]">New york, USA</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>

    <JoinOurTeam />

  </MainLayout>
</template>