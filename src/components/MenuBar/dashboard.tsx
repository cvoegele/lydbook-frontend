import React from "react";
import {Book} from "../../entities/Book";
import {BookTile} from "../Book/book-tile";
import {getAccentColorOfBook, getListeningPositionOfBookByUser} from "../../services/book-service";
import {User} from "../../entities/User";
import './dashboard.css'

export class Dashboard extends React.Component<{books: Book[], user: User}, {}> {
    render() {

        let tiles = []
        for (let book of this.props.books) {
            tiles.push(<BookTile listeningPercent={getListeningPositionOfBookByUser(this.props.user.name, book.id)}
                                 currentlyListening={false} book={book}/>)
        }

        return <div className={"main-container"}>
            {tiles}
        </div>
    }
}