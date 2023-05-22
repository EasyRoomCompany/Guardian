import { Alert, AlertTitle } from "@mui/material";

interface Props {
  /**
   * Type of the alert message
   */
  severity: "success" | "error" | "info" | "warning";
  /**
   * Title mensage to display
   */
  title?: string;
  /**
   * main message in alert
   */
  msg: string
  /**
   * emphasis in message
   */
  emphasis?: string
}

/**
 * Component to display a message to the user (success | error | info | warning)
 */
export const AlertMessage = ({ severity = "error", title, msg, emphasis }: Props) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title ? title: ''}</AlertTitle>
      {msg} <strong>{emphasis ? emphasis : ''}</strong>
    </Alert>
  );
};
