
"use client";

const InfoCard = ({
  title,
  line1,
  line2,
}: {
  title: string;
  line1: string;
  line2: string;
}) => (
  <div className="contact-info-item flex items-start gap-5 bg-white p-6 rounded-lg shadow-sm">
    <div className="icon flex-shrink-0"></div>
    <div>
      <h4 className="text-xl font-bold text-primary">{title}</h4>
      <p className="text-secondary mt-1">{line1}</p>
      <p className="text-secondary">{line2}</p>
    </div>
  </div>
);

const ContactDetails = () => {
  return (
    <div className="contact-info-wrap space-y-6">
      <div className="section-title">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-secondary mt-2">
          Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
        </p>
      </div>
      <InfoCard
        title="Office address"
        line1="328 Queensberry Street, North"
        line2="Melbourne VIC 3051, Australia."
      />
      <InfoCard
        title="Email address"
        line1="support@etutor.com"
        line2="info@etutor.com"
      />
      <InfoCard
        title="Phone number"
        line1="+8801 2345 6789"
        line2="+8801 2345 6789"
      />
    </div>
  );
};

export default ContactDetails;
