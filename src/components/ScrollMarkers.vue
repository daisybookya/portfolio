<template>
  <div>
    <div class="scroll-container">

      <Example-start
        v-if="currentlyShowing === 'first'"
        title="Scroll Markers Example"
        description="This is an example demonstrating the use of scrollmarkers as triggers for scroll positions."
      ></Example-start>

      <p v-if="currentlyShowing === 'second'" class="scroll-section">
        As the scroll markers enter visibility, they trigger the text
        to change.
      </p>

      <p v-if="currentlyShowing === 'third'" class="scroll-section">
        Instead of just changing text, you could attach different actions
        to each scroll marker trigger point.
      </p>


      <div v-if="currentlyShowing === 'fourth'" class="scroll-section">
        <p>
          Notice how the scroll markers are red lines... that is because the
          debug prop is set to 'true'.
        </p>
      </div>


      <p v-if="currentlyShowing === 'fifth'" class="scroll-section">
        You might also notice the markers dont trigger a change
        of text until they're well into the viewport -- that's because
        of the scroll-view's default offset of 200px (can be changed
        via props).
      </p>

      <p v-if="currentlyShowing === 'sixth'" class="scroll-section">
        The end.
      </p>



    </div>
    <div class="markers">
      <scroll-view>
        <template slot-scope="visible">
          <scroll-marker
            v-for="m in markers"
            :key="m"
            :visible="visible[m]"
            :name="m"
            :spacing="700"
            @isVisible="markerVisible"
            @isNotVisible="markerNotVisible"
          ></scroll-marker>
        </template>
      </scroll-view>
    </div>
  </div>
</template>

<script>
// import { $scrollview } from '../../../../../src'
import { $scrollview } from 'vue-scrollview'

import ExampleStart from './ExampleStart'

export default {
  components: {
    ExampleStart,
  },
  data() {
    return {
      markers: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
      currentlyShowing: 'first',
    }
  },
  methods: {
    markerVisible(name) {
      this.currentlyShowing = name
      console.log(`marker ${name} is visible!`)
    },
    markerNotVisible(name) {
       console.log(`marker ${name} is no longer visible!`)
      const scrollDirection = $scrollview.getScrollDirection()
      if (name === 'first' && scrollDirection === 'UP') this.currentlyShowing = name
    }
  }
}
</script>

<style scoped>
.scroll-container {
  position: fixed;
  top: 50px;
  left: 10vh;
  width: 90%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-section {
  max-width: 600px;
  text-align: center;
}

.markers {
  width: 100%;
  padding-bottom: 300px;
}

.debug-toggle {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
