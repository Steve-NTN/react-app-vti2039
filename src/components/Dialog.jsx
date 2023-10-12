import { StyledDialog } from "./Dialog.styles";
import { AiOutlineClose } from "react-icons/ai";

const Dialog = (props) => {
  const { children, title = "Title", footer, onClose = () => null } = props;

  return (
    <StyledDialog>
      <div className="wrapper">
        <div className="content_box">
          <div className="content_box__title">
            {title}
            <span>
              <AiOutlineClose onClick={onClose} />
            </span>
          </div>
          {children}

          {footer}
        </div>
      </div>
    </StyledDialog>
  );
};

export default Dialog;
