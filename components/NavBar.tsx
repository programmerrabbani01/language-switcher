// components/Navbar.tsx
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
