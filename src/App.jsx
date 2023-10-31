import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
const jobBoard = {
  header: "The Job Board",
  jobs: {
    job: [
      {
        className: "red",
        title: "Full Time Sales Associate - Sydney Boutique",
        contractType: "CDI",
        country: "Australie",
        city: "Sydney",
      },
      {
        className: "green",
        title: "Responsable d'Atelier (H/F)",
        contractType: "CDD",
        country: "France",
        city: "Paris",
      },
    ],
  },
};

const App = () => {
  return (
    <>
      <main>
        <Header header={jobBoard.header} />
        <Jobs data={jobBoard.jobs} />
      </main>
    </>
  );
};

export default App;
