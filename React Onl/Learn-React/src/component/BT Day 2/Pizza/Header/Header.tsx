type THeaderProps = {
  username?: string;
};

const Header = ({ username }: THeaderProps) => {
  return (
    <header className="bg-amber-400 py-5">
      <div className="container">
        <nav className="flex items-center justify-between">
          <h1>FAST REACT PIZZA CO.</h1>
          <input
            className="py-2 px-3 rounded-2xl bg-gray-100 border-none min-w-70"
            type="text"
            placeholder="Search order #"
          />
          {username && <h3> {username}</h3>}
        </nav>
      </div>
    </header>
  );
};

export default Header;
