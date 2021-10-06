import React, { useCallback, useState } from "react";

export const SearchContext = React.createContext({
  limit: 7,
  addKeyword: () => {},
  isLoading: true,
  loadedCategories: [],
  error: null,
  myUrl: new URL(
    "http://api.mediastack.com/v1/news"
    // "https://tech-sport-b56c8-default-rtdb.firebaseio.com/tech.json" // Alternative url to avoid an infinite loop problem
  ),
  urlCallback: () => {},
  numberOfPages: null,
  keyword: "",
});

const SearchContextProvider = (props) => {
  const limit = 7;

  const url = new URL(
    "http://api.mediastack.com/v1/news"
    // "https://tech-sport-b56c8-default-rtdb.firebaseio.com/tech.json" // Alternative url to avoid an infinite loop problem
  );
  url.searchParams.append("access_key", "5af1e63e9a585be7f7e6eee596ba2679");
  url.searchParams.append("languages", "en");

  const [myUrl, setMyUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [error, setError] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(null);
  const [keyword, setKeyword] = useState("");

  const addKeyword = (keyword, parameter) => {
    console.log("addKW", keyword, parameter);
    if (keyword === undefined) {
      return;
    }
    if (keyword === "keywords") {
      setKeyword(parameter);
    }

    var searchParams = new URLSearchParams(myUrl.search);

    let keysAreEqual = false;
    searchParams.forEach(function (value, key) {
      // console.log("Original: ", key, value);
      if (key === keyword && value === parameter) {
        keysAreEqual = true;
      } else if (key === keyword) {
        keysAreEqual = true;
        value = parameter;
        setMyUrl(() => {
          if (myUrl !== undefined) {
            myUrl.searchParams.set(keyword, parameter);
          }
          return myUrl;
        });
        // console.log("Modified: ", key, value);
      }
    });

    if (keysAreEqual === false) {
      setMyUrl(() => {
        if (myUrl !== undefined) {
          myUrl.searchParams.append(keyword, parameter);
        }
        return myUrl;
      });
    }
  };

  const urlCallback = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(myUrl);

      if (!response.ok) {
        throw new Error("Something went wrong! ");
      }

      const data = await response.json();

      // console.log("data.pag: ", data.pagination);
      console.log("After resp OK: ", myUrl.href);

      const categories = [];

      for (const key in data) {
        const category = {
          ...data[key],
        };
        categories.push(category);
      }

      setIsLoading(false);
      setLoadedCategories(categories);
      setNumberOfPages(() => {
        const newNumberOfPages = Math.round(
          categories[0].total / categories[0].limit
        );
        // console.log("setNr of pages: ", newNumberOfPages);
        // console.log(
        //   "total: ",
        //   categories[0].total,
        //   "limit: ",
        //   categories[0].limit
        // );
        return newNumberOfPages;
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [setIsLoading, myUrl]); // Struggling with the demons of Callback Hell... :( BUT SOLVED IT!!! :D

  const contextValue = {
    limit: limit,
    addKeyword: addKeyword,
    isLoading: isLoading,
    loadedCategories: loadedCategories,
    error: error,
    myUrl: myUrl,
    urlCallback: urlCallback,
    numberOfPages: numberOfPages,
    keyword: keyword,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
