<template>
  <div class="error min-h-screen text-center justify-center center items-center">
    <div>
      <NuxtLink to="/">
        <button class="back focus:outline-none">Home Page</button>
      </NuxtLink>
    </div>
    <div class="gambar text-center justify-center center items-center">
      <img src="/404light.svg" />
    </div>
  </div>
</template>

<script>
  import { computed, ref, useAsync, useContext } from '@nuxtjs/composition-api'
  export default {
    props: ['error'],
    layout: 'error',
    setup(){

      return {
      }
    }
  }
</script>

<style lang="postcss" scoped>
.back {
  @apply py-2 px-4 mt-8 mb-16 rounded-xl text-xl;
}

.gambar {
  display: flex;
}
.error {
  @apply pt-16 px-16;
}

.error img {
  width: 60%;
}
.darkTheme{
  .box:hover{
    background: rgb(61, 81, 94);
  }
}
.lightTheme{
  .box:hover {
    background: #f1f1f1;
  }
}

@screen tablet {
  .main {
    @apply pt-28;
  }
}
@screen mobile {
  .error {
    @apply px-2;
  }
  .back {
    @apply mt-0 mb-8 rounded-xl text-sm;
  }

}
</style>