<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue'
  import JoinOurTeam from '@/components/JoinOurTeam.vue';
</script>

<template>
  <MainLayout>
    
    <div class="container mx-auto py-10 pl-[450px] pr-20 flex flex-col items-start gap-5 text-left">
      <section class="flex items-center gap-5 text-base text-gray-600">
  <div class="flex items-center gap-3">
    <router-link to="/author" class="flex items-start gap-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/830a66a5a38a6ee455158585ade9629a597165cac806aa06f0f7c3f150c67226?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
        alt="Andrew Johnson's profile picture"
        class="w-12 h-12 rounded-full object-cover"
      />
      <div class="flex flex-col leading-tight">
        <span class="text-amber-500 font-semibold text-2xl">Andrew Johnson</span>
        <span class="text-gray-500 text-base">Posted on 27th January 2022</span>
      </div>
    </router-link>
  </div>
</section>

  <h2 class="mt-6 mb-0 text-5xl font-bold tracking-tight text-gray-900 leading-tight max-w-2xl">
    Step-by-step guide to choosing great font pairs
  </h2>

  <div class="flex items-center gap-3 mt-3 text-lg text-gray-600">
    <img loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/26c5bd907dfe56a149dc01d52e61fda38625fe5777e80e9a94b720bdff9b18ec?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
      alt="Startup icon"
      class="w-6 h-6" />
    <span>Startup</span>
  </div>
</div>

<div class="flex justify-center mt-16 max-md:mt-10">
  <img loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed86b5f338df63527d72f7570e20f6aa1b2e2dac87bb4611ea9cc3579eb115b6?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da"
    alt="Illustration related to font pairing"
    class="object-contain max-w-[calc(100%-12rem)] mx-48 aspect-[2.2] max-md:max-w-full" />
</div>

<article class="mt-16 max-w-[843px] max-md:mt-10 max-md:max-w-full mx-auto px-8">
  <h3 class="text-4xl font-bold tracking-tighter leading-10 text-gray-800 mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </h3>
  <p class="text-base leading-7 text-zinc-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
    leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </p>

  <h3 class="mt-12 text-4xl font-bold tracking-tighter leading-10 text-gray-800 mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </h3>
  <p class="text-base leading-7 text-zinc-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
    leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </p>
  <p class="mt-6 text-base leading-7 text-zinc-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
    leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </p>

  <ul class="mt-6 text-2xl font-bold leading-none text-gray-900 opacity-[0.78] max-md:ml-2.5 list-disc list-inside">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Non blandit massa enim nec scelerisque</li>
    <li>Neque egestas congue quisque egestas</li>
  </ul>

  <p class="mt-6 text-base leading-7 text-zinc-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
    leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </p>

  <h3 class="mt-12 text-4xl font-bold tracking-tighter leading-10 text-gray-800 mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </h3>
  <p class="text-base leading-7 text-zinc-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
    at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
    leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
  </p>
</article>

<section data-layername="otherPosts" class="flex flex-col pt-32 px-32"> <!-- Menambah jarak atas, kiri, dan kanan menjadi 8 rem -->
    <div class="max-md:max-w-full mx-auto">
      <div class="flex gap-5 max-md:flex-col">
        <article data-layername="column" class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow items-start font-bold text-gray-800 max-md:mt-8">
            <h2 data-layername="whatToReadNext" class="text-4xl tracking-tighter leading-none text-center text-black">
              What to read next
            </h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e0c45287e14f1eeaa715d324fd47f35e26aab39858a3845941f23120302be3f?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" alt="Article preview image" class="object-contain self-stretch mt-16 w-full aspect-[1.27] max-md:mt-10" />
            <p data-layername="byJohnDoeLAug232021" class="mt-8 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
            </p>
            <h3 data-layername="aUxCaseStudyCreatingAStudiousEnvironmentForStudents" class="mt-4 text-3xl tracking-tighter leading-10">
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="self-stretch mt-4 text-base leading-7 opacity-70">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </article>
        <article data-layername="column" class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dfc8a2960aec1f3548774effbc700482b719f3c81f4db1ae09aa96fcc7bbe72?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" alt="Article preview image" class="object-contain w-full aspect-[1.27]" />
            <p data-layername="byJohnDoeLAug232021" class="self-start mt-8 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
            </p>
            <h3 data-layername="aUxCaseStudyCreatingAStudiousEnvironmentForStudents" class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10">
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 text-base leading-7 opacity-70">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </article>
        <article data-layername="column" class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff5749968dbba591b0a141bd8ad64c0420f48eef84a525065bcb26dc056b5737?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" alt="Article preview image" class="object-contain w-full aspect-[1.27]" />
            <p data-layername="byJohnDoeLAug232021" class="self-start mt-8 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
            </p>
            <h3 data-layername="aUxCaseStudyCreatingAStudiousEnvironmentForStudents" class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10">
              A UX Case Study Creating a Studious Environment for Students:
            </h3>
            <p data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident" class="mt-4 text-base leading-7 opacity-70">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </article>
      </div>
    </div>
    <hr data-layername="divider" class="mt-16 w-full border border-solid opacity-30 bg-zinc-500 border-zinc-500 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
</section>


    <JoinOurTeam />

  </MainLayout>
</template>
