function ErrorMessage(status = 403, message = 'There is something wrong') {
  this.status = status;
  this.message = message;
}

export default {
  isFetched: false,
  isFetching: false,
  isFailed: new ErrorMessage,
  records: [],
}