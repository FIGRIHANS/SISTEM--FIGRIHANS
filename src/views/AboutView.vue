<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue'
  import ListAuthor2 from '@/components/ListAuthor2.vue'
  import JoinOurTeam from '@/components/JoinOurTeam.vue';
</script>

<template>
  <MainLayout>
    <section class="flex flex-col self-stretch px-20 w-full max-md:px-5 max-md:max-w-full">
      <article class="z-10 self-end mr-32 w-full max-w-[1133px] max-md:mr-2.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <header data-layername="background"
              class="flex flex-col grow items-start p-16 w-full text-gray-800 bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <h1 data-layername="aboutUs" class="text-base font-medium leading-none uppercase tracking-[3px]">ABOUT US
              </h1>
              <p data-layername="weAreATeamOfContentWritersWhoShareTheirLearnings"
                class="mt-4 text-5xl font-bold tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                We are a team of content writers who share their learnings
              </p>
            </header>
          </div>
          <div class="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <p data-layername="description"
              class="self-stretch my-auto text-base leading-7 text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </article>

      <section
        class="flex relative flex-col -mt-16 items-start px-20 pt-[300px] min-h-[444px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="../assets/images/misc/AboutUs/heroabout.png"
          alt="Background image showing company statistics" class="object-cover absolute inset-0 size-full" />
        <div class="flex relative flex-col max-w-full w-[862px]">
          <div data-layername="statistics" class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
            <div class="flex gap-5 max-md:flex-col">
              <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <h2 data-layername="blogs"
                    class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
                    12+</h2>
                  <p data-layername="blogsPublished" class="text-base leading-7">Blogs Published</p>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <h2 data-layername="views"
                    class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
                    18K+</h2>
                  <p data-layername="viewsOnFinsweet" class="text-base leading-7">Views on Finsweet</p>
                </div>
              </article>
              <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <h2 data-layername="users"
                    class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl">
                    30K+</h2>
                  <p data-layername="totalActiveUsers" class="text-base leading-7">Total active Users</p>
                </div>
              </article>
            </div>
          </div>
          <div class="flex gap-px">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc96f499ca32af7118424249567bcb1bf42a3e1d0414b47cbcdd9ef2d9dc2cd?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
              alt="" class="object-contain grow-0 shrink-0 aspect-[13.51] basis-auto w-auto" />
            <div data-layername="shape" class="flex-none max-w-full bg-amber-300 h-[23px] w-[550px]"></div>
          </div>
        </div>
      </section>

      <section data-layername="mission-vision"
        class="flex flex-col items-center px-16 pt-32 pb-20 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div class="w-full max-w-[1053px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">
                  Our Mission</h2>
                <h3 data-layername="missionTitle" class="mt-6 text-3xl font-bold tracking-tighter leading-10">Creating
                  valuable content
                  for creatives all around the world</h3>
                <p data-layername="missionDescription"
                  class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
                  viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </article>
            <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 data-layername="ourVision" class="font-semibold leading-none uppercase tracking-[3px]">
                  Our Vision</h2>
                <h3 data-layername="visionTitle" class="mt-6 text-3xl font-bold tracking-tighter leading-10">A platform
                  that empowers
                  individuals to improve</h3>
                <p data-layername="visionDescription"
                  class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
                  viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>

    <section class="mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full mx-auto">
  <div class="flex gap-5 max-md:flex-col">
    <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">Our team of creatives</h2>
        <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p class="mt-4 text-base leading-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat.
        </p>
      </div>
    </div>
    <div class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/209cea4fe3d9e717472696012448afc1588578827fcd02ffb1ba99d8437fa9bd?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Our team of creatives"
        class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full" />
    </div>
  </div>
</section>

<section class="mt-32 w-full max-w-[1207px] max-md:mt-10 max-md:max-w-full mx-auto">
  <div class="flex gap-5 max-md:flex-col">
    <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6cba920407dd7f10ad9f12e05252b59b895adba0200a2508c75fa5c5f38f6c?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Why we started this blog"
        class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full" />
    </div>
    <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">Why we started this Blog</h2>
        <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p class="mt-4 text-base leading-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat.
        </p>
      </div>
    </div>
  </div>
</section>


    <ListAuthor2 />

    <JoinOurTeam />

  </MainLayout>
</template>