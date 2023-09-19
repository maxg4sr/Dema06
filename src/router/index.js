import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/management/HomeView.vue'
import HeaderAll from "@/views/header/HeaderAll";
import NotFound404 from "@/views/404/NotFound404";

Vue.use(VueRouter)

const routes = [
    {
        // 因為被嵌套的<router-view>是在HomeView中的，所以將在此處理配置嵌套路由
        // 使用children來配置子級路由，children子級的配置方式與routes子級的配置方式相同
        // 通常，應該配置redirect屬性，表示重定向，因為一旦發現嵌套，原來的視圖（例如HomeView）是不完整的，不應該允許直接訪問
        // 以下配置重定向的效果：一旦訪問 / 路徑，就會自動跳轉到 /user/list 路徑
        path: '/admin',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Dream Come True 後台管理系統' // 定義頁面名稱
        },
        redirect: null, // 'admin/user' 重定向設定
        children: [
            {
                path: 'admin/list',
                component: () => import('../views/admin/AdminListView.vue'),
                meta: {
                    title: "運營管理平台 -- 管理員列表"
                }
            },
            {
                path: 'admin/add-new',
                component: () => import('../views/admin/AdminAddNewView.vue'),
                meta: {
                    title: '運營管理平台 -- 添加管理員'
                }
            },
            {
                path: 'staff/list',
                component: () => import('../views/staff/StaffListView.vue'),
                meta: {
                    title: "運營管理平台 -- 員工列表"
                }
            },
            {
                path: 'staff/add-new',
                component: () => import('../views/staff/StaffAddNew.vue'),
                meta: {
                    title: '運營管理平台 -- 添加員工'
                }
            },
            {
                path: 'order/list',
                component: () => import('../views/customer/CustomerListView.vue'),
                meta: {
                    title: '管理營運列表 -- 訂單管理'
                }
            },
            {
                path: 'reg/list',
                component: () => import('../views/reg/RegListView.vue'),
                meta: {
                    title: '管理營運列表 -- 註冊管理'
                }
            },
            // {
            //     path: 'chat/service',
            //     component: () => import('../views/chatroom/chat'),
            //     meta: {
            //         title: '管理營運列表 -- 線上客服'
            //     }
            // },
            {
                path: 'brand/List',
                component: () => import('../views/brand/BrandListView.vue'),
                meta: {
                    title: '管理營運列表 -- 品牌列表'
                }
            },
            {
                path: 'brand/add-new',
                component: () => import('../views/brand/BrandAddNewView.vue'),
                meta: {
                    title: '管理營運列表 -- 添加品牌'
                }
            },
            {
                path: 'category/add-new',
                component: () => import('../views/category/CategoryAddNewView.vue'),
                meta: {
                    title: '管理營運列表 -- 添加類別'
                }
            },
            {
                path: 'category/list',
                component: () => import('../views/category/CategoryListView.vue'),
                meta: {
                    title: '管理營運列表 -- 添加類別'
                }
            },

        ]
    },
    {
        path: '/',
        component: () => import('../views/login/login.vue'),
        meta: {
            title: '登入頁面'
        }
    },
    {
        path: '/views/reg/',
        component: () => import('../views/reg/reg.vue'),
        meta: {
            title: '註冊頁面'
        }
    },
    {
        path: '/views/index/',
        // 使用 <router-view> 放置 Header 組件
        components: {
            default: () => import('../views/index/index.vue'),
            header: HeaderAll
        },
        meta: {
            title: '歡迎來到Dream Come True'
        }
    },
    {
        path: '/views/services/',
        components: {
            default: () => import('../views/services/services.vue'),
            header: HeaderAll
        },
        meta: {
            title: 'services'
        }
    },
    {
        path: '/views/join/',
        components: {
            default: () => import('../views/join/join.vue'),
            header: HeaderAll
        },
        meta: {
            title: 'join with us'
        }
    },
    {
        path: '/views/team/',
        components: {
            default: () => import('../views/team/team.vue'),
            header: HeaderAll
        },
        meta: {
            title: 'team'
        }
    },
    {
        path: '/views/blog/',
        components: {
            default: () => import('../views/blog/blog.vue'),
            header: HeaderAll
        },
        meta: {
            title: 'blog'
        }
    },
    {
        path: '/views/about/',
        components: {
            default: () => import('../views/about/about.vue'),
        },
        meta: {
            title: 'about'
        }
    },
    {
        path: '/chat/service/',
        components: {
            default:() => import('../views/chatroom/chat.vue')
        },
        meta: {
            title: '管理營運列表 -- 線上客服'
        }
    },


    {
        path: '*',
        component: NotFound404
    },







]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

router.beforeEach((to, from, next) => {

    if (to.meta.title) {// if 判斷 , 沒有設置標題的頁面使用默認值
        document.title = to.meta.title;
    }
    window.scrollTo(0, 0);
    next();//"放行頁面"

});
