import { Menu, Divider, Sidebar, Button } from 'semantic-ui-react';
import './Sidebar.scss';
import SidebarItem from './SidebarItem/SidebarItem';


export const SideBar1 = ({ animation, direction, visible, width, setWidth }: any) => {
  return (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon='labeled'
      vertical
      visible={visible}
      width={width}
    >
      <Menu borderless vertical stackable fixed='left'
        className={width === 'thin' ? 'side-nav--thin' : 'side-nav--very-thin'}>
        <SidebarItem path='/' label='Home' icon='home' width={width} />
        <SidebarItem path='/feed/trending' label='Trending' icon='fire' width={width} />
        <SidebarItem label='Followers' icon='spy' width={width} />
        <Divider />
        {/* <SideBarHeader title='Library' /> */}
        <SidebarItem label='History' icon='history' width={width} />
        <SidebarItem label='Watch later' icon='clock' width={width} />
        <SidebarItem label='Liked videos' icon='thumbs up' width={width} />
        <Divider />
        {/* <SideBarHeader title='Library' /> */}
        <SidebarItem label='History' icon='history' width={width} />
        <SidebarItem label='Watch later' icon='clock' width={width} />
        <SidebarItem label='Liked videos' icon='thumbs up' width={width} />

        <Divider />
        {/* <SideBarHeader title='Library' /> */}
        <SidebarItem label='History' icon='history' width={width} />
        <SidebarItem label='Watch later' icon='clock' width={width} />
        <SidebarItem label='Liked videos' icon='thumbs up' width={width} />
        
        <div className='sticky-item'>
          {width === 'thin' && (<Button circular icon='chevron left' size='mini' onClick={() => {
            setWidth('very thin')
          }} />)}
          {width === 'very thin' && (<Button circular icon='chevron right' size='mini' onClick={() => {
            setWidth('thin')
          }} />)}
        </div>
      </Menu>
    </Sidebar>
  );
}
