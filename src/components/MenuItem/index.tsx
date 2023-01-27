import Link from "next/link";
import {MenuItem as MenuItemType} from "@/constants/menu-items"
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItemContainer } from "./styles";
import ExpandIcon from "../ExpandIcon";
import MenuItemsList from "../MenuItemsList";

type MenuItemProps = {
    menuItem: MenuItemType,
};

export default function MenuItem({
    menuItem: {name, icon:Icon, url, depth, subItems},
}: MenuItemProps) {
    const [isExpanded, ToggelExpanded] = useState(false);
    const router = useRouter();
    const selected = router.asPath === url;
    const isNested = subItems && subItems?.length > 0;
    const onClick = () => {
        ToggelExpanded((prev) => !prev);
    };
    return (
        <>
            <MenuItemContainer className = {selected? "selected":""} depth={depth}>
                <Link href={url} passHref>
                    <div className="menu-item">
                        <Icon />
                        <span>{name}</span>
                    </div>
                </Link>
                {isNested ? (
                    <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
                ): null}
            </MenuItemContainer>
            {isExpanded && isNested ? <MenuItemsList options={subItems} />: null}
        </>
    );
}