/**
 * @author      OA Wu <oawu.tw@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

Load.VueComponent('digital', {
  data () {
    return {
      m: '00',
      h: '00',
    }
  },
  mounted () {
    setInterval(this.go, 1000, this.go())
  },
  methods: {
    go () {
      const date = new Date(), sec = date.getSeconds(), min = date.getMinutes(), hour = date.getHours(), pod0 = n => (n < 10 ? '0' : '') + n
      this.m = pod0(min).split('')
      this.h = pod0(hour).split('')
      // this.h = pod0((hour + 11) % 12 + 1).split('')
    }
  },
  template: `
    div#digital
      span => *text=h[0]
      span => *text=h[1]
      span => *text=':'
      span => *text=m[0]
      span => *text=m[1]
      `
})
Load.VueComponent('clock', {
  data () {
    return {
      dots: [],
      nums: [],
      s: { $: 0, ani: true, set val (v) { return this.$ != v ? v != 0 ? this.$ = v : setTimeout(_ => setTimeout(_ => this.ani = true, 100, this.ani = false, this.$ = 0), 550, this.$ = 60) : null }, get class () { return 'n' + parseInt(this.$, 10) + (this.ani ? ' ani' : '') } },
      m: { $: 0, ani: true, set val (v) { return this.$ != v ? v != 0 ? this.$ = v : setTimeout(_ => setTimeout(_ => this.ani = true, 100, this.ani = false, this.$ = 0), 550, this.$ = 60) : null }, get class () { return 'n' + parseInt(this.$, 10) + (this.ani ? ' ani' : '') } },
      h: { $: 0, ani: true, set val (v) { return this.$ != v ? v != 0 ? this.$ = v : setTimeout(_ => setTimeout(_ => this.ani = true, 100, this.ani = false, this.$ = 0), 550, this.$ = 60) : null }, get class () { return 'n' + parseInt(this.$, 10) + (this.ani ? ' ani' : '') } },
    }
  },
  mounted () {
    this.dots = Array.apply(null, new Array(60)).map((_, i) => 'n' + i)
    this.nums = Array.apply(null, new Array(12)).map((_, i) => 'n' + i)
    setInterval(this.go, 999, this.go())
  },
  methods: {
    go () {
      const date = new Date(), sec = date.getSeconds(), min = date.getMinutes(), hour = date.getHours()
      this.s.val = sec
      this.m.val = min + sec / 60
      this.h.val = (hour + min / 60 + sec / 3600) % 12 * 5
    }
  },
  template: `
    div#clock
      i => *for=(el, i) in dots   :key=i   :text=el   :class=el
      b => *for=(el, i) in nums   :key=i   :text=el   :class=el
      u.h => :class=h.class
      u.m => :class=m.class
      u.s => :class=s.class`
})

window.bridge || (window.bridge = { type: 'web' })

Load.Vue({
  data: {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    click() {
      window.webkit && window.webkit.messageHandlers['emit'].postMessage({
        action: 'fullWindow',
        params: null
      })
    }
  },
  template: `
    main#app
      #top
        clock.left
        digital.right
      #button => @dblclick=click
      `
})
