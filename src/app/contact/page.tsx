import config from "@/config/config.json";
import SeoMeta from "@/partials/SeoMeta";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import menuData from "@/data/menu.json";
import Link from "next/link";

const Contact = async () => {
  const { contact_form_action } = config.params;
  const { hours, location } = menuData;

  return (
    <>
      <SeoMeta
        title="Contact Us | Slice Slice Baby"
        description="Get in touch with us for reservations, catering inquiries, or any questions you might have."
      />
      <section className="section pt-14">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Have questions or want to make a reservation? We&apos;d love to hear from
              you!
            </p>
          </div>

          <div className="row items-start">
            <div className="lg:col-6 mb-10 lg:mb-0">
              {/* Contact Info */}
              <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
                <h2 className="font-heading text-2xl text-primary mb-6">
                  Contact Information
                </h2>

                <div className="mb-6 flex items-start">
                  <FaMapMarkerAlt className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p>
                      {location.address}
                      <br />
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <FaPhone className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>{location.phone}</p>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <FaEnvelope className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>{location.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <ul className="space-y-1">
                      <li>
                        <span className="font-medium">Monday:</span> {hours.monday}
                      </li>
                      <li>
                        <span className="font-medium">Tuesday:</span> {hours.tuesday}
                      </li>
                      <li>
                        <span className="font-medium">Wednesday:</span>{" "}
                        {hours.wednesday}
                      </li>
                      <li>
                        <span className="font-medium">Thursday:</span> {hours.thursday}
                      </li>
                      <li>
                        <span className="font-medium">Friday:</span> {hours.friday}
                      </li>
                      <li>
                        <span className="font-medium">Saturday:</span> {hours.saturday}
                      </li>
                      <li>
                        <span className="font-medium">Sunday:</span> {hours.sunday}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-tertiary rounded-xl p-6 flex items-center justify-center">
                <p className="text-center">
                  <Link
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    View on Google Maps
                  </Link>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-6">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h2 className="font-heading text-2xl text-primary mb-6">
                  Send Us a Message
                </h2>

                <form action={contact_form_action} method="POST">
                  <div className="mb-6">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="john.doe@email.com"
                      type="email"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="Reservation Request"
                      type="text"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      placeholder="Your message here..."
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
