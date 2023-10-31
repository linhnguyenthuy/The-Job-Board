import Job from "./Job";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className="jobs">
      <Job className={props.data.job[0].className} />
      <Job className={props.data.job[1].className} />
      <Job title={props.data.job[0].title} />
      <Job title={props.data.job[1].title} />
      <Job contractType={props.data.job[0].contractType} />
      <Job contractType={props.data.job[1].contractType} />
    </div>
  );
};

export default Jobs;
