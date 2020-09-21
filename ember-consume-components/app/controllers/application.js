import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @tracked value1 = 0;
  @tracked value2 = 5;
  @tracked value3 = 0;

  @action
  incValue1(e) {
    console.log(`ember: ${JSON.stringify(e.detail)}`);
    this.value1++;
  }

  @action
  incValue2(e) {
    console.log(`ember: ${JSON.stringify(e.detail)}`);
    this.value2++;
  }

  @action
  incValue3(e) {
    console.log(`ember: ${JSON.stringify(e.detail)}`);
    this.value3++;
  }
}
