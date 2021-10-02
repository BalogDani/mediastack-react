import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import SearchContextProvider, { SearchContext } from "./store/search-context";
import { Pagination } from "react-bootstrap";
import FooterNavigation from "./components/navigation/FooterNavigation";
import { useContext } from "react";

function App() {
  const { addKeyword, setNumberOfPages } = useContext(SearchContext);

  const setNrOfPages = (event) => {
    event.preventDefault();
    setNumberOfPages();
    console.log("Here");
  };

  return (
    <SearchContextProvider>
      <Layout>
        <Switch>
          <Route path="/technology" exact>
            <CategoryPage category="technology" />
          </Route>
          <Route path="/sports" exact>
            <CategoryPage category="sports" />
          </Route>
          <Route path="*">
            <Redirect to="technology" />
          </Route>
        </Switch>
        <FooterNavigation>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item onClick={setNrOfPages}>{11}</Pagination.Item>
            <Pagination.Item id="activePage" active>
              {12}
            </Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </FooterNavigation>
      </Layout>
    </SearchContextProvider>
  );
}

export default App;
