import {Book} from "./Book";

export class Series {
    private _id: number;
    private _name: string;
    private _books: Book[]


    constructor(id: number, name: string, books: Book[]) {
        this._id = id;
        this._name = name;
        this._books = books;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get books(): Book[] {
        return this._books;
    }

    set books(value: Book[]) {
        this._books = value;
    }
}
