<template>
  <div class="news-item">
    <img class="poster" :src="(item.urlToImage) ? item.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnpRRfTV56JXbzYi5WTV8SeIKXPd0AIAD_A7_xYIKRjhu1ZCvMw'" />
    <span class="source-tag">{{ item.source.name }}</span>
    <div class="news-info">
      <h1>
        <a :href="item.url" target="_black">{{ item.title }}</a>

      </h1>
      <p class="publish-date">{{ date }}</p>
      <p class="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
  import DateFormat from 'dateformat'
  export default {
    props: ['item'],
    computed: {
      date() {
        const date = new Date(this.item.publishedAt)
        return DateFormat(date, 'dddd, mmmm, dS, yyyy, h:MM TT')
      }
    }
  }
</script>

<style scoped>
  .news-item {
    min-height: 100px;
    background-color: whitesmoke;
    border-radius: 5px;
  }

  .poster {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    height: 80px;
    width: 110px;
    margin-right: 10px;
    border-radius: 3px;
  }

  .news-info {
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 20px;
    padding-top: 10px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 5px;
  }

  h1 > a {
    text-decoration: none;
    color: black;
  }

  .description {
    font-size: 14px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  .source-tag {
    font-size: 10px;
    background-color: #3498db;
    color: whitesmoke;
    font-weight: lighter;
    border-radius: 3px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 5px;
    padding: 4px;
    vertical-align: middle;
    float: right;
  }

  .publish-date {
    font-size: 10px;
    color: darkgrey;
    -webkit-margin-before: 0;
    -webkit-margin-after: 5px;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      line-height: 10px;
      font-size: 24px;
    }
  }
</style>
