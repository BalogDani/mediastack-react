import React, { useCallback, useEffect, useState } from "react";

export const SearchContext = React.createContext({
  addKeyword: () => {},
  isLoading: true,
  loadedCategories: [],
  url: "",
  error: null,
});

const SearchContextProvider = (props) => {
  const url = new URL(
    // "http://api.mediastack.com/v1/news"
    "https://tech-sport-b56c8-default-rtdb.firebaseio.com/tech.json" // Alternative url
  );
  url.searchParams.append("access_key", "5af1e63e9a585be7f7e6eee596ba2679");
  url.searchParams.append("languages", "en");

  const [myUrl, setMyUrl] = useState("");

  const addKeyword = (keyword, parameter) => {
    url.searchParams.append(keyword, parameter);
    if (keyword === undefined) {
      return myUrl;
    }
    setMyUrl(url.href);
    console.log("keyword", keyword, "parameter", parameter);
    console.log("addkeyword: ", myUrl);
    return myUrl;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  const [error, setError] = useState(null);

  const urlCallback = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    addKeyword();
    try {
      const response = await fetch(url);
      console.log("After response: ", url.href);

      if (!response.ok) {
        throw new Error("Something went wrong! ");
      }

      const data = await response.json();
      console.log("After resp OK: ", url.href);
      console.log(data);

      const categories = [];

      for (const key in data) {
        const category = {
          ...data[key],
        };
        categories.push(category);
      }

      setIsLoading(false);
      setLoadedCategories(categories);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [setIsLoading]); // Struggling with the demons of Callback Hell... :(

  useEffect(() => {
    urlCallback();
    console.log("urlCallback");
  }, [urlCallback]);

  const contextValue = {
    addKeyword: addKeyword,
    url: url,
    isLoading: isLoading,
    loadedCategories: loadedCategories,
    error: error,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
