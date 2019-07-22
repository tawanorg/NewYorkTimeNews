function DataEntry(entities, result) {
  this.entities = entities || null;
  this.result = result || null;
}

export default {
  isFetched: false,
  isFetching: false,
  isError: false,
  errorMessage: null,
  data: new DataEntry,
}