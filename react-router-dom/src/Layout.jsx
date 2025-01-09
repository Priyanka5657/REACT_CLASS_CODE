import { Link,Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to ="home">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ="contact">contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to ="About">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;

      <Outlet/>
    </>
  )
}

export default Layout
