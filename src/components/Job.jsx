const Job = (props) => {
  console.log(props);
  return (
    <div className="job">
      <div>{props.jobBoard.className}</div>
      <div>{props.jobBoard.title}</div>
      <div>{props.jobBoard.contractType}</div>
      <div>{props.jobBoard.country}</div>
      <div>{props.jobBoard.city}</div>
    </div>
  );
};

export default Job;
