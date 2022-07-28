import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import Image from "next/image";

import { List, User } from "phosphor-react";

import colors from "lib/const/themes/colors";
import useMediaQuery from "lib/helpers/useMediaQuery";
import { useAppDispatch } from "lib/store/hooks";
import { toggleSidebar } from "lib/store/slices/components";

type Props = {};

const useStyles = createUseStyles({
  header: (sm: boolean) => ({
    position: "relative",
    zIndex: 10,
    padding: sm ? "1rem .5rem" : "1rem 2rem",
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.white,
    boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.10)",
  }),
  headerProfile: {
    marginLeft: "auto",
    appearance: "none",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
  },
  headerProfileName: {
    color: colors.red,
    marginLeft: 3,
  },
  headerProfileIcon: {
    marginLeft: "1rem",
    backgroundColor: colors.grey,
    borderRadius: 100,
    display: "inline-flex",
    padding: 3,
  },
  headerProfileSvg: {
    borderRadius: 100,
    overflow: "hidden",
    width: 26,
    height: 26,
    // "& svg": {
    //   padding: 2,
    //   fill: colors.white,
    //   transform: "translateY(2px)",
    // },
  },
  buttonMenuToggle: (sm: boolean) => ({
    display: sm ? "block" : "none",
    marginLeft: 3,
    flex: "none",
    marginRight: 12,
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  }),
});

function Header({}: Props) {
  const sm = useMediaQuery("(max-width: 768px)");
  const dispatch = useAppDispatch();

  const classes = useStyles(sm);

  return (
    <header className={classes.header}>
      <button
        className={classes.buttonMenuToggle}
        onClick={() => dispatch(toggleSidebar())}
      >
        <List size={24} />
      </button>

      <Image
        src="/images/shipper-logo-min.png"
        objectFit="contain"
        width={120}
        height={30}
      />

      <button className={classes.headerProfile}>
        <span className="">Hello,</span>
        <span className={classes.headerProfileName}> Shipper User</span>
        <span className={classes.headerProfileIcon}>
          <span className={classes.headerProfileSvg}>
            <User size={24} weight="fill" />
          </span>
        </span>
      </button>
    </header>
  );
}

export default Header;
