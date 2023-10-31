const Job = (props) => {
  console.log("->", props);
  //   console.log("clarifierprops->", props.jobinfo.classname);
  console.log(props.jobinfo);
  return (
    <div className="job">
      {
        ((<div>{props.jobinfo.classname}</div>),
        (<div>{props.jobinfo.title}</div>),
        (<div>{props.jobinfo.contractType}</div>),
        (<div>{props.jobinfo.country}</div>),
        (<div>{props.jobinfo.city}</div>))
      }
    </div>
  );
};

export default Job;
