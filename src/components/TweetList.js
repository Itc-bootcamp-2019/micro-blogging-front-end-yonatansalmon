import React from "react"


const date = (new Date()).toISOString()

class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: date,
            user: "Yonatan"
        }

    }


    render() {
        return (
            <div>{
                this.props.tweets.map((tweet) => {
                    return ( <div className="tweet">
                        <div>{tweet}</div>
                        <div>{this.state.date}</div>
                        <div>{this.state.user}</div>
                               
                                 
                            </div>)

                })}
            </div>


        )
    }

}


export default TweetList