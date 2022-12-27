import { EditorContext } from "../../../countdown-state-management";
import useConfigState from "../../../countdown-state-management/common/hooks/config/useConfigState";
import useThemeState from "../../../countdown-state-management/common/hooks/theme/useThemeState";
import useTimerSettingsState from "../../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsState";
import { encrypt } from "../../../countdown-state-management/utils/crypto";

export default function useHtmlCode() {
  const { layout, timer, title } = useThemeState(EditorContext);
  const { targetDate, targetTimezone } = useTimerSettingsState(EditorContext);
  const config = useConfigState(EditorContext);

  const timerSettingsEnc = encrypt(
    JSON.stringify({
      targetDate,
      targetTimezone,
    })
  );

  const themeEnc = encrypt(
    JSON.stringify({
      layout,
      timer,
      title,
    })
  );

  const configEnc = encrypt(
    JSON.stringify({
      ...config,
    })
  );

  let htmlCode = "<div data-widget='clockdown'>";

  htmlCode += "<div ";
  htmlCode += 'data-element="clockdown-widget"';
  htmlCode += `data-timer-settings="${timerSettingsEnc}"`;
  htmlCode += `data-theme="${themeEnc}"`;
  htmlCode += `data-config="${configEnc}"`;
  htmlCode += "></div>";

  const BASE_ASSETS_URL = `${config.produtLandingPageURL}/widget`;

  // script tag
  htmlCode += `<script `;
  htmlCode += `src="${BASE_ASSETS_URL}/index.js"`;
  htmlCode += ` defer `;
  htmlCode += `></script>`;

  // style tag
  htmlCode += `<link rel="stylesheet" `;
  htmlCode += `href="${BASE_ASSETS_URL}/index.css"`;
  htmlCode += `/>`;

  htmlCode += "</div>";

  return htmlCode;
}
