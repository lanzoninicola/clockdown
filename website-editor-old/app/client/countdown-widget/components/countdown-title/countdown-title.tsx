import React from "react";
import { WidgetContext } from "../../../countdown-state-management";
import useThemeTitle from "../../../countdown-state-management/common/hooks/theme/useThemeTitle";

function CountdownTitle() {
  const { text } = useThemeTitle(WidgetContext);

  return (
    <h2 data-element="countdown-title" aria-label={text}>
      {text}
    </h2>
  );
}

const areEqual = () => true;
const MemoizedCountdownTitle = React.memo(CountdownTitle, areEqual);
export default MemoizedCountdownTitle;
