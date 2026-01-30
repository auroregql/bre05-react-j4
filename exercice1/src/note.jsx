import { useState } from "react";

function Note() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <p>
        {message}
      </p>

      <form>
        <label htmlFor="message">
          Message :
        </label>

        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        />

        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default Note;
