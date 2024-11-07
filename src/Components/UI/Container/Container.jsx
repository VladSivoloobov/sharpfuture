import "./Container.scss";

export const Container = (props) => {
  return (
    <div {...props} className="container">
      {props.children}
    </div>
  );
};
