import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'

export default class NavBar extends Component {


  render() {
   

    return (
      <Menu stackable inverted>
       
        <Menu.Item>
          Subreddit
        </Menu.Item>

       

        <Menu.Menu position = 'right'>

            
        <Menu.Item >
                <Input className='icon' icon='search' placeholder='Search...' />
                
        </Menu.Item>
        <Menu.Item >
                
                <Button positive content='Search' />
        </Menu.Item>

        </Menu.Menu>


      </Menu>
    )
  }
}