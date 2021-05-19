export class Module {
  constructor(name, reducers, sagas) {
    this.name = name;
    this.reducers = reducers;
    this.sagas = sagas;
  }

  getName = () => this.name;

  getReducers = () => this.reducers;

  getSagas = () => this.sagas;
}
