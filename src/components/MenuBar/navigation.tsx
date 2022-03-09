import {Component} from "react";

export class Navigation extends Component<{}, {}> {
    render() {
        return <div>
            <button value={"Authors"}/>
            <button value={"Books"}/>
            <button value={"Series"}/>
        </div>;
    };
}
