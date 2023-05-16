import { useSelector } from "react-redux";

const Message = () => {
  const message = useSelector((state) => state.message);
  console.log(message); //[]
  return (
    <>
      <div
        className="toast-container position-fixed"
        style={{ top: "64px", right: "15px" }}
      >
        {message.length &&
          message?.map((msg) => {
            return (
              <div
                key={msg.id}
                className="toast show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-delay="3000"
              >
                <div className={`toast-header text-white bg-${msg.type}`}>
                  <strong className="me-auto">{msg.title}</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  />
                </div>
                <div className="toast-body">{msg.text}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Message;
