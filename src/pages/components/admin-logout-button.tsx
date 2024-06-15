import GradientButton from "@/components/shared/gradient-button";

export const AdminLogoutButton = ({ logout }: { logout: () => void }) => {
  return (
    <GradientButton content="Logout" className=" px-16 py-4" onClick={logout} />
  );
};
