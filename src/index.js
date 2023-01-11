import DomHeaderMenus from './Components/DomHeaderMenus.vue'
import DomHeaderMobileMenu from './Components/DomHeaderMobileMenu.vue'

const DmMenus = {
  install: (Vue, options) => {
    Vue.component('dom-header-menus', DomHeaderMenus)
    Vue.component('dom-header-mobile-menu', DomHeaderMobileMenu)
  }
}

export default DmMenus
