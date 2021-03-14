/** @jsx jsx */
import { jsx } from "theme-ui"

const Card = ({ children }) => {
  return (
    <div>
      <div sx={{
        backgroundColor: `cardBg`,
        paddingLeft: `20px`,
        paddingTop: `10px`,
        paddingBottom: `20px`,
        paddingRight: `20px`,
        borderRadius: `5px`,
        border: `1px`,
        borderStyle: `solid`,
        borderColor: `cardBorder`,
        boxShadow: `0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important`,
        color: `text`
      }
      }>
        {children}
      </div>


    </div>
  );
}

export default Card;
