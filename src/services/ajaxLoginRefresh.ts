import axios, { HttpStatusCode } from "axios";

interface ApiResponse<T> {
  status: number;
  data: T;
  errorMessage?: string;
}

export const getLoginRefreshed = async (
): Promise<ApiResponse<string>> => {
  try {
    const response = await axios.get('/reactpoc/account/ping');
    return {
      status: HttpStatusCode.Ok,
      data: response.data.customer_name,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        status: 500,
        data: "",
        errorMessage: error.message,
      };
    } else {
      return {
        status: 500,
        data: "",
        errorMessage: "Internal server error",
      };
    }
  }
};
