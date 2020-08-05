<template>
  <div class="circles">
    <svg class="circles__circle" id="red" width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="97.5" cy="97.5" r="97.5" fill="#3D0000" fill-opacity="0.5"/>
    </svg>
    <svg class="circles__circle" id="green" width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="97.5" cy="97.5" r="97.5" fill="#003D00" fill-opacity="0.5"/>
    </svg>
    <svg class="circles__circle" id="blue" width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="97.5" cy="97.5" r="97.5" fill="#00003D" fill-opacity="0.5"/>
    </svg>

  </div>
</template>
<script>
export default {
  data() {
    return {
      maxDistance: 50,
      tl: this.$gsap.timeline({ })
    }
  },
  mounted(){
    

    window.addEventListener('mousemove', this.moveCircles )

  },
  methods: {
    moveCircles: function (event) {
      event = event || window.event
      // this.tl.progress( 
      //   Math.sqrt( Math.pow(event.pageX / window.innerWidth, 2), Math.pow(event.pageY / window.innderHeight, 2) )
      // )
      const x = event.pageX
      const y = event.pageY
      const sinx = Math.sin(x)
      const siny = Math.sin(y)
      

      this.tl
      .to('#red', { x: `+=${sinx}`, y: `-=${sinx}` }, 0 )
      .to('#green', { x: `-=${siny}`, y:`+=${sinx}` }, 0 )
      .to('#blue', { x: `-=${siny}`, y: `+=${siny}` }, 0 )
      
    }
  },
  destroyed () {
    window.removeEventListener('mousemove', this.moveCircles) 
  }
}
</script>
<style lang="scss">
.circles {
  animation: 1s appear;
  margin: auto;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: $light-grey;
  &__circle{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: color-burn;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
