import "./styles.css";

const Display = ({ information }) => {
  return (
    <div>
      {information ? (
        <h4 className="api api-sucess">Requisição aceita!</h4>
      ) : (
        <h4 className="api api-failed">Requisição falhou!</h4>
      )}
    </div>
  );
};
export default Display;
