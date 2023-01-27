import { ExpandLess, ExpandMore } from "@styled-icons/material";

type ExpandIconProps = {
    isExpanded:boolean,
    handleClick: () => void,
};

export default function ExpandIcon({
    isExpanded,
    handleClick,
}: ExpandIconProps) {
    return isExpanded ?(
        <ExpandLess onClick = {handleClick} />
    ):(
        <ExpandMore onClick={handleClick} />
    )
}