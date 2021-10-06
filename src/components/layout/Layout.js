import classes from "./Layout.module.scss";
import MainNavigation from "../navigation/MainNavigation";
import FooterNavigation from "../navigation/FooterNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <FooterNavigation />
    </>
  );
};

export default Layout;
