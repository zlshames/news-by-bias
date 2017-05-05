import Vue from 'vue'
import Vuex from 'vuex'

import NewsSources from 'config/NewsSources'

Vue.use(Vuex)

const state = {
  articles: [],
  filteredArticles: [],
  bias: 0
}

const mutations = {
  SET_BIAS (state, newBias) {
    state.bias = newBias
  },
  SET_ARTICLES (state, articles) {
    state.articles = [...articles]
    state.filteredArticles = [...articles]
  },
  SET_FILTERED_ARTICLES (state, articles) {
    state.filteredArticles = [...articles]
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
  setBiasFilter ({ commit }, bias) {
    if (bias === 0) {
      return commit('RESET_ARTICLES')
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
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
