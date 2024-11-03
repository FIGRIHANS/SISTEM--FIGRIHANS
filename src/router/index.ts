import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '@/views/BlogPost.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import Contact from '@/views/Contact.vue'
import Category from '@/views/Category.vue'
import Author from '@/views/Author.vue'

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
      component: Contact,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/author',
      name: 'Author',
      component: Author,
    },
    {
      path: '/blogpost',
      name: 'BlogPost',
      component: () => import('@/views/BlogPost.vue')
    }    
  ],
})

export default router
