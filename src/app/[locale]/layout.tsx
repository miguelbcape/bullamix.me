import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Provider from "@/context/progress";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { URL_ROOT } from "@/libs/config";

export const viewport = {
  themeColor: "#fff",
};

export const metadata = {
  metadataBase: URL_ROOT ? new URL(URL_ROOT) : "",
};

const open_sans = Open_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={open_sans.className}>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <div className="mx-auto px-0 flex flex-col min-h-screen text-[15px] text-slate-500">
              <Header />
              <main id="content" className="flex flex-col">
                {children}
              </main>
              <Footer />
            </div>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
