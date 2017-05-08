<template>
  <div class="ui inverted vertical footer segment">
    <div class="ui center aligned container">
      <div class="ui stackable inverted divided grid">
        <div class="sixteen wide column">
          <h4 class="ui inverted header">News API</h4>
          <p>News by Bias is brought to you by News API</p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <div class="ui horizontal inverted small divided link list">
        <a class="item" href="https://github.com/zlshames/news-by-bias">GitHub</a>
        <a class="item" href="https://newsapi.org">News API</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ui.inverted.segment, .ui.primary.inverted.segment {
    background-color: #3498db;
  }

  .ui.section.divider {
    margin-top: 2rem;
    margin-bottom: 0;
  }
</style>
