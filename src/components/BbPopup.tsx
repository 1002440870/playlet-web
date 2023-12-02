import { CenterPopup, Popup } from "antd-mobile";
import React from "react";

type BbPopupProps = {
  position?: "bottom" | "top" | "left" | "right" | "center"; // 弹窗方向
  children: React.ReactElement; // 内容
  visible: boolean; // 是否显示
  closeOnMaskClick?: boolean; // 是否显示
  setVisible: (value: boolean) => void | undefined; // 设置是否显示
};

const BbPopup = ({ visible, setVisible, children, position, closeOnMaskClick = true }: BbPopupProps) => {
  const defaultConfig = {
    style: { "--max-width": "100vw" } as any,
    maskStyle: { backdropFilter: "saturate(180%) blur(0px)" },
    bodyStyle: { background: "transparent" },
    visible,
    onMaskClick: () => {
      if (closeOnMaskClick) {
        setVisible(false);
      }
    },
    getContainer: () => document.body,
    destroyOnClose: true,
  };
  if (position === "center") {
    return <CenterPopup children={children} {...defaultConfig} />;
  }
  return <Popup children={children} position={position} {...defaultConfig} />;
};

export default BbPopup;
