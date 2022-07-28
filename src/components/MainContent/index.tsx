import useMediaQuery from "lib/helpers/useMediaQuery";
import React, {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import { createUseStyles } from "react-jss";

type Props = {
  children?: ReactNode;
};

const useStyles = createUseStyles({
  content: {
    padding: "1rem",
    marginLeft: ({
      sidebarRect,
      sm,
    }: {
      sm: boolean;
      sidebarRect: DOMRect | null;
    }) => (sm ? 0 : sidebarRect?.width),
    width: "100%",
  },
});

function MainContent({ children }: Props) {
  const [sidebarRect, setSidebarRect] = useState<DOMRect | null>(null);
  const sm = useMediaQuery("(max-width: 768px)");
  const classes = useStyles({ sm, sidebarRect });

  const adjustWidthMainContent = useCallback(() => {
    const sidebar = document.getElementById("main-sidebar")!;
    const sidebarBoundingRect = sidebar.getBoundingClientRect();
    setSidebarRect(sidebarBoundingRect);
  }, []);

  useLayoutEffect(() => {
    adjustWidthMainContent();

    return () => {};
  }, []);

  return <main className={classes.content}>{children}</main>;
}

export default MainContent;
