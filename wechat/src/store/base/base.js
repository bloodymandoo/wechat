import Swiper from 'swiper'

export default {
  state: {
    activeIndex: 0,
    swiper: null
  },
  mutations: {
    update_activeP (state, {index}) {
      state.swiper.slideTo(index, 100, true)
      state.activeIndex = index
    }
  },
  actions: {
    init_swiper (context, {name}) {
      context.state.swiper = new Swiper('.' + name, {})
      context.state.swiper.on('slideChange', function () {
        context.state.activeIndex = context.state.swiper.activeIndex
      })
    }
  }
}
