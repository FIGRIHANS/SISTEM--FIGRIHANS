<template>
  <section class="category-selection mt-10 mx-10 max-md:mt-5 max-md:mx-2">
    <!-- Posisi teks berada di sebelah kiri -->
    <div class="flex justify-start">
      <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800">
        All Categories
      </h2>
    </div>
    <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col justify-center">
        
        <!-- Business Category -->
        <div @click="selectCategory('business')" :class="{'selected': selectedCategory === 'business', 'unselected': selectedCategory !== 'business'}" class="category-box flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105 cursor-pointer">
          <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
            <div class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80d01c928cfa58531eb1e50e6a905b627fddf963e05a86a6d537a404cce7bdc1?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" class="object-contain w-full aspect-square" alt="Business category icon" />
            </div>
            <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none">
              Business
            </h3>
            <p class="self-stretch mt-1 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>

        <!-- Startup Category -->
        <div @click="selectCategory('startup')" :class="{'selected': selectedCategory === 'startup', 'unselected': selectedCategory !== 'startup'}" class="category-box flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105 cursor-pointer">
          <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/576cba0d27ba2190bd6bbd54daa12782abddcdfeedf9d5523524e38534114f60?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" class="object-contain w-12 aspect-square fill-orange-50" alt="Startup category icon" />
            <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none">
              Startup
            </h3>
            <p class="self-stretch mt-1 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>

        <!-- Economy Category -->
        <div @click="selectCategory('economy')" :class="{'selected': selectedCategory === 'economy', 'unselected': selectedCategory !== 'economy'}" class="category-box flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105 cursor-pointer">
          <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/637773575d198fc5286fb0be6c342361f8e09c2c7af65a52633043571f3691f2?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" class="object-contain w-12 aspect-[0.98] fill-orange-50" alt="Economy category icon" />
            <h3 class="mt-4 text-3xl font-bold tracking-tighter leading-none">
              Economy
            </h3>
            <p class="self-stretch mt-1 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>

        <!-- Technology Category -->
        <div @click="selectCategory('technology')" :class="{'selected': selectedCategory === 'technology', 'unselected': selectedCategory !== 'technology'}" class="category-box flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform transform hover:scale-105 cursor-pointer">
          <div class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba52a322b7c5a457cb29fe4a75a6b17ffcf005e83c416286b8655f49dfd656f2?placeholderIfAbsent=true&apiKey=a6a4bb1a991e4a4fa4c25aa0ed6e28da" class="object-contain w-12 aspect-[0.96] fill-orange-50" alt="Technology category icon" />
            <h3 class="mt-3.5 text-3xl font-bold tracking-tighter leading-none">
              Technology
            </h3>
            <p class="self-stretch mt-1 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'CategorySelection',
  data() {
    return {
      selectedCategory: ''
    };
  },
  methods: {
    selectCategory(category: string) {  // Menambahkan tipe 'string' untuk parameter 'category'
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
.category-selection {
  display: flex;
  flex-direction: column;
}

.category-box {
  background-color: white; /* Default background */
  color: black; /* Default text color */
  border: solid 1px #a0aec0; /* Default border color */
}

.category-box.selected {
  background-color: #3b82f6; /* Blue background when selected */
  color: white; /* White text when selected */
  border-color: #3b82f6; /* Blue border when selected */
}

.category-box.unselected h3,
.category-box.unselected p {
  color: black; /* Black text for unselected boxes */
}
</style>