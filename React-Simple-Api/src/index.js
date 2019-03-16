import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getPeople } from './service/star-wars-service';


class StarWars extends Component {
    constructor(props) {
        super(props);
        //initially people is empty array
        this.state = {
            people: [],
            isLoading: true
        }

    }
    render() {
        const { people, isLoading } = this.state;
        if (isLoading) {
            return <div>Loading....</div>
        }
        return (
            <div>
                <ul>
                    {people.map( (person, i) => {
                        return <li key={i}>{person.name}</li>
                    })}
                </ul>
            </div>
        )
    }
    //this smethod will run after the first render and will set the obtained people array
    componentDidMount() {
         getPeople()
        .then((people) => {
        
            this.setState({ people, isLoading: false })
        }
        )
    }
}
ReactDOM.render(<StarWars />, document.getElementById('root'));