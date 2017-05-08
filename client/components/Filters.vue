<template>
  <div class="ui vertical menu">
    <div class="item">
      Search Articles
      <div class="ui input">
        <input type="text" v-model="searchTxt" placeholder="Search..." />
      </div>
    </div>
    <div class="item">
      Filter by Bias
      <vue-slider
        class="slider"
        :width="slider.width"
        ref="slider"
        v-model="slider.bias"
        :min="-10"
        :max="10"
        :data="slider.data"
        :piecewise="true"
        :piecewiseLabel="true"
        :piecewiseStyle="slider.piecewiseStyle"
        :labelStyle="slider.labelStyle"
        :clickable="true"
        :processStyle="slider.processStyle"
        :tooltipStyle="slider.tooltipStyle"
      ></vue-slider>
    </div>
  </div>
</template>

<script>
  import VueSlider from 'vue-slider-component'

  export default {
    components: { VueSlider },
    data() {
      return {
        searchTxt: '',
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
          width: (window.innerWidth < 768) ? '100%' : '95%',
          piecewiseStyle: {
            width: '12px',
            height: '12px',
            backgroundColor: '#ccc'
          },
          processStyle: {
            backgroundColor: '#ccc'
          },
          labelStyle: {
            fontSize: (window.innerWidth < 768) ? '8px' : '12px'
          },
          tooltipStyle: {
            fontSize: (window.innerWidth < 768) ? '10px' : '12px'
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
      },
      searchTxt() {
        this.$store.dispatch('searchArticles', this.searchTxt)
      }
    },
  }
</script>

<style scoped>
  .ui.vertical.menu {
    width: 100%;
  }

  .ui.input {
    margin-top: 10px;
  }

  .slider {
    margin: 0 auto;
    margin-top: 30px;
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
