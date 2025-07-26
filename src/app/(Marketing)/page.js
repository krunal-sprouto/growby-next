import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const locale = useLocale();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`/dashboard`}
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Dashboard
        </Link>
    </div>
  );
}
