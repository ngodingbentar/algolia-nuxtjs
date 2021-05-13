<template>
<span>
  <div class="px-16 pt-8 ">
    <ais-instant-search :search-client="searchClient" index-name="wilayah">
      <p class="text-center font-bold text-2xl">Algolia</p>
      <!-- <button @click="cek">cek</button> -->
      <ais-search-box class="pb-8 pt-4" />
      <div class="min-h-screen">
        <ais-hits>
          <div slot="item" slot-scope="{ item }">
            <!-- <h2>{{ item.city_name }}</h2> -->
            <div class="hit-city_name font-bold">
              Kota : <ais-highlight attribute="city_name" :hit="item"></ais-highlight>
            </div>
            <div class="hit-province">
              Provinsi : <ais-highlight attribute="province" :hit="item"></ais-highlight>
            </div>
          </div>
        </ais-hits>
        <div class="justify-center text-center flex py-8">
          <ais-pagination />
        </div>
      </div>
    </ais-instant-search>
  </div>
</span>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

export default {
  name: 'Algolia',
  components: {
  },
  setup(){
    const searchClient = algoliasearch(
      process.env.algoliaAppId,
      process.env.algoliaPublicKey
    )
    return {
      searchClient,
    }

  }
}
</script>

<style>
</style>
