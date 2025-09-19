// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\student\settings\page.tsx

import ProfileSettings from "@/app/components/dashboard/settings/ProfileSettings";
import PasswordSettings from "@/app/components/dashboard/settings/PasswordSettings";
import SocialProfilesSettings from "@/app/components/dashboard/settings/SocialProfilesSettings";

const SettingsSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow-sm">
    <div className="p-6 border-b">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default function StudentSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="student-title">
        <h2 className="text-2xl font-bold">Account Settings</h2>
      </div>

      <SettingsSection title="Profile">
        <ProfileSettings />
      </SettingsSection>

      <SettingsSection title="Change Password">
        <PasswordSettings />
      </SettingsSection>

      <SettingsSection title="Social Profile">
        <SocialProfilesSettings />
      </SettingsSection>
    </div>
  );
}
