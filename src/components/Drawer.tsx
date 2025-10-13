import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ChevronRight,
  ChevronDown,
  User,
  Component,
  Info,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import ROUTE_PATHS from "@/utils/routePaths";

interface DrawerItem {
  label: string;
  icon: React.ReactNode;
  subItems?: DrawerItem[];
  path: string;
}

const drawerItems: DrawerItem[] = [
  { label: "Home", icon: <Home size={18} />, path: ROUTE_PATHS.Home },
  {
    label: "Components",
    icon: <Component size={18} />,
    path: ROUTE_PATHS.Components.index,
    subItems: [
      {
        label: "Button",
        icon: <Component size={16} />,
        path: ROUTE_PATHS.Components.Button,
      },
      {
        label: "Card",
        icon: <Component size={16} />,
        path: ROUTE_PATHS.Components.Card,
      },
      {
        label: "Modal",
        icon: <Component size={16} />,
        path: ROUTE_PATHS.Components.Modal,
      },
    ],
  },
  { label: "About", icon: <Info size={18} />, path: ROUTE_PATHS.About },
];

export const Drawer: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const toggleExpand = () => setExpanded(!expanded);
  const toggleSubmenu = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: expanded ? 220 : 72 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="h-screen bg-dark-surface text-dark-text_primary shadow-floating flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-dark-border bg-brand-orange text-brand-white">
        <span className="text-h5 font-semibold tracking-wide">B/S/H/</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3 p-4 border-b border-dark-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-600 text-white text-body-m">
          <User size={16} />
        </div>
        {expanded && (
          <div className="flex flex-col">
            <span className="text-body-m-bold">Name Surname</span>
            <span className="text-body-s text-dark-text_secondary">
              Profile
            </span>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto">
        {drawerItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() =>
                item.subItems ? toggleSubmenu(item.label) : navigate(item.path)
              }
              className={`flex items-center w-full px-4 py-3 text-body-m transition-colors duration-200 ${
                openMenu === item.label || location.pathname === item.path
                  ? "bg-neutral-800 text-brand-orange"
                  : "text-dark-text_primary hover:bg-neutral-800"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {expanded && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.subItems && (
                    <motion.span
                      animate={{
                        rotate: openMenu === item.label ? 90 : 0,
                      }}
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  )}
                </>
              )}
            </button>

            {/* Submenu */}
            <AnimatePresence>
              {openMenu === item.label && expanded && item.subItems && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="pl-10 flex flex-col overflow-hidden text-body-s bg-neutral-800 text-dark-text_secondary"
                >
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.path}
                      className="text-left py-1.5 hover:text-brand-orange transition-colors"
                    >
                      {sub.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <button
        onClick={toggleExpand}
        className="flex items-center justify-center p-4 border-t border-dark-border hover:bg-neutral-800 transition-colors"
      >
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-dark-text_secondary" size={20} />
        </motion.div>
      </button>
    </motion.aside>
  );
};
