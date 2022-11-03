export interface NotificationOptions {
  /** The title to display */
  title?: string;
  /** Milliseconds after that the notification is closed. 9000ms is default */
  duration?: number;
  /** Shows the X button */
  isClosable?: boolean;

  /** The button props */
  buttonProps: {
    /** The text of the button */
    children: React.ReactNode;
    /** The function to call when the button is clicked */
    onClick: () => void;
  };
}
