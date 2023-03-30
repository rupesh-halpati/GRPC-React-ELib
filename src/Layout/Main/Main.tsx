import { Outlet } from 'react-router-dom';
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

const Main = ({ animation, direction, visible }: any) => (
    <Sidebar
      as={Segment}
      animation={animation}
      direction={direction}
      visible={visible}
    >
      <Grid textAlign='center'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>New Content Awaits</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar>
  )
  
  export default Main;