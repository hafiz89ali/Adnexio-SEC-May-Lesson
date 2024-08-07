import { useState } from "react";

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
      <h1>Dictionary</h1>
    </div>
  );
}

export default Dictionary;
