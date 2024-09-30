import type { Component } from "vue";
import type { crumb } from "./crumb";
import type { subMenu } from '@/models/subMenu';

export interface Route {
    path: string,
    name: string,
    props?: boolean,
    component: Component,
    meta: {
        title: string,
        label: string,
        subMenus?: subMenu[],
        crumbs?: crumb[]
    }
}