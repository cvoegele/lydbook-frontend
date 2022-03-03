import React from 'react';
import './book-tile.css'
import {Book} from "../../entities/Book";
import {getLengthOfBook} from "../../services/book-service";

interface BookTileProps {
    accentColor: string; //
    listeningPercent: number;
    currentlyListening: boolean;
    book: Book;
}

export function BookTile(props: BookTileProps) {

    const listeningBarWidthStyleAttribute = {
        width: props.listeningPercent,
        backgroundColor: props.accentColor

    }

    const accentColor = {
        backgroundColor: props.accentColor
    }

    const timeInMinutes: number = getLengthOfBook(props.book.id) * ((100 - props.listeningPercent) / 100);
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = Math.floor(timeInMinutes % 60);

    return (
        <div id={props.book.id + "_book_tile"} className="book-component">
            <div className={"listening-text-block"}>
                <div className={"listening-text"}>
                    {hours} h {minutes} min left
                </div>
            </div>
            <div className="listening-bar-full">
                <div className="listening-bar-progress" style={listeningBarWidthStyleAttribute}/>
            </div>
            <div className="book-cover-border" style={accentColor}>
                <img className="book-cover" alt={"test"}
                     src={`/api/v1/audiobook/${props.book.id}/cover`}/>
            </div>
            <div className="book-title">{props.book.title}</div>
        </div>
    );
}

