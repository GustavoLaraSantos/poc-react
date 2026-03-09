import axios, { HttpStatusCode } from "axios";

interface ApiResponse<T> {
  status: number;
  data: T;
  errorMessage?: string;
}

export const getCountryInfoByName = async (
  countryName: string,
): Promise<ApiResponse<string>> => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`,
    );
    return {
      status: HttpStatusCode.Ok,
      data: response.data[0].flags.png,
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
