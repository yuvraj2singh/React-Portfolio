interface SemiContactProps {
  Icon: React.ElementType; // Accepts a React icon component
  title: string;
  aType: string;
  aLink: string;
}

const SemiContact: React.FC<SemiContactProps> = ({ Icon, title, aType, aLink }) => {
  return (
    <div className="flex justify-around ">
      <div className="flex flex-col gap-2 text-3xl sm:text-5xl items-start">
        <div className="flex gap-2 items-center justify-center">
          <span className="text-2xl sm:text-4xl">
            <Icon />
          </span>
          {title}
        </div>
        <a className="text-lg sm:text-2xl text-gray-400" href={`${aType}:${aLink}`}>
          {aLink}
        </a>
      </div>
    </div>
  );
};

export default SemiContact;