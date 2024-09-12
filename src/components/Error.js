import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // const {status, statusText, data} = err;   // destructuring and simply access {status} instead of {err.status}
  console.log(err);
  return (
    <div>
      <h1>OOPS! Check the error below:</h1>
      <div>
        Eroor {err.status}: {err.statusText}
      </div>
      <div>{err.data}</div>
    </div>
  );
};
export default Error;
