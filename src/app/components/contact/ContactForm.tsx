const ContactForm = () => {
  return (
    <div className="contact-form-wrap bg-light-gray p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
      <form action="#">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-field">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div className="form-field">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
        </div>
        <div className="form-field mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
        <div className="form-field mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          ></textarea>
        </div>
        <div className="mt-6">
          <button type="submit" className="button orange-btn w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
