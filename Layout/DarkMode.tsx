import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface Children {
  children: any;
}

const DarkMode = ({children}:Children) => {
  const toggleTheme = e => {
    const { checked } = e.target;
    if (checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
  return (
    <div className="DarkMode">
      <div className="darklitemode">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <label for="checkbox" className="label">
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
}


export default DarkMode;
