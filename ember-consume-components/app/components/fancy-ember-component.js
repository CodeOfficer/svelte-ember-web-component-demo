import Component from "@glimmer/component";
import { computed } from "@ember/object";

export default class FancyEmberComponent extends Component {
  @computed("args.value")
  get valueFromComputed() {
    return "computed + " + this.args.value;
  }
}
