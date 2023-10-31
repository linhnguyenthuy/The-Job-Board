import Job from "./Job";

const Jobs = (props) => {
  //   console.log("logJobs->", props);
  return (
    <div className="jobs">
      <Job jobinfo={props.data[0]} />
    </div>
  );
};

export default Jobs;
