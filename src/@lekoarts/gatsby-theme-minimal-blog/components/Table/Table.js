/** @jsx jsx */
import { jsx } from "theme-ui"




const Table = ({ children }) => {
  return (
    <table sx={{ borderColor: `text` }} className="table table-dark table-striped">
      {children}
    </table>
  );
};

export default Table;




