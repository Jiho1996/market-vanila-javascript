export default class Core {
  constructor(domNode, props) {
    this.domNode = domNode;
    this.props = props;
    this.render();
  }

  render() {
    this.domNode.innerHTML = this.template();
    this.mount();
  }

  template() {}
  mount() {}
}
