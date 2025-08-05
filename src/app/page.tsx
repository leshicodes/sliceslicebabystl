import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import { FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import menuData from "@/data/menu.json";

const Home = () => {
  const callToAction = getListPage("sections/call-to-action.md");
  const { hours, location } = menuData;

  return (
    <>
      <SeoMeta />
      {/* Hero Section */}
      <section className="section pt-14 bg-tertiary">
        <div className="container">
          <div className="row items-center">
            <div className="lg:col-6 md:col-6">
              <h1 className="mb-4 text-4xl lg:text-6xl font-heading text-primary">
                Fresh Pizza, Made With Love
              </h1>
              <p className="mb-8 text-lg">
                Handcrafted pizzas with the finest ingredients, baked to perfection
                in our stone oven. Experience authentic flavors that will transport
                your taste buds to Italy.
              </p>
              <Link className="btn btn-primary" href="/menu">
                View Our Menu
              </Link>
            </div>
            <div className="lg:col-6 md:col-6">
              <ImageFallback
                src="/images/menu/margherita.jpg"
                className="rounded-lg shadow-lg"
                width="600"
                height="400"
                alt="Delicious pizza"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-3xl lg:text-4xl text-primary mb-12">
              Our Signature Pizzas
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {menuData.pizzas.slice(0, 3).map((pizza) => (
              <div
                className="rounded-xl bg-white p-5 shadow-lg"
                key={`pizza-${pizza.id}`}
              >
                <ImageFallback
                  className="w-full h-48 object-cover rounded-lg"
                  src={pizza.image}
                  width={300}
                  height={200}
                  alt={pizza.name}
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="h4 font-heading text-primary">{pizza.name}</h3>
                    <span className="text-lg font-bold">
                      ${pizza.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="btn btn-outline-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Hours and Location */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="lg:col-6 md:col-6 mb-8 lg:mb-0">
              <h2 className="font-heading text-3xl text-primary mb-6">Hours</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Monday:</strong> {hours.monday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Tuesday:</strong> {hours.tuesday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Wednesday:</strong> {hours.wednesday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Thursday:</strong> {hours.thursday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Friday:</strong> {hours.friday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Saturday:</strong> {hours.saturday}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-primary mr-3" />
                  <span>
                    <strong>Sunday:</strong> {hours.sunday}
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-6 md:col-6">
              <h2 className="font-heading text-3xl text-primary mb-6">Find Us</h2>
              <div className="mb-4 flex items-start">
                <FaMapMarkerAlt className="text-primary mr-3 mt-1" />
                <p>
                  {location.address}, {location.city}, {location.state}{" "}
                  {location.zip}
                </p>
              </div>
              <div className="mb-4 flex items-center">
                <FaPhone className="text-primary mr-3" />
                <p>{location.phone}</p>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
