function DataEntry(entities, result) {
  this.entities = entities || null;
  this.result = result || null;
}

export function ErrorMessage(status, message) {
  this.status = status || null;
  this.message = message || null;
}

export default {
  isFetched: false,
  isFetching: false,
  isError: false,
  errorMessage: null,
  data: new DataEntry,
}