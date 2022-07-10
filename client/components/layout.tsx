import React, { ReactNode } from "react";
// import { useRouter } from "next/router";

// import { AppContext } from "../lib/context";
// import Header from "@components/header";
// import styles from "@styles/layout.module.scss";
import CommonMeta from "@components/CommonMeta";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  // const router = useRouter();
  // const pathName = router.pathname;
  // const isIndexPage = pathName == "/";
  // const [menuOpened, setMenuOpened] = useState(false);
  // const contextData = { menuOpened, setMenuOpened };

  return (
    <>
      <CommonMeta />

      {/* <AppContext.Provider value={contextData}> */}
      {/* <Header isIndexPage={isIndexPage} /> */}
      <main>{children}</main>
      {/* </AppContext.Provider> */}
    </>
  );
};

export default Layout;
