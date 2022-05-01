import React from 'react';
import './App.css';
import {BookTile} from "./components/Book/book-tile";
import {Book} from "./entities/Book";
import {getAccentColorOfBook, getBooksByUser, getListeningPositionOfBookByUser} from "./services/book-service";
import {Role, User} from "./entities/User";
import {Menubar} from "./components/MenuBar/menubar";
import {Dashboard} from "./components/MenuBar/dashboard";

/**
 * Main App Component, this is the start of the single page application.
 */
export class App extends React.Component<{}, { books: Book[], user: User }> {

    constructor(props: any) {
        super(props);
        this.state = {
            books: [],
            user: new User(-1, "", Role.PLEB)
        }
    }

    componentDidMount() {
        //if (this.state.user === undefined)
        getBooksByUser("test", (books) => this.setBookState(books))
    }

    setBookState(books: Book[]) {
        this.setState({books: books})
    }

    getBackgroundStyle() {
        return
    }

    // render method
    render() {

        let appBackground = {}
        if (this.state.books.length > 0) {
            appBackground = {
                background: `linear-gradient(180deg, ${this.state.books[0].accentColor}, #FFFFFF 50%)`
            }
        }

        return (
            <div className="App" style={appBackground}>
                <Menubar user={this.state.user}/>
                <Dashboard books={this.state.books} user={this.state.user}/>
            </div>
        );
    }
}

export default App;
