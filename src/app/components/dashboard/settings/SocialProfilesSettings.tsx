import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const SocialInput = ({
  id,
  icon,
  placeholder,
}: {
  id: string;
  icon: React.ReactNode;
  placeholder: string;
}) => (
  <div className="form-field">
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
      />
    </div>
  </div>
);

const SocialProfilesSettings = () => {
  return (
    <form action="#" className="form max-w-lg">
      <div className="space-y-6">
        <SocialInput
          id="facebook"
          icon={<Facebook size={20} />}
          placeholder="https://facebook.com/username"
        />
        <SocialInput
          id="twitter"
          icon={<Twitter size={20} />}
          placeholder="https://twitter.com/username"
        />
        <SocialInput
          id="linkedin"
          icon={<Linkedin size={20} />}
          placeholder="https://linkedin.com/in/username"
        />
        <SocialInput
          id="youtube"
          icon={<Youtube size={20} />}
          placeholder="https://youtube.com/channel/..."
        />
        <div>
          <button type="submit" className="button orange-btn">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialProfilesSettings;
