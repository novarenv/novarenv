import { Navbar, Footer } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const styles = {
    "main": "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 font-[family-name:var(--font-geist-sans)] bg-light-bg dark:bg-dark-bg"
  }

  return (
    <div className={styles.main}>
      <Navbar />
      <div className="my-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout