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
  currentPage: 1,
  showAll: false,
  loading: true
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
  SET_SHOWALL (state, value) {
    state.showAll = value
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
  },
  SET_LOADING (state, value) {
    state.loading = value
  }
}

const actions = {
  addArticles ({ commit, dispatch, getters }, { articles, source }) {
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
    commit('SET_LOADING', false)
    dispatch('setBiasFilter', getters.bias)
  },
  searchArticles ({ commit, getters }, search) {
    if (!search || search.length === 0) {
      return
    }

    let articles = [...state.articles]

    // Filter by bias first
    if (!getters.showAll) {
      articles = articles.filter(item => {
        if (getters.bias > 0) {
          return (item.source.bias >= getters.bias)
        } else {
          return (item.source.bias <= getters.bias)
        }
      })
    }

    // Filter by search term
    articles = articles.filter(item => {
      return (item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    })

    commit('SET_FILTERED_ARTICLES', articles)
    commit('SET_CURRENT_PAGE', 1)
  },
  setBiasFilter ({ commit, getters }, bias) {
    let articles = [...state.articles]

    if (!getters.showAll) {
      articles = articles.filter(item => {
          return (item.source.bias >= bias - 1 && item.source.bias <= bias + 1)
      })
    }

    commit('SET_BIAS', bias)
    commit('SET_FILTERED_ARTICLES', articles)
    commit('SET_CURRENT_PAGE', 1)
  },
  showAll ({ commit, dispatch, state }, value) {
    commit('SET_SHOWALL', value)

    if (value) {
      commit('SET_ARTICLES', state.articles)
      commit('SET_CURRENT_PAGE', 1)
    } else {
      dispatch('setBiasFilter', state.bias)
    }
  }
}

const getters = {
  articles (state) {
    return state.filteredArticles
  },
  bias (state) {
    return Number(state.bias)
  },
  pages (state) {
    return Number(state.pages)
  },
  currentPage (state) {
    return Number(state.currentPage)
  },
  perPage (state) {
    return Number(state.perPage)
  },
  showAll (state) {
    return Boolean(state.showAll)
  },
  loading (state) {
    return Boolean(state.loading)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
