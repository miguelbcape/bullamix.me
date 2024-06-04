import { URL_ROOT } from "@/libs/config";
import Provider from "@/context/progress";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Open_Sans } from "next/font/google";
import "./globals.css";

export const viewport = {
  themeColor: "#fff",
};

export const metadata = {
  metadataBase: URL_ROOT ? new URL(URL_ROOT) : "",
};

const open_sans = Open_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={open_sans.className}>
          <Provider>
            <div className="mx-auto px-0 flex flex-col min-h-screen text-[15px] text-slate-500">
              <Header />
              <main id="content" className="flex flex-col">
                {children}
              </main>
              <Footer />
            </div>
          </Provider>
      </body>
    </html>
  );
}
