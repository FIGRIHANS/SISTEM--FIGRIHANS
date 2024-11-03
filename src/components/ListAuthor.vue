<template>
  <section class="flex flex-col mt-10 mx-10 max-md:mt-5 max-md:mx-2">
    <h1 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      List of Authors
    </h1>
    <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article
          v-for="author in authors"
          :key="author.id"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
        >
          <div
            :class="[ 
              'flex flex-col grow items-center px-14 py-10 w-full leading-none', 
              author.backgroundColor, 
              'max-md:px-5 max-md:mt-8' 
            ]"
          >
            <img
              :src="author.image"
              :alt="author.name"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              {{ author.name }}
            </h2>
            <p class="self-stretch text-sm text-center text-zinc-500">
              {{ author.role }}
            </p>
            <img
              :src="author.rating"
              alt="Author rating"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AuthorList',
  data() {
    return {
      authors: [
        {
          id: 1,
          name: 'Floyd Miles',
          role: 'Content Writer @Company',
          image:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/9a08ac807213d9627fd7596c3e46ac3eb0e08d4f8417cb8b287915d18f59c9b0?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          rating:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/09a88f81cc0d34fc73371b645301327e80b848b0626824645f0ebf4828f2f0e3?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          backgroundColor: 'bg-zinc-100',
        },
        {
          id: 2,
          name: 'Dianne Russell',
          role: 'Content Writer @Company',
          image:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/e22bc8df8cd660950385732d863cfe8a46f88897df05f7505ee7e97e51005442?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          rating:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/12b87b1b845b0a7a9cfa9ec45763bdb92babf8cad620f55be84c032b9952ce97?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          backgroundColor: 'bg-orange-50',
        },
        {
          id: 3,
          name: 'Jenny Wilson',
          role: 'Content Writer @Company',
          image:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/431ba0a554f76db4c1d3c76b098c205bdd0514c081424011e52b03ec1dacf10c?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          rating:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5151de622b80684d3b6c7cfea11ea4417f57873acdfec275af9c3fda088af?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          backgroundColor: 'bg-zinc-100',
        },
        {
          id: 4,
          name: 'Leslie Alexander',
          role: 'Content Writer @Company',
          image:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          rating:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/a383950e58b3b43c7792e19c25bce56400bba1efe2c62c791593df0c14af14e8?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da',
          backgroundColor: 'bg-zinc-100',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Tambahkan CSS kustom jika diperlukan */
</style>
