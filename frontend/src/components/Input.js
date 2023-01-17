import { TextField } from "@mui/material";

export default function Input(label, name, value, handleInputChange, formType, error) {

  return (
    <div className="text-field">
      <TextField
        variant="standard"
        margin="normal"
        label={label}
        inputProps={{ style: { fontSize: 20, width: "550px" } }}
        InputLabelProps={{
          style: { fontSize: 20 },
        }}
        required
        name={name}
        value={value}
        onChange={handleInputChange}
        type={formType}
      />
    </div>
  );
}