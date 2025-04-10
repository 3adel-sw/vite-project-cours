const Button = ({ text, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      // {() => console.log(text)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded shadow m-2"
      style={{ cursor: "pointer", margin: "15px" }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
