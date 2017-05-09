<template>
  <div class="article-list">
    <div v-if="loading" class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>

    <div class="item" v-for="article in articleList">
      <news-item :item="article" />
    </div>

    <div class="centered">
      <div class="ui pagination menu centered">
        <a class="item" @click="$store.commit('SET_CURRENT_PAGE', 1)">&#x219E;</a>
        <a
          v-for="n in pages"
          v-if="currentPage > 4 && n > currentPage - 3 && n < currentPage + 3"
          :class="[(currentPage === n) ? 'active' : '', 'item']"
          @click="$router.push({ name: 'page', params: { page: n } })"
        >
          {{ n }}
        </a>
        <a
          v-for="n in (pages < 5 ? pages : 5)"
          v-if="currentPage <= 4"
          :class="[(currentPage === n) ? 'active' : '', 'item']"
          @click="$router.push({ name: 'page', params: { page: n } })"
        >
          {{ n }}
        </a>
        <a class="item" @click="$store.commit('SET_CURRENT_PAGE', pages)">&#x21A0;</a>
      </div>
    </div>
  </div>
</template>

<script>
  import NewsItem from 'components/Article'
  export default {
    props: ['articles'],
    components: { NewsItem },
    computed: {
      pages() {
        return this.$store.getters.pages
      },
      currentPage() {
        return this.$store.getters.currentPage
      },
      perPage() {
        return this.$store.getters.perPage
      },
      articleList() {
        let start = 0
        let end = this.articles.length

        if (this.currentPage > 1) {
          start = this.perPage * (this.currentPage - 1)
        }

        if (start + this.perPage < end) {
          end = start + this.perPage
        }

        return this.articles.slice(start, end)
      },
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>
  .article-list > .item {
    margin-bottom: 20px;
  }

  .centered {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .ui.pagination.menu .active.item {
    color: #3498db;
  }
</style>
