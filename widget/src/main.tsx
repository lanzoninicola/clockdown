import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WidgetProvider } from "./countdown-state-management/widget";

const env = process.env.NODE_ENV;

if (env === "development") {
  createWidgetNode();
}
const widgetNodes: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  '[data-element="clockdown-widget"]'
);
renderWithReact(widgetNodes);

function renderWithReact(nodes: NodeListOf<HTMLDivElement>) {
  // for each widget node attach create react app
  nodes.forEach((widgetNode) => {
    // get the widget id from the iframe attribute
    const timerSettings = widgetNode.getAttribute("data-timer-settings");
    const theme = widgetNode.getAttribute("data-theme");
    const config = widgetNode.getAttribute("data-config");

    if (timerSettings && theme && config) {
      ReactDOM.createRoot(widgetNode).render(
        <React.StrictMode>
          <WidgetProvider
            timerSettings={timerSettings}
            theme={theme}
            config={config}
            isEditorMode={false}
          >
            <App />
          </WidgetProvider>
        </React.StrictMode>
      );
    }
  });
}

function createWidgetNode() {
  const widgetNode = document.createElement("div");
  widgetNode.setAttribute("data-element", "clockdown-widget");
  widgetNode.setAttribute(
    "data-timer-settings",
    "eyJ0YXJnZXREYXRlIjoiMjAyMi0xMi0zMVQyMzowMCIsInRhcmdldFRpbWV6b25lIjoiRXVyb3BlL0JlcmxpbiJ9"
    // "eyJ0YXJnZXREYXRlIjoiMjAyMi0xMi0zMVQyMzowMCIsInRhcmdldFRpbWV6b25lIjoiRXVyb3BlL0JlcmxpbiJ9"
  );
  widgetNode.setAttribute(
    "data-theme",
    "eyJsYXlvdXQiOnsicmVtb3ZlTGluayI6ZmFsc2UsImxpbmtUYXJnZXQiOiJodHRwczovL2Nsb2NrZG93bi50ZWNoLyIsImNvbnRhaW5lclNpemUiOnsid2lkdGgiOjAsImhlaWdodCI6MH0sIm9yaWVudGF0aW9uIjoidmVydGljYWwiLCJnYXAiOjEsImZpdE9uU2NyZWVuIjpmYWxzZSwidHJhbnNwYXJlbnRCYWNrZ3JvdW5kIjpmYWxzZSwiYmFja2dyb3VuZENvbG9yIjpudWxsfSwidGltZXIiOnsic2hvd1NlcGFyYXRvciI6dHJ1ZSwic2VwYXJhdG9yQ2hhciI6IjoiLCJoaWRlRGF5cyI6ZmFsc2UsImhpZGVIb3VycyI6ZmFsc2UsImhpZGVTZWNvbmRzIjpmYWxzZSwicGFkV2l0aFplcm8iOmZhbHNlLCJ1bml0TnVtYmVyRm9udEZhbWlseSI6bnVsbCwidW5pdE51bWJlckZvbnRXZWlnaHQiOm51bGwsInVuaXROdW1iZXJGb250U2l6ZSI6bnVsbCwidW5pdE51bWJlckZvbnRDb2xvciI6bnVsbCwibGFzdFVuaXRDb2xvciI6bnVsbCwidW5pdExhYmVsRm9udEZhbWlseSI6bnVsbCwidW5pdExhYmVsRm9udFdlaWdodCI6bnVsbCwidW5pdExhYmVsRm9udFNpemUiOm51bGwsInVuaXRMYWJlbExhbmd1YWdlIjoiZW4tVVMiLCJ1bml0TGFiZWxGb250Q29sb3IiOm51bGx9LCJ0aXRsZSI6eyJ0ZXh0IjoiU3VwZXIgcHJvbW8hIDUwJSBvZmYgb24gYWxsIHByb2R1Y3RzIHVudGlsIDMxLzEyLzIwMjEgMjM6NTk6NTkuIERvbid0IG1pc3Mgb3V0ISEhICDwn46JIPCfjokg8J+OiSIsImZvbnRGYW1pbHkiOm51bGwsImZvbnRXZWlnaHQiOm51bGwsImZvbnRTaXplIjpudWxsLCJmb250Q29sb3IiOm51bGx9fQ=="
    // "eyJ0ZW1wbGF0ZSI6eyJuYW1lIjoiTW9ub3NwYWNlIiwic3R5bGUiOiJkaXZbZGF0YS1lbGVtZW50PVwiY291bnRkb3duLXdyYXBwZXJcIl0geyAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgZGlzcGxheTogLW1zLWZsZXhib3g7ICBkaXNwbGF5OiBmbGV4OyAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDsgIG1heC13aWR0aDogMzc1cHg7ICBnYXA6IDAuNzVyZW07ICBmb250LWZhbWlseTogbW9ub3NwYWNlOyBwYWRkaW5nOiAxcmVtO31oMltkYXRhLWVsZW1lbnQ9XCJjb3VudGRvd24tdGl0bGVcIl0geyAgdGV4dC1hbGlnbjogY2VudGVyOyAgY29sb3I6IHdoaXRlOyAgZm9udC13ZWlnaHQ6IGJvbGQ7fWRpdltkYXRhLWVsZW1lbnQ9XCJjb3VudGRvd24tdW5pdHNcIl0geyAgZGlzcGxheTogLW1zLWdyaWQ7ICBkaXNwbGF5OiBncmlkOyAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgIGdhcDogMC41cmVtO31kaXZbZGF0YS1lbGVtZW50PVwiY291bnRkb3duLXVuaXRcIl0geyAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgZGlzcGxheTogLW1zLWZsZXhib3g7ICBkaXNwbGF5OiBmbGV4OyAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICBnYXA6IDAuMjVyZW07ICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31zcGFuW2RhdGEtZWxlbWVudD1cImNvdW50ZG93bi11bml0LW51bWJlclwiXSB7ICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIHBhZGRpbmc6IDFyZW07ICBib3JkZXItcmFkaXVzOiAxMHB4OyAgdGV4dC1hbGlnbjogY2VudGVyOyAgZm9udC1zaXplOiAxLjE1cmVtO31zcGFuW2RhdGEtZWxlbWVudD1cImNvdW50ZG93bi11bml0LWxhYmVsXCJdIHsgIHRleHQtYWxpZ246IGNlbnRlcjsgIGNvbG9yOiB3aGl0ZTt9IHNwYW5bZGF0YS1lbGVtZW50PVwiY291bnRkb3duLXVuaXQtc2VwYXJhdG9yXCJdIHsgIGRpc3BsYXk6IG5vbmU7fSJ9fQ=="
  );
  widgetNode.setAttribute(
    "data-config",
    "eyJwcm9kdWN0UHVibGljV2Vic2l0ZVVSTCI6Imh0dHBzOi8vY2xvY2tkb3duLnRlY2gifQ=="
    // "eyJwcm9kdWN0UHVibGljV2Vic2l0ZVVSTCI6Imh0dHBzOi8vY2xvY2tkb3duLmxhbnpvbmluaWNvbGEuY29tLmJyIn0="
  );

  // append countdown widget wrapper to body
  const body = document.querySelector("body");
  body && body.appendChild(widgetNode);
}
