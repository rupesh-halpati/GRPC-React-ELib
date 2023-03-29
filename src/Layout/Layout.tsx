import {
  Outlet,
  Link,
  useNavigation,
} from "react-router-dom";

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
} from 'semantic-ui-react'
import React from "react";
import './Layout.scss'
import { SideBar1 } from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function exampleReducer(state: any, action: any) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}

const trigger = (
  <span>
    <Icon name='user' circular /> Hello, Bob
  </span>
)

export function Layout() {
  let navigation = useNavigation();
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    // visible: true,
  })
  const { animation, dimmed, direction } = state
  const vertical = direction === 'bottom' || direction === 'top'
  const [visible, setVisible] = React.useState(false)
  const [width, setWidth] = React.useState('thin')
  const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

  return (
    <div className="main">
      <div className="main__toolbar">
        <div className="main__toolbar-left">
          <Checkbox
            checked={dimmed}
            label='Dim Page'
            onChange={(e, { checked }) =>
              dispatch({ type: 'CHANGE_DIMMED', dimmed: checked })
            }
            toggle
          />
          <Checkbox
            checked={visible}
            label='Visible'
            onChange={(e, { name, checked }) => setVisible(checked as boolean)}
          />
          <Button
            disabled={vertical}
            onClick={() =>
              dispatch({ type: 'CHANGE_ANIMATION', animation: 'uncover' })
            }
          >
            Uncover
          </Button>
          <Button
            disabled={vertical}
            onClick={() =>
              dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
            }
          >
            Slide Along
          </Button>
          <Button
            disabled={vertical}
            onClick={() =>
              dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide out' })
            }
          >
            Slide Out
          </Button>
        </div>
        <div className="main__toolbar-right">
          <Dropdown
            trigger={trigger}
            options={options}
            pointing='top left'
            icon={null}
          />
        </div>
      </div>
      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        {vertical && (
          <Main
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}
        {!vertical && (
          <SideBar1
            animation={animation}
            direction={direction}
            visible={visible}
            width={width}
            setWidth={setWidth}
          />
        )}
        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}