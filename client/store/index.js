import Vue from 'vue'
import Vuex from 'vuex'

import NewsSources from 'config/NewsSources'

Vue.use(Vuex)

const state = {
  articles: [],
  filteredArticles: [],
  bias: 0,
  pages: 1,
  perPage: 10,
  currentPage: 1
}

const helpers = {
  getPages (articles) {
    const pages = Math.ceil(articles.length / state.perPage)
    if (pages < 1) {
      return 1
    }

    return pages
  }
}

const mutations = {
  SET_BIAS (state, newBias) {
    state.bias = newBias
  },
  SET_ARTICLES (state, articles) {
    state.articles = [...articles]
    state.filteredArticles = [...articles]
    state.pages = helpers.getPages(articles)
  },
  SET_FILTERED_ARTICLES (state, articles) {
    state.pages = helpers.getPages(articles)
    state.filteredArticles = [...articles]
  },
  SET_CURRENT_PAGE (state, page) {
    state.currentPage = page
  },
  RESET_ARTICLES (state) {
    state.filteredArticles = [...state.articles]
  }
}

const actions = {
  addArticles ({ commit }, { articles, source }) {
    let currArticles = state.articles

    const outlet = NewsSources[source]
    for (let i = 0; i < articles.length; i++) {
      articles[i].source = outlet
    }

    currArticles = [...currArticles, ...articles]

    // Define sorting function
    const compare = function(a, b) {
      const dateA = new Date(a.publishedAt)
      const dateB = new Date(b.publishedAt)

      if (dateA < dateB) {
        return 1
      } else if (dateA > dateB) {
        return -1
      } else {
        return 0
      }
    }

    // Sort articles
    currArticles.sort(compare)

    // Apply articles
    commit('SET_ARTICLES', currArticles)
  },
  searchArticles (ctx, search) {
    if (!search || search.length === 0) {
      return
    }

    let articles = [...state.articles]

    // Filter by bias first
    articles = articles.filter(item => {
      if (ctx.getters.bias > 0) {
        return (item.source.bias >= ctx.getters.bias)
      } else {
        return (item.source.bias <= ctx.getters.bias)
      }
    })

    // Filter by search term
    articles = articles.filter(item => {
      return (item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    })

    ctx.commit('SET_FILTERED_ARTICLES', articles)
  },
  setBiasFilter ({ commit }, bias) {
    if (bias === 0) {
      commit('RESET_ARTICLES')
      return
    } else {
      commit('SET_BIAS', bias)
    }

    let articles = [...state.articles]
    articles = articles.filter(item => {
      if (bias > 0) {
        return (item.source.bias >= bias)
      } else {
        return (item.source.bias <= bias)
      }
    })


    commit('SET_FILTERED_ARTICLES', articles)
  }
}

const getters = {
  articles (state) {
    return state.filteredArticles
  },
  bias (state) {
    return state.bias
  },
  pages (state) {
    return state.pages
  },
  currentPage (state) {
    return state.currentPage
  },
  perPage (state) {
    return state.perPage
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
