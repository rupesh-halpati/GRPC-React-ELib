import {
  Button,
  Checkbox,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Transition
} from 'semantic-ui-react'
import './Navbar.scss';

const trigger = (
  <span>
    <Icon name='user' circular /> Hello, Bob
  </span>
)

const Navbar = ({ animation, direction, visible, setVisible }: any) => {
  const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

  return (
    <div className="navbar">
      <div className="navbar__toolbar">
        <div className="navbar__toolbar-left">
          <Button icon size='mini' onClick={() => setVisible(!visible)}>
            {/* {!visible && (<Transition visible={true} animation='fade' duration={500}>
              <Icon name='bars' />
            </Transition>)}
          {visible && (<Transition visible={true} animation='fade' duration={500}>
              <Icon name='bar' />
            </Transition>)} */}
            <Transition visible={true} animation='fade' duration={500}>
              <Icon name='bars' />
            </Transition>
          </Button>
        </div>
        <div className="navbar__toolbar-right">
          <Dropdown
            trigger={trigger}
            options={options}
            pointing='top left'
            icon={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;