import React from "react" 


class TweetList extends React.Component{
    constructor(props) {
        super(props);
      
    }

    render() {
        return(
            <ul>{
                this.props.tweets.map((tweet) =>{
                return <div className="tweet">{tweet}</div>
          
        })}</ul>

       
        )
    }
    
}


export default TweetList