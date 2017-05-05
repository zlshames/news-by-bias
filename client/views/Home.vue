<template>
  <div class="page-container">
    <div class="nav-container">
      <div class="brand">News by Bias</div>
    </div>

    <div class="body-container">
      <div class="filter-container">
        <vue-slider
          ref="slider"
          v-model="slider.bias"
          :min="-10"
          :max="10"
          :data="slider.data"
          :piecewise="true"
          :piecewiseLabel="true"
          :piecewiseStyle="slider.piecewiseStyle"
          :clickable="true"
          :processStyle="slider.processStyle"
        ></vue-slider>
      </div>
      <div class="article-container">
        <div class="news-article" v-for="article in articles">
          <news-item :item="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NewsSources from 'config/NewsSources'
  import NewsItem from 'components/Article'
  import VueSlider from 'vue-slider-component'

  export default {
    components: { NewsItem, VueSlider },
    data() {
      return {
        slider: {
          bias: 'Neutral',
          data: [
            'Far Left',
            'Partisan Left',
            'Leans Left',
            'Neutral',
            'Leans Right',
            'Partisan Right',
            'Far Right'
          ],
          piecewiseStyle: {
            width: '12px',
            height: '12px',
            backgroundColor: '#ccc'
          },
          processStyle: {
            backgroundColor: '#ccc'
          }
        }
      }
    },
    watch: {
      'slider.bias': function (value) {
        let val = 0
        if (value === 'Leans Left') {
          val = -2
        } else if (value === 'Partisan Left') {
          val = -4
        } else if (value === 'Far Left') {
          val = -6
        } else if (value === 'Leans Right') {
          val = 2
        } else if (value === 'Partisan Right') {
          val = 4
        } else if (value === 'Far Right') {
          val = 6
        }

        this.$store.dispatch('setBiasFilter', val)
      }
    },
    computed: {
      articles() {
        return this.$store.getters.articles
      }
    },
    async created() {
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
    margin-top: 30px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-container {
    width: 100%;
    height: 60px;
    background-color: #3498db;
    margin-bottom: 15px;
  }

  .filter-container {
    padding: 15px;
    border-radius: 5px;
    width: 60%;
    margin-bottom: 30px;
  }

  .article-container {
    border-radius: 5px;
    width: 75%;
    max-width: 600px;
  }

  .news-article {
    margin-bottom: 15px;
  }

  .brand {
    width: 200px;
    height: 60px;
    color: whitesmoke;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    padding-top: 15px;
  }

  @media only screen and (max-width: 768px) {
    .filter-container {
      width: 90%;
    }

    .article-container {
      width: 95%;
    }
  }
</style>
