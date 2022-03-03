import React from 'react';
import './App.css';
import {BookTile} from "./components/Book/book-tile";
import {Book} from "./entities/Book";
import {getAccentColorOfBook, getBooksByUser, getListeningPositionOfBookByUser} from "./services/book-service";
import {Role, User} from "./entities/User";
import {Menubar} from "./components/MenuBar/menubar";

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


    render() {
        let tiles = []
        for (let book of this.state.books) {
            tiles.push(<BookTile accentColor={getAccentColorOfBook(book.id)}
                                 listeningPercent={getListeningPositionOfBookByUser(this.state.user.name, book.id)}
                                 currentlyListening={false} book={book}/>)
        }

        return (
            <div className="App">
                <Menubar user={this.state.user} />
                <div className={"main-container"}>
                    {tiles}
                </div>
            </div>
        );
    }
}

export default App;
