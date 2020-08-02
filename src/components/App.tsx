import React from 'react';
import {connect} from 'react-redux';
import {fetchSubReddits} from '../actions'; 
import {StoreState} from '../reducers';
import NavBar from './Navbar';
import LoadingComponent from '../layouts/LoadingComponents';
import CardList from '../components/CardList';


export interface ISubreddit{
    id: string;
    title: string;
    thumbnail: string;
    date: Date;

}

interface AppState {
    fetching: boolean;

}




interface AppProps {
    subreddits : ISubreddit[];
    fetchSubReddits(): any;
}

 class RedditApp extends React.Component<AppProps , AppState> {

    constructor (props: AppProps) {
        super(props);

        this.state = {fetching: false};
    }

    

    componentDidMount () {

        
        this.props.fetchSubReddits();
        this.setState({ fetching: true})

    }

    componentDidUpdate(prevProps: AppProps): void{
        if(!prevProps.subreddits.length && this.props.subreddits.length){
            this.setState({fetching: false});
        }
    }


renderList(): JSX.Element[] {

    return this.props.subreddits.map((subreddit: ISubreddit) => {
    return <div key={subreddit.id}>{subreddit.title}</div>
    })
}


    render() {
        const {subreddits}=this.props;
       console.log(subreddits)

        
       
        return (<div> 
             {this.state.fetching ? <LoadingComponent content='Subreddit Posts Loading...' />: 
             <div>
             <NavBar/>
             <CardList  subreddits={subreddits}/>
           
           {this.renderList()}
             </div>}
          

        </div>)
    }
}



const mapStateToProps = ({subreddits}: StoreState): {subreddits: any[]} =>{
    return { subreddits};
}


export const App = connect(
    mapStateToProps,
    { fetchSubReddits }
)(RedditApp);