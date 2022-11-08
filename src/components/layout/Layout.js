import classes from "./Layout.module.css";
import { MainHeader } from "./MainHeader";

export const Layout = ({children}) => {
  return <>
    <MainHeader />
    <main className={classes.main}>{children}</main>
  </>;
};
