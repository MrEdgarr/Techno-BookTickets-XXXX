/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default.vue"),
        children: [
            {
                path: "/index",
                component: () => import("@/pages/index.vue"),
            },
            {
                path: "/movies",
                component: () => import("@/pages/movies/movie-detail"),
                children: [
                    {
                        path: "/movies",
                        component: () =>
                            import(
                                "@/components/movies/detail/DetailContent.vue"
                            ),
                    },
                    {
                        path: "/movies/seat",
                        component: () =>
                            import("@/components/booking/BookingSeats.vue"),
                    },
                ],
            },
            {
                path: "/showtimes",
                component: () => import("@/pages/movies/movie-showtime"),
            },
            {
                path: "/movie/showing",
                component: () => import("@/pages/movies/movie-showing"),
            },
            {
                path: "/movie/upcoming",
                component: () => import("@/pages/movies/movie-upcoming"),
            },
            {
                path: "/checkout",
                component: () => import("@/pages/checkout"),
            },
            {
                path: "/news",
                component: () => import("@/pages/blogs/blog-new"),
            },
            {
                path: "/promotion",
                component: () => import("@/pages/blogs/blog-promotion"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts,
    routes,
});

export default router;
