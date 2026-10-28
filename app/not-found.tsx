import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export default function NotFound() {
  return (
    <section>
      <div className="frame grid items-center gap-10 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-display">This ball rolled away.</h1>
          <p className="mt-6 max-w-[34ch] text-lead">
            The page you’re after isn’t here. Head back home or check out the menu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-hot">
              Go home
            </Link>
            <Link href="/menu" className="btn btn-outline">
              See the menu
            </Link>
          </div>
        </div>
        <Mascot who="frost" sizes="(min-width: 1024px) 30vw, 60vw" className="mx-auto w-[min(360px,70%)] lg:col-span-5" />
      </div>
    </section>
  );
}
