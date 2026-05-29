import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-4 text-gray-600 hover:text-black"
    >
      ← Back
    </button>
  );
}

export default BackButton;