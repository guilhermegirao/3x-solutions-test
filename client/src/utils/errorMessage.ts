const errorMessage = (error: any) =>
  (error.response && error.response.data && error.response.data.error) ||
  error.message ||
  error.data.message ||
  error.toString();

export default errorMessage;
