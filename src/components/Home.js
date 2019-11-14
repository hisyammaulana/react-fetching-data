import React, { Component } from 'react'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=9")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
            {
                id: `${data.id.name}`,
                firstName: `${data.name.first}`,
                lastName: `${data.name.last}`,
                location: `${data.location.state}, ${data.nat}`,
                thumbnail: `${data.picture.large}`,
            }
        )))
        .then(items => this.setState({
            items,
            isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { items } = this.state;
        return(
            <div className="boxWhite">
                <h2>Random User</h2>
                {
                    items.length > 0 ? items.map(items => {
                        const { id, firstName, lastName, location, thumbnail } = items;
                        return(
                            <div key={id} className="bgCircle">
                                <center><img src={thumbnail} alt={firstName} className="circle"/></center><br/>
                                <div className="ctr">
                                    { firstName } { lastName }<br/>
                                    { location }
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>
        )
    }
}
export default Home;