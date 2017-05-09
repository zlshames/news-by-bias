<template>
  <div class="page-container">
    <navigation class="nav" />

    <div class="body-container">
      <div class="filter-container">
        <filters />
      </div>
      <div class="article-container">
        <article-list :articles="articles" />
      </div>
    </div>

    <foot-menu />
  </div>
</template>

<script>
  import NewsSources from 'config/NewsSources'
  import ArticleList from 'components/ArticleList'
  import Filters from 'components/Filters'
  import Navigation from 'components/Navigation'
  import FootMenu from 'components/Footer'

  export default {
    components: {
      ArticleList,
      Filters,
      Navigation,
      FootMenu
    },
    computed: {
      articles() {
        return this.$store.getters.articles
      },
      isMobile() {
        return !(window.innerWidth < 786)
      }
    },
    watch: {
      '$route': function() {
        if (this.$route.params.page && this.$route.params.page > 0) {
          this.$store.commit('SET_CURRENT_PAGE', this.$route.params.page)
        }
      }
    },
    async created() {
      if (this.$route.params.page && this.$route.params.page > 0) {
        this.$store.commit('SET_CURRENT_PAGE', this.$route.params.page)
      }

      // Fetch news from all sources
      for (let key in NewsSources) {
        this.fetchNews(key)
      }
    },
    methods: {
      async fetchNews(source) {
        const query = `https://newsapi.org/v1/articles?source=${ source }&sortBy=top&apiKey=50d30d5097d94f9bb58b0b62579188e9`
        const res = await fetch(query)
        const body = await res.json()

        if (body.status === 'ok') {
          this.$store.dispatch('addArticles', { articles: body.articles, source })
        }
      }
    }
  }
</script>

<style scoped>
  .body-container {
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .filter-container {
    border-radius: 5px;
    width: 650px;
    margin-bottom: 20px;
  }

  .article-container {
    border-radius: 5px;
    width: 650px;
  }

  @media only screen and (max-width: 768px) {
    .filter-container {
      width: 95%;
    }

    .article-container {
      width: 95%;
    }
  }
</style>
