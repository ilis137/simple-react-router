import React from "react";

const Contact = props => {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  console.log(props);
  return (
    <div className="container">
      <h4 className="center"> Contact </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Est doloremque
        impedit, natus deleniti, illum animi voluptatibus repudiandae fuga
        repellendus amet incidunt aut exercitationem voluptates dolores
        consequuntur fugit!Dicta, laborum assumenda ?
      </p>
    </div>
  );
};
export default Contact;
