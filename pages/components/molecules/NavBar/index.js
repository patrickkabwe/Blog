function NavBar({ routeName, children }) {
  return (
    <div className="sticky top-0" style={{ zIndex: 2000 }}>
      <div className="px-4 h-12 flex justify-between items-center shadow-md bg-white ">
        <span className="font-bold">{routeName}</span>
        <div>
          {children ? (
            { children }
          ) : (
            <a
              href="#"
              target="_blank"
              className="block text-white text-xs bg-green-500 py-2 px-3 rounded"
            >
              My Resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
