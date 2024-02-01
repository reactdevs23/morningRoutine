import MainComponent from "./components/MaiComponent/MainComponent";
import LeftIcon from "./images/LeftIcon";
import RightIcon from "./images/RightIcon";

function App() {
  const data = {
    fontFamily: "'Signika', sans-serif",
    primaryColor: "#EAC303",
    secondaryColor: "#fff",
    textColor: "#000",
    background: "#F5F1E1",
    leftIcon: <LeftIcon color="#fff" />,
    heading: "Morning Routine",
    title: "Do's and Don'ts",
    rightIcon: <RightIcon color="#EAC303" />,
    dosIcon: <i className="fa-solid fa-check"></i>,
    dontsIcon: <i class="fa-solid fa-xmark"></i>,
    dosIconColor: "#000",
    dontsIconColor: "#000",

    dos: [
      "Make time for a delicious and nutrious breakfast",
      "Open you curtains to let the sun into your room",
      "Spen some time meditating or journalling",
      "Make Enought time for a morning routine",
    ],
    donts: [
      "Check your phone on the first thing in the morning",
      "Leave the house without making your bed",
      "Skip you morning skin care routine",
      "Press Snooze on your alarm clock",
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,
        "--secondaryColor": data.secondaryColor,
        "--textColor": data.textColor,
        "--dosIconColor": data.dosIconColor,
        "--dontsIconColor": data.dontsIconColor,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
