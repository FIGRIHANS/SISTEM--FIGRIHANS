import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '@/views/BlogPost.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import ContactPage from '@/views/ContactPage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import AuthorPage from '@/views/AuthorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: BlogPostView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryPage,
    },
    {
      path: '/author',
      name: 'Author',
      component: AuthorPage,
    },
    {
      path: '/blogpost',
      name: 'BlogPost',
      component: () => import('@/views/BlogPost.vue')
    }    
  ],
})

export default router
