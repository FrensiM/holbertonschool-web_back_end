import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.__floors = floors;
  }  

  get sqft() {
    return super.sqft;
  }  

  get floors() {
    return this.__floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
    }
  }
