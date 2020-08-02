import React from 'react'
import { Image, Item } from 'semantic-ui-react';
import { ISubreddit} from '../components/App'


interface IProps {
    subreddits:ISubreddit[]

}

const CardList:React.FC<IProps> = ({subreddits}) => (

    
  <Item.Group divided>

      {subreddits.map(subreddit => (

<Item key={subreddit.id}>
    

    <Item.Content>
      <Item.Header as='a'>{subreddit.title}</Item.Header>
      <Item.Meta>{subreddit.date}</Item.Meta>
  <Item.Description>
    <Image src={subreddit.thumbnail} />
  </Item.Description>
  <Item.Extra>Additional Details</Item.Extra>
</Item.Content>
</Item>

      ))
          
      }
    

   
  </Item.Group>
)

export default CardList;