import { Icon, Menu } from "semantic-ui-react";
import './SidebarItem.scss';
import { Link } from 'react-router-dom';


export const SidebarItem = (props: any) => {
    const highlight = false ? 'highlight-item' : null;
    const item = props.width === 'thin' ? 'sidebar-item sidebar-item--thin' : 'sidebar-item sidebar-item---very-thin';
    const itemAlign = props.width === 'thin' ? 'sidebar-item-alignment-container--thin' : 'sidebar-item-alignment-container--very-thin';
    return (
        <Link to={{ pathname: props.path }}>
            <Menu.Item className={[item, highlight].join(' ')}>
                <div className={itemAlign}>
                    <span><Icon size='large' name={props.icon} /> </span>
                    {props.width === 'thin' && (<span>{props.label}</span>)}
                </div>
            </Menu.Item>
        </Link>
    );
}


// const shouldBeHighlighted = (props: any) => {
//     const { pathname } = props.location;
//     if (props.path === '/') {
//         return pathname === props.path;
//     }
//     return pathname.includes(props.path);
// }

export default SidebarItem;