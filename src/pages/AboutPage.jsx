import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, Sprout, Users } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';

const values = [
  {
    title: 'Community',
    desc: 'We believe in uplifting communities through property ownership, education and development.',
    icon: Users,
  },
  {
    title: 'Integrity',
    desc: 'Honesty, transparency and professionalism guide every client relationship.',
    icon: Landmark,
  },
  {
    title: 'Growth',
    desc: 'We create opportunities that enable families, businesses and young entrepreneurs to prosper.',
    icon: Sprout,
  },
  {
    title: 'Excellence',
    desc: 'We are committed to delivering exceptional service with lasting value.',
    icon: Building2,
  },
];

const serviceAreas = [
  'Vhembe District',
  'Giyani',
  'Malamulele',
  'Musina',
  'Thohoyandou',
  'Polokwane',
  'Gauteng',
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Building futures through property, empowering communities through opportunity."
        breadcrumbs={[{ label: 'About' }]}
        image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="section-padding">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                Light Vision Property & Youth Farming
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Light Vision Property and Youth Farming (Pty) Ltd was founded in{' '}
                <strong>2018</strong> by <strong>Mr. Netshiavha Munei</strong> and officially registered in{' '}
                <strong>2019</strong>.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                The company was established with a dual purpose: creating opportunities for young people through farming while helping families and investors own, rent and manage quality properties across South Africa.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                We believe that land creates opportunity, while property creates security. Through these two divisions, we continue to build stronger communities and brighter futures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Light Vision Property and Youth Farming team"
                className="w-full rounded-3xl shadow-luxury"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission"
            title="Building Futures"
            subtitle="We are committed to making property ownership accessible while empowering communities through practical opportunities in agriculture and development."
          />

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-9">
              Our mission is to make property ownership accessible, provide trusted real estate solutions, empower young people through agricultural opportunities, and contribute meaningfully to sustainable community development across South Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-gradient">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Principles"
            title="Values We Live By"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-gold-400" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where We Operate"
            title="Service Areas"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="text-xl font-semibold text-navy-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Divisions"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-2xl font-serif mb-6">Property Division</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Property Sales</li>
                <li>✔ Property Rentals</li>
                <li>✔ Property Estate Management</li>
                <li>✔ Property Transfer Assistance</li>
                <li>✔ Bond Applications</li>
                <li>✔ Home Loan Assistance</li>
                <li>✔ Housing Subsidy Assistance</li>
                <li>✔ Legal Advisory</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-2xl font-serif mb-6">Youth &amp; Farming Division</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Youth Farming Opportunities</li>
                <li>✔ Agricultural Training</li>
                <li>✔ Community Development Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visit Us"
            title="Our Offices"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Head Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Tswinga Nare Housing A<br />
                House No. 283<br />
                Thohoyandou<br />
                0950<br />
                Limpopo
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Business Office</h3>
              <p className="text-gray-600 leading-relaxed">
                B02 Mashapha Complex<br />
                Behind Post Office<br />
                Thohoyandou<br />
                0950<br />
                Limpopo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-gradient">
        <div className="container-luxury px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Meet Our Founder</h2>
          <h3 className="text-2xl text-gold-400 mb-4">Mr. Netshiavha Munei</h3>
          <p className="max-w-3xl mx-auto text-gray-300 leading-8">
            Founded Light Vision Property and Youth Farming with the vision of creating opportunities through property ownership, agricultural development, and community empowerment. His leadership continues to drive the company&apos;s commitment to excellence, integrity, and sustainable growth.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-md p-10">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">Let&apos;s Build Something Meaningful Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you are looking for property guidance or want to explore opportunities with our youth and farming initiatives, we would love to hear from you.
            </p>
            <Link to="/contact" className="btn-navy">
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
