import NavLinks from "../../molecules/SideBarLinks";
import NewsLetter from "../../molecules/NewsLetter";
import ProfileDetail from "../../molecules/ProfileDetail";

function SideBar() {
  return (
    <div className="py-4 sticky top-0">
      {/* Profile Details */}
      <ProfileDetail />

      <hr className="my-10 w-3/4 mx-auto" />

      {/* Nav Link */}
      <NavLinks />

      {/* NewsLetter */}
      <NewsLetter />
    </div>
  );
}

export default SideBar;
