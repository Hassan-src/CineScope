import { Link } from "react-router-dom";

function Button({ children, className, onClick, to }) {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
