import Core from "../Core/Core.js";

export default class Banner extends Core {
  template() {
    return `
        <div id="banner">
                <img src="../../images/banners/banner2.png" />
        </div>
        `;
  }
}
