
Load.Vue({
  data: {
    hs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    ms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    ss: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    h: null,
    m: null,
    s: null,
  },
  mounted () {
    // this.dots = Array.apply(null, new Array(60)).map((_, i) => 'n' + i)
    // this.nums = Array.apply(null, new Array(12)).map((_, i) => 'n' + i)
    setInterval(this.go, 999, this.go())
  },
  computed: {
  },
  methods: {
    go () {
      const date = new Date(), sec = date.getSeconds(), min = date.getMinutes(), hour = date.getHours(), pod0 = n => (n < 10 ? '0' : '') + n
      this.s = Math.floor(sec / 2)
      this.m = min
      this.h = hour
      console.error(this.m);
      
      
    },
    click() {
      window.webkit && window.webkit.messageHandlers['emit'].postMessage({
        action: 'fullWindow',
        params: null
      })
    }
  },
  template: `
    main#app => @dblclick=click
      #hour
        i => *for=t in hs   :key=t   :a=h==t
      #min
        i => *for=t in ms   :key=t   :a=m==t
      #sec
        i => *for=t in ss   :key=t   :a=s==t

      `
})
