import { Guid } from "guid-typescript";

export interface menu {
    menuName: string,
    description: string | null,
    menuLink: string | null,
}

export const menus = [
    {
        menuName: 'Dashboard',
        description: 'description title 1',
        menuLink: '/dashboard'
    },
    {
        menuName: 'Home',
        description: 'description title 2',
        menuLink: '/home'
    },
    {
        menuName: 'Login',
        description: null,
        menuLink: '/login'
    },
    {
        menuName: 'Product',
        description: null,
        menuLink: '/productIndex'
    },
]