import Core from "./Core/Core.js";
import Banner from "./Home/Banner.js";
import { $ } from "../utils/dom.js";
import Header from "./Home/Header.js";

export default class View extends Core {
  render() {
    new Header($("#header"));
    new Banner($("#app"));
  }
}
