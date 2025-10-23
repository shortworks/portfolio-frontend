
interface MenuButtonProps {
    open: boolean;
    toggleMenu: any;
}

export default function MenuButton( {open, toggleMenu}: MenuButtonProps ) {
    return (
        <div
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex items-center justify-center cursor-pointer"
            role="button">
            {open ? "Close" : "Menu"}
        </div>
    )
}