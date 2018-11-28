import React from "react";
import "./MainDashboardCard.css";

const determineCardColour = (frontEndHealthcheck, backEndHealthcheck) => {
  if (frontEndHealthcheck === "PASSING" && backEndHealthcheck === "PASSING") {
    return "green";
  } else if (
    frontEndHealthcheck === "FAILING" ||
    backEndHealthcheck === "FAILING"
  ) {
    return "red";
  } else {
    return "yellow";
  }
};

export const MainDashboardCard = ({
  title,
  background,
  frontendHealthcheck,
  backendHealthcheck,
  href,
  onClick
}) => {
  const styles = {
    backgroundColor: determineCardColour(
      frontendHealthcheck,
      backendHealthcheck
    )
  };

  return (
    <div className="card" style={styles}>
      <a href={href} onClick={onClick} className="title">
        <h1>{title}</h1>
      </a>
      <p className="status">
        {`Frontend: ${frontendHealthcheck}\u2003|\u2003Backend: ${backendHealthcheck}`}
      </p>
    </div>
  );
};
