// import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text'
class MyGreeting extends Polymer.Element {
  static get is() {
    return 'login-component';
  }

  // Declare properties for the element's public API
  static get properties() {
    return {
      user: {
        type: String,
        value: '',
        notify: true
      },
      pass: {
        type: String,
        value: '',
        notify: true
      }
    };
  }
  _clickLogin() {
    this.$.datamanager.login();
  }

  _clickForget() {
    this.dispatchEvent(new CustomEvent('go-to-forget', {
      bubbles: true,
      composed: true,
    }));
  }

  _clickRegistry() {
    this.dispatchEvent(new CustomEvent('go-to-registry', {
      bubbles: true,
      composed: true,
    }));
  }

}

customElements.define(MyGreeting.is, MyGreeting);
