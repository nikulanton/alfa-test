import './App.css';
import { Component } from "react";
import Card from './Card/Card'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            filterStatus: false
        }
            ;
    }

    componentDidMount() {
        fetch("https://testimonialapi.toolcarton.com/api")
            .then(res => res.json())
            .then(result => this.setState({ users: result }));
        document.title = "Тестовое задание"
    }

    cardDeleteHandler(id) {
        const users = this.state.users.filter(user => user.id !== id)
        this.setState({ users })
    }

    cardLikeHandler(id) {
        let users = this.state.users
        let user = users.find(user => user.id === id);
        user.isLiked = !user.isLiked;

        this.setState({ users: users })
    }


    onFilterChanged(index) {
        let filterStatus = this.state.filterStatus
        if (filterStatus) {
            filterStatus = false
            this.setState({ filterStatus })
        }
        else {
            filterStatus = true
            this.setState({ filterStatus })
        }
    }

    render() {
        const { users, filterStatus } = this.state
        let cards = users;
        if (filterStatus) {
            cards = users.filter((card) => card.isLiked)
        }

        cards = cards.map((user) => {
            const { name, location, id, avatar, isLiked } = user;

            return (
                <Card
                    key={id}
                    name={name}
                    location={location}
                    isLiked={isLiked}
                    avatar={avatar}
                    onDelete={this.cardDeleteHandler.bind(this, id)}
                    onLike={this.cardLikeHandler.bind(this, id)}
                />
            )
        }
        )
        return (
            <div className="App">
                <input
                    type="checkbox"
                    id="filter"
                    value={filterStatus}
                    onClick={() => this.onFilterChanged()}
                />
                <label htmlFor="filter">Оставить только залайканные</label>
                <div className="CardList">{cards}</div>
            </div>
        );
    }
}


export default App;
