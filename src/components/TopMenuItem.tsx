'use client'

interface TopMenuItemProps {
  label: string;
  href: string;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ label, href }) => {
  return (
    <div className="ml-4 text-lg text-gray-800 no-underline">
      <a href={href}>
        {label}
      </a>
    </div>
  );
};

export default TopMenuItem;