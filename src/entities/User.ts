export enum Role {
    ADMIN,
    PLEB
}

export class User {
    private _id: number;
    private _name: string;
    private _role: Role


    constructor(id: number, name: string, role: Role) {
        this._id = id;
        this._name = name;
        this._role = role;
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

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }
}