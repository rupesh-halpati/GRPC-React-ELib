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
import React, { useEffect } from "react";
import './Layout.scss'
import { SideBar1 } from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  // useEffect( () => {
  //   navigate("/path/to/push");
  // },)

  return (
    <div className="layout">
     <Navbar 
       animation={animation}
       direction={direction}
       visible={visible}
       setVisible = {setVisible}
     />
      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        {/* {vertical && (
          <Main
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )} */}
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
            {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
            <Outlet />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}