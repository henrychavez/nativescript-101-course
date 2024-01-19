import { View, StackLayout, Button, getRootLayout } from "@nativescript/core";

// helper to create a popup view
export function createPopupView(
  color: string,
  size: number,
  offset: number
): View {
  const layout = new StackLayout();
  layout.height = size;
  layout.width = size;
  layout.marginTop = offset;
  layout.marginLeft = offset;
  layout.backgroundColor = color;
  layout.borderRadius = 10;

  const button = new Button();
  button.text = "close";
  button.on("tap", () => {
    // close the dynamic popup
    getRootLayout()
      .close(layout)
      .catch((ex) => console.error(ex));
  });

  layout.addChild(button);

  return layout;
}
