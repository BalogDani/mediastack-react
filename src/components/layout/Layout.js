import classes from "./Layout.module.scss";
import MainNavigation from "../navigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
