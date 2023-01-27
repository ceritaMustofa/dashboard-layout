import { Dashboard, People, Storage, AttachMoney,
    ShoppingCart,
    AddShoppingCart,
    Done,
    Business,
    HomeWork,
    Person,} from "@styled-icons/material";
import React from "react";

export type MenuOption = {
    name: string,
    icon: React.ComponentType,
    url:string,
    subItems?: MenuOption[],
};

const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Dashboard",
        icon: Dashboard,
        url: "/",
    },
    {
        name: "Orders",
        icon: ShoppingCart,
        url: "/orders",
        subItems: [
            {
                name: "New",
                icon: AddShoppingCart,
                url: "/new-orders",
            },
            {
                name: "Completed",
                icon: Done,
                url: "/completed-orders",
            },
        ],
    },
    {
        name: "Customers",
        icon: People,
        url: "/customers",
        subItems: [
            {
                name: "Corporate",
                icon: Business,
                url: "/corporate",
            },
            {
                name: "SMB",
                icon: HomeWork,
                url: "/smb",
                subItems: [
                  {
                    name: "Retail",
                    icon: Person,
                    url: "/retail",
                  },
                ],
            },
        ],
    },
    {
        name: "Inventory",
        icon: Storage,
        url: "/inventory",
    },
];

export type MenuItem = {
    name: string,
    icon: React.ComponentType,
    url: string,
    id: string,
    depth: number,
    subItems?: MenuItem[],
};


function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[]{
    return options.map((option,idx) => ({
        ...option,
        id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subItems:
            option.subItems && option.subItems.length > 0
                ? makeMenuLevel(option.subItems, depth +1)
                :undefined,
    }));
}

export const MENU_ITEMS:MenuItem[] = makeMenuLevel(MENU_OPTIONS);