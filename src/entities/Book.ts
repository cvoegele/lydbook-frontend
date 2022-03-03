import {Series} from "./Series";
import {Author} from "./Author";

export class Book {

    private _id: number;
    private _dataName: string;
    private _title: string;
    private _author: Author;
    private _series: Series;
    private _uploadDate: Date;
    private _bookNumber: number;
    private _length: number;

    constructor(id: number, dataName: string, title: string, author: Author, series: Series, uploadDate: Date, bookNumber: number, length: number) {
        this._id = id;
        this._dataName = dataName;
        this._title = title;
        this._author = author;
        this._series = series;
        this._uploadDate = uploadDate;
        this._bookNumber = bookNumber;
        this._length = length;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get dataName(): string {
        return this._dataName;
    }

    set dataName(value: string) {
        this._dataName = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get author(): Author {
        return this._author;
    }

    set author(value: Author) {
        this._author = value;
    }

    get series(): Series {
        return this._series;
    }

    set series(value: Series) {
        this._series = value;
    }

    get uploadDate(): Date {
        return this._uploadDate;
    }

    set uploadDate(value: Date) {
        this._uploadDate = value;
    }

    get bookNumber(): number {
        return this._bookNumber;
    }

    set bookNumber(value: number) {
        this._bookNumber = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}

