import { useState } from "react";
import "./App.css";
import { getCountryInfoByName } from "./services/restCountries";
import { ToastContainer, toast } from "react-toastify";
import { HttpStatusCode } from "axios";

function App() {
  const [countryName, setCountryName] = useState("");
  const [countryFlag, setCountryFlag] = useState("");

  const handleSubmit = async () => {
    const response = await getCountryInfoByName(countryName);
    if (response.status === HttpStatusCode.Ok) {
      toast.success("Bandeira atualizada com sucesso!!", {
        position: "top-right",
        autoClose: 5000,
        toastId: `${response.status}`,
      });
    } else {
      toast.error("País não encontrado!!", {
        position: "top-right",
        autoClose: 5000,
        toastId: `${response.status}`,
      });
    }
    setCountryFlag(response.data);
    setCountryName("");
  };

  return (
    <>
      <div className="flex flex-col w-sm">
        <label htmlFor="countryName" className="text-start">
          Nome do país
        </label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          className="bg-white rounded-lg border border-black p-2"
          required
          placeholder="Insira o nome do país"
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-600 rounded-2xl p-4 mt-5 cursor-pointer"
        >
          Pesquisar
        </button>
      </div>
      {!!countryFlag && (
        <img src={countryFlag} alt="Country Flag" className="mt-10 mx-auto" />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
