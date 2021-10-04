import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import "./App.scss";
import CategoryPage from "./pages/CategoryPage";
import SearchContextProvider from "./store/search-context";
import FooterNavigation from "./components/navigation/FooterNavigation";

function App() {
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
        <FooterNavigation />
      </Layout>
    </SearchContextProvider>
  );
}

export default App;
