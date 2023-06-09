import { useState } from "react";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";

function App() {
  const [count, setcount] = useState(0);
  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Typography>Counter app</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Button
          onClick={(handleCount) => setcount(count - 1)}
          variant="outlined"
        >
          -
        </Button>
        <h4>{count}</h4>
        <Button
          onClick={(handleCount) => setcount(count + 1)}
          variant="outlined"
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
