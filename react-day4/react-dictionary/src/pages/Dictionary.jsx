import { useState } from "react";
import Header from "../components/Header";

function Dictionary() {
  // states for api calls
  const [isLoading, setIsLoading] = useState(false);

  // api for dictionary
  const dictionaryApiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  async function fetchDictionaryApi(word) {
    console.log("API fetch started");
  }
  return (
    <div>
      <Header />
      <h1>Dictionary</h1>
    </div>
  );
}

export default Dictionary;
