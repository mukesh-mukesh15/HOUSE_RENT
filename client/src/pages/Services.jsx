import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: "Key Management",
    description:
      "We ensure secure handling and timely exchange of property keys between owners and tenants. Whether it's tenant handover, inspection access, or maintenance entry—we handle it professionally, avoiding hassle for both parties.",
  },
  {
    title: "Property Management",
    description:
      "We offer complete property care—regular inspections, rent follow-ups, tenant coordination, and maintenance tracking—giving landlords peace of mind and keeping properties well-maintained.",
  },
  {
    title: "Renting Solution",
    description:
      "From listing your property with attractive visuals to filtering quality tenants and conducting showings, we take care of the entire rental process quickly and efficiently.",
  },
  {
    title: "Rent Agreement",
    description:
      "We draft legally compliant and customized rent agreements, handle stamping and e-signing, and ensure both parties are protected with clear, enforceable terms.",
  },
  {
    title: "Packers & Movers",
    description:
      "Moving in or out? Our trusted packers and movers partners ensure safe, timely relocation with proper packing, loading, and insurance coverage—making shifting stress-free.",
  },
];

const Services = () => {
  return (
    <>
      <section className="services-section py-5">
        <div className="container">
          <h2 className={`text-center mb-5 ${styles.heading}`}>Our Services</h2>
          <div className="row gx-4 gy-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 p-4 service-card">
                  <div className="service-tag mb-3">Service {index + 1}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container text-center">
          <p className="mb-1">&copy; 2025 Venus Property Group. All rights reserved.</p>
          <small>Contact: mukesh6380144020@gmail.com</small>
        </div>
      </footer>
    </>
  );
};

export default Services;