import Header from "@/components/Header/page";
import Image from "next/image";

import LangdingPage from "./Landing/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <LangdingPage></LangdingPage>
    </div>
  );
}
