import { AxiosError } from "axios";

export type DataError = Error | AxiosError

const ErrorHandler = (error: DataError) => {
  console.error(error);
};

export { ErrorHandler };
