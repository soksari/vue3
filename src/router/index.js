import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetaileView from '@/views/posts/PostDetailView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    component : AboutView
  },
  {
    path:'/posts/',
    name:'PostList',
    component:PostListView
  },
  {
    path:'/posts/:id',
    name:'PostDetail',
    component:PostDetaileView
  },
  {
    path:'/posts/create',
    name:'PostCreate',
    component:PostCreateView
  },
  {
    path:'/posts/:id/edit',
    name:'PostEdit',
    component:PostEditView
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;