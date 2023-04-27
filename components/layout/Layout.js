/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import TitleBar from "../titleBar/TitleBar";
import { useRouter } from "next/router";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import useLoading from "@/hooks/useLoading";
import { Toaster } from "react-hot-toast";
import MetaHead from "../MetaHead/MetaHead";

const Layout = ({ children }) => {
  const { loading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/signup") {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userId");
      localStorage.setItem("isUser", "false");
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <MetaHead />
      <div className={styles.wrapper}>
        <Toaster />
        <TitleBar />
        <div className={styles.childrenContainer}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  wrapper: `flex bg-light relative flex-1 dark:bg-dark text-gray-600 dark:text-darkText min-h-screen w-screen select-none flex-col overflow-hidden `,
  childrenContainer: `flex w-full flex-1`,
};

export default Layout;
