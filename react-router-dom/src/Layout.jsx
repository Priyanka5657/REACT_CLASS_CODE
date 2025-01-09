import { Link,Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <link to ="home">Home</link>
      <link to ="contact">contact</link>
      <Link to ="About">About</Link>

      <Outlet/>
    </>
  )
}

export default Layout
