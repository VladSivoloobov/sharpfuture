import "./Container.scss";

export const Container = (props) => {
  return (
    <div
      {...props}
      style={{
        maxWidth: props.maxWidth + "px",
      }}
      className="container"
    >
      {props.children}
    </div>
  );
};
