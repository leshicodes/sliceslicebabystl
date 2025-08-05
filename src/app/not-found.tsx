import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import { FaPizzaSlice } from "react-icons/fa";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found | Slice Slice Baby"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-primary">
                <FaPizzaSlice className="inline-block mx-auto" />
              </span>
              <span className="text-[6rem] block font-heading text-primary">
                404
              </span>
              <h1 className="h2 mb-4 font-heading">Oops! Slice Not Found</h1>
              <div className="content">
                <p>
                  Looks like the pizza you&apos;re looking for has been eaten! The page you requested
                  might have been removed, had its name changed, or is temporarily unavailable.
                </p>
              </div>
              <Link href="/" className="btn btn-primary mt-8">
                Back to our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
