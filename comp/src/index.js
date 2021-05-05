import "./button.scss";

class Button extends HTMLElement {
  connectedCallback() {
    this.setAttribute("aria-role", "button");
    this.addEventListener("click", this.sayHello);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.sayHello);
  }

  sayHello() {
    console.log("hello there!");
  }

  sayHi() {
    console.log("Hi");
  }
}

customElements.define("my-button", Button);
