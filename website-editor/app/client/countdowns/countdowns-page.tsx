import Countdowns from "./components/countdowns/countdowns";

/**
 *  This is the main entry point for the countdowns page.
 *
 *  This is a convenience wrapper around the CountdownsPage component,
 *  needed to determine whether or not it should be rendered based on the currentCountDown state
 *  due the position of Context providers in the app.
 */
export default function CountdownsPage() {
  return <Countdowns />;
}
