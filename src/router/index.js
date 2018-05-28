import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Contact from '@/components/contact'
import About from '@/components/about'
import Design from '@/components/design'
import Service from '@/components/service'
import viewWork from '@/components/viewWork'
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);
import ScrollMarkers from '@/components/ScrollMarkers'
import ScrollView from 'vue-scrollview'
Vue.use(ScrollView);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home,
    },
    {
      path: '/about',
      name: 'About',
      component:About,
       
    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact,
       
    },
    {
      path: '/service',
      name: 'Service',
      component:Service,
       
    },
    {
      path: '/works',
      name:'design',
      components: {
        default:Design,
        
      }
    },
    {
      path: '/works/projects/:worksId',
      name:'project',
      props: true,
      components: {
        default:Design,
      }
    },
    
  ]
})
