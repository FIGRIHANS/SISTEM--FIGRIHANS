<template>
    <section class="author-list">
      <h1 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 text-center">
        List of Authors
      </h1>
      <div class="mt-12 w-full max-w-5xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="author in authors"
          :key="author.id"
          :class="['flex flex-col items-center px-8 py-10 rounded-lg shadow-md', author.backgroundColor]"
        >
          <img :src="author.imageSrc" :alt="author.name" class="w-24 h-24 rounded-full object-cover" />
          <h2 class="mt-4 text-xl font-semibold text-gray-800 text-center">
            {{ author.name }}
          </h2>
          <p class="text-sm text-zinc-500 text-center mt-2">
            {{ author.role }}
          </p>
          <div class="flex justify-center gap-2 mt-4">
            <!-- Add social media icons here, replace with real links/icons if needed -->
            <span class="text-gray-600 hover:text-gray-800"><i class="fab fa-facebook"></i></span>
            <span class="text-gray-600 hover:text-gray-800"><i class="fab fa-twitter"></i></span>
            <span class="text-gray-600 hover:text-gray-800"><i class="fab fa-instagram"></i></span>
            <span class="text-gray-600 hover:text-gray-800"><i class="fab fa-linkedin"></i></span>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AuthorList',
    data() {
      return {
        authors: [
          { id: 1, name: 'Floyd Miles', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a08ac807213d9627fd7596c3e46ac3eb0e08d4f8417cb8b287915d18f59c9b0?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 2, name: 'Dianne Russell', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e22bc8df8cd660950385732d863cfe8a46f88897df05f7505ee7e97e51005442?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-orange-50' },
          { id: 3, name: 'Jenny Wilson', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/431ba0a554f76db4c1d3c76b098c205bdd0514c081424011e52b03ec1dacf10c?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 4, name: 'Leslie Alexander', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 5, name: 'Guy Hawkins', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/89e9cd620871b328c84c60f933686e698169cc62e471800ebf80498763adc9f3?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 6, name: 'Eleanor Pena', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48cec530a46ec7e0ffcfdced1155b13d3454f9e8c9e9ac190e85822948127d30?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 7, name: 'Robert Fox', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81bf49d815710eda179f1e9c6001331a9e21a21f2746ed0447604362101188fe?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
          { id: 8, name: 'Jacob Jones', role: 'Content Writer @Company', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14208b7976a6fdce9b1b9a8c8c46911b88a88ea478efc5ce8bc9b13e80ed1615?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da', backgroundColor: 'bg-zinc-100' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .author-list {
    padding: 2rem;
  }
  </style>
  