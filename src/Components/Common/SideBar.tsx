"use client"
import React, { useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import ForumIcon from "@mui/icons-material/Forum"
import PaidIcon from "@mui/icons-material/Paid"
import NotificationsIcon from "@mui/icons-material/Notifications"
import PersonIcon from "@mui/icons-material/Person"
import CreateIcon from "@mui/icons-material/Create"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import clsx from "clsx"
import Link from "next/link"
import SettingsIcon from "@mui/icons-material/Settings"
import Router from "next/router"
import { useRouter } from "next/router"
import DoneIcon from "@mui/icons-material/Done"

const sidebarItemsTop = [
  {
    text: "Home",
    icon: <HomeIcon sx={{ color: "var(--primary)", fontSize: 40 }} />,
    link: "/",
  },
  {
    text: "Campaigns",
    icon: <PaidIcon sx={{ color: "var(--primary)" }} fontSize="large" />,
    link: "/campaign",
  },
  {
    text: "Chats",
    icon: <ForumIcon sx={{ color: "var(--primary)" }} fontSize="large" />,
    link: "/chat",
  },
  {
    text: "Donations Attestation",
    icon: <CreateIcon sx={{ color: "var(--primary)" }} fontSize="large" />,
    link: "/attestation",
  },

  {
    text: "Campaign Attestation",
    icon: <DoneIcon sx={{ color: "var(--primary)" }} fontSize="large" />,
    link: "/campaignEndAttestation",
  },
]

const sidebarItemsBottom = [
  {
    text: "Settings",
    icon: <SettingsIcon sx={{ color: "var(--primary)" }} fontSize="large" />,
    link: "/settings",
  },
]

const CustomSidebar = () => {
  const router = useRouter()

  const [expanded, setExpanded] = useState(false)
  const activePage = router.pathname
  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={clsx(
        "fixed top-20 left-0 h-[92vh] transition-width pt-4 pb-8 duration-300 ease-in-out rounded-lg flex flex-col justify-between  z-30",
        expanded ? "w-52" : "w-20"
      )}
      style={{ backgroundColor: "var(--Bg)" }}
    >
      {/* Top Items */}
      <List>
        {sidebarItemsTop.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ mt: "1rem" }}
            className={clsx("relative", activePage === item.link && "active")}
          >
            <Link href={item.link} className="w-full">
              <ListItemButton>
                <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
                {activePage === item.link && (
                  <div className="absolute left-1 top-0 h-full w-[4px] bg-[var(--primary)] rounded-lg"></div>
                )}
                <h1
                  className={clsx(
                    "text-[var(--primary)] font-semibold min-w-[10rem]",
                    expanded ? "opacity-100" : "opacity-0",
                    "transition-all duration-300 ease-in-out"
                  )}
                >
                  {" "}
                  {item.text}
                </h1>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      {/* Bottom Items */}
      <List>
        {sidebarItemsBottom.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ mt: "0.5rem" }}
            className={clsx("relative", activePage === item.link && "active")}
          >
            <Link href={item.link} className="w-full">
              <ListItemButton>
                {activePage === item.link && (
                  <div className="absolute left-1 top-0 h-full w-[4px] bg-[var(--primary)] rounded-lg"></div>
                )}
                <ListItemIcon className="text-white">{item.icon}</ListItemIcon>

                <h1
                  className={clsx(
                    "text-[var(--primary)] font-semibold",
                    expanded ? "opacity-100" : "opacity-0",
                    "transition-all duration-300 ease-in-out"
                  )}
                >
                  {item.text}
                </h1>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default CustomSidebar
