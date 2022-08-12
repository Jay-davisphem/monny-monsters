import { BsSearch } from "react-icons/bs";
import "./search.css";

export const SearchBox = ({ onChange }) => {
  return (
    <div className="search-cont">
      <input
        type="search"
        className="search"
        placeholder="search monsters"
        onChange={onChange}
      />
      <BsSearch className="search-icon" size="8em" />
    </div>
  );
};
