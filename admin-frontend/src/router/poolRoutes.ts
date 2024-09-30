import PoolsView from '@/views/Pool/PoolsView.vue';
import PoolView from '@/views/Pool/PoolView.vue';
import type { Route } from '@/models/route';


const poolRoutes: Route[] = [
    {
        path: '/pools',
        name: 'Pools',
        component: PoolsView,
        meta: {
            title: 'Pools',
            label: 'Pools',
            subMenus: [
                {label: 'First Sub', link: '/'},
                {label: 'Second Sub', link: '/'}
            ],
            crumbs: [
                {label: 'Pools'}
            ]
        }
    },
    {
        path: '/pools/:hash',
        name: 'PoolDetails',
        component: PoolView,
        props: true,
        meta: {
            title: 'Pools',
            label: 'PoolDetails',
            crumbs: [
                {label: 'Pools', link: '/pools'},
                {label: 'title'}
            ]
        },
        
    },
];

export default poolRoutes;