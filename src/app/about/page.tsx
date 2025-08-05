import ImageFallback from "@/helpers/ImageFallback";
import SeoMeta from "@/partials/SeoMeta";
import { FaUtensils, FaLeaf, FaHandsHelping } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "Head Chef",
      image: "/images/team/chef.jpg",
      bio: "Marco trained in Naples, Italy and brings over 20 years of pizza-making experience to Slice Slice Baby.",
    },
    {
      name: "Sofia Garcia",
      role: "Manager",
      image: "/images/team/manager.jpg",
      bio: "Sofia ensures that every customer has an amazing dining experience from the moment they walk through our doors.",
    },
    {
      name: "James Wilson",
      role: "Pizza Artist",
      image: "/images/team/pizza-artist.jpg",
      bio: "James is known for his creative topping combinations and perfectly crafted crusts.",
    },
  ];

  return (
    <>
      <SeoMeta
        title="About Us | Slice Slice Baby"
        description="Learn about our story, our commitment to quality ingredients, and meet our amazing team."
      />
      <section className="section pt-14">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl text-primary mb-4">
              Our Story
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming the neighborhood&apos;s favorite pizza
              joint.
            </p>
          </div>

          {/* Story Section */}
          <div className="row items-center mb-16">
            <div className="lg:col-6 mb-8 lg:mb-0">
              <ImageFallback
                className="rounded-lg shadow-lg"
                src="/images/about/restaurant.jpg"
                width={600}
                height={400}
                alt="Slice Slice Baby Restaurant"
              />
            </div>
            <div className="lg:col-6">
              <h2 className="font-heading text-3xl text-primary mb-4">
                How We Started
              </h2>
              <p className="mb-4">
                Slice Slice Baby was founded in 2015 by the Rossi family, who
                brought their treasured pizza recipes from Naples, Italy. What
                started as a small takeout spot quickly grew into the beloved
                restaurant it is today.
              </p>
              <p>
                Our mission has always been simple: serve delicious, authentic
                pizza made with love and the finest ingredients. We believe that
                great food brings people together, and there&apos;s no better way to
                gather than around a freshly-baked pizza.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl text-primary mb-12 text-center">
              Our Values
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary text-primary mb-4">
                  <FaUtensils size={30} />
                </div>
                <h3 className="font-heading text-xl mb-3">
                  Quality Ingredients
                </h3>
                <p>
                  We source the freshest local ingredients and import specialty
                  items directly from Italy to ensure authentic flavor in every
                  bite.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary text-primary mb-4">
                  <FaLeaf size={30} />
                </div>
                <h3 className="font-heading text-xl mb-3">Sustainability</h3>
                <p>
                  We&apos;re committed to reducing our environmental impact through
                  sustainable practices and eco-friendly packaging.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary text-primary mb-4">
                  <FaHandsHelping size={30} />
                </div>
                <h3 className="font-heading text-xl mb-3">Community</h3>
                <p>
                  We believe in giving back to our community through local
                  partnerships, events, and charitable initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="font-heading text-3xl text-primary mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={`team-${index}`}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <ImageFallback
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    src={member.image}
                    width={128}
                    height={128}
                    alt={member.name}
                  />
                  <h3 className="font-heading text-xl text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
