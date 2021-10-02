import React, { useCallback, useState } from "react";

export const SearchContext = React.createContext({
  addKeyword: () => {},
  isLoading: true,
  loadedCategories: [],
  error: null,
  myUrl: new URL(
    "http://api.mediastack.com/v1/news"
    // "https://tech-sport-b56c8-default-rtdb.firebaseio.com/tech.json" // Alternative url to avoid an infinite loop problem
  ),
  urlCallback: () => {},
});

const SearchContextProvider = (props) => {
  const url = new URL(
    "http://api.mediastack.com/v1/news"
    // "https://tech-sport-b56c8-default-rtdb.firebaseio.com/tech.json" // Alternative url to avoid an infinite loop problem
  );
  url.searchParams.append("access_key", "5af1e63e9a585be7f7e6eee596ba2679");
  url.searchParams.append("languages", "en");

  const [myUrl, setMyUrl] = useState(url);

  const addKeyword = (keyword, parameter) => {
    if (keyword === undefined) {
      return myUrl;
    }
    console.log("the new", url.href);
    setMyUrl(() => {
      if (myUrl !== undefined) {
        myUrl.searchParams.append(keyword, parameter);
      }
      return myUrl;
    });
    console.log("keyword", keyword, "parameter", parameter);
    console.log("addkeyword: ", myUrl);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  const [error, setError] = useState(null);

  const urlCallback = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(myUrl);
      console.log("After response: ", myUrl.href);

      if (!response.ok) {
        throw new Error("Something went wrong! ");
      }

      const data = await response.json();
      console.log("After resp OK: ", myUrl.href);
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
  }, [setIsLoading, myUrl]); // Struggling with the demons of Callback Hell... :( BUT SOLVED IT!!! :D

  const contextValue = {
    addKeyword: addKeyword,
    isLoading: isLoading,
    loadedCategories: loadedCategories,
    error: error,
    myUrl: myUrl,
    urlCallback: urlCallback,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
