import { useState } from "react";
import { Button, TextField } from "@mui/material";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      fetch("https://formspree.io/f/mzbqaebp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      setName("");
      setEmail("");
      setMessage("");
    }

    if (!name) {
      setErrorName("Name is required");
      return;
    } else {
      setErrorName(" ");
    }

    if (!email) {
      setErrorEmail("Email is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail("Email is not valid");
    } else {
      setErrorEmail(" ");
    }

    if (!message) {
      setErrorMessage("Message is required");
      return;
    } else {
      setErrorMessage(" ");
    }
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="full-name"
            label="Full Name"
            variant="outlined"
            color="primary"
            focused
            fullWidth
            required
            sx={{ mt: 2, mb: 0.5, color: "#8892af" }}
          />
          {errorName && <div className="error">{errorName}</div>}
        </div>

        <div>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            label="Email Address"
            variant="outlined"
            color="primary"
            focused
            fullWidth
            required
            sx={{ mt: 2, mb: 0.5, color: "#8892af" }}
          />
          {errorEmail && <div className="error">{errorEmail}</div>}
        </div>

        <div>
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={3}
            focused
            fullWidth
            required
            sx={{ mt: 2, mb: 0.5, color: "#8892af" }}
          />
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>

        <Button className="btn" type="submit" sx={{ px: 8, py: 1.7, mt: 2 }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
