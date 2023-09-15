import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/app/languages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
    "og:title": "Title",
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
