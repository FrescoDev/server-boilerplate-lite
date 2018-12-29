import { Component } from "preact";
import { header_text } from "./index.content.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{header_text}</h1>
      </div>
    );
  }
}
