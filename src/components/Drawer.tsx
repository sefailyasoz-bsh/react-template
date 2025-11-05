import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ChevronLeft,
  User,
  Component,
  Info,
  Menu,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import ROUTE_PATHS from "@/utils/routePaths";
import { MenuItem } from "./MenuItem";

interface DrawerItem {
  label: string;
  icon: React.ReactNode;
  subItems?: DrawerItem[];
  path: string;
}

const drawerItems: DrawerItem[] = [
  { label: "Home", icon: <Home size={20} />, path: ROUTE_PATHS.Home },
  {
    label: "Components",
    icon: <Component size={20} />,
    path: ROUTE_PATHS.Components.index,
    subItems: [
      {
        label: "Button",
        icon: <Component size={18} />,
        path: ROUTE_PATHS.Components.Button,
      },
      {
        label: "Card",
        icon: <Component size={18} />,
        path: ROUTE_PATHS.Components.Card,
      },
      {
        label: "Modal",
        icon: <Component size={18} />,
        path: ROUTE_PATHS.Components.Modal,
      },
    ],
  },
  { label: "About", icon: <Info size={20} />, path: ROUTE_PATHS.About },
];

export const Drawer: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleExpand = () => setExpanded(!expanded);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleSubmenu = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  const handleNavigation = (item: DrawerItem) => {
    if (item.subItems) {
      toggleSubmenu(item.label);
    } else {
      navigate(item.path);
      setMobileOpen(false); // Close mobile drawer on navigation
    }
  };

  const handleSubItemClick = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close mobile drawer on navigation
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-neutral-800 shadow-overlay lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <X size={24} className="text-neutral-800 dark:text-neutral-100" />
        ) : (
          <Menu size={24} className="text-neutral-800 dark:text-neutral-100" />
        )}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobile}
            className="fixed inset-0 bg-neutral-900/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.aside
        initial={false}
        animate={{
          width: expanded ? 280 : 72,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
          fixed lg:relative inset-y-0 left-0 z-40
          h-screen bg-white dark:bg-black
          border-r border-neutral-200 dark:border-black
          shadow-floating flex flex-col
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Profile Section */}
        <div
          className={`flex items-center gap-3 py-4 border-b border-neutral-200 dark:border-neutral-800 ${
            expanded ? "justify-between px-6" : "justify-center px-3"
          }`}
        >
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-ui_orange-700 text-white shadow-raised flex-shrink-0">
              <User size={20} />
            </div>
            {expanded && (
              <div className="flex flex-col overflow-hidden">
                <span className="text-body-m-bold text-neutral-900 dark:text-neutral-100 truncate">
                  Name Surname
                </span>
                <span className="text-body-s text-neutral-600 dark:text-neutral-400 truncate">
                  Administrator
                </span>
              </div>
            )}
          </div>
          {/* Toggle Button */}
          {expanded && (
            <button
              onClick={toggleExpand}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group flex-shrink-0"
              aria-label="Collapse sidebar"
            >
              <motion.div
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-600 dark:text-neutral-400 group-hover:text-brand-orange"
              >
                <ChevronLeft size={20} />
              </motion.div>
            </button>
          )}
          {!expanded && (
            <button
              onClick={toggleExpand}
              className="absolute top-4 right-2 p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
              aria-label="Expand sidebar"
            >
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-600 dark:text-neutral-400 group-hover:text-brand-orange"
              >
                <ChevronLeft size={16} />
              </motion.div>
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
          {drawerItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              item.subItems?.some((sub) => location.pathname === sub.path);

            return (
              <div key={item.label}>
                <MenuItem
                  label={item.label}
                  icon={item.icon}
                  isActive={!!isActive}
                  isExpanded={expanded}
                  hasSubItems={!!item.subItems}
                  isOpen={openMenu === item.label}
                  onClick={() => handleNavigation(item)}
                />

                {/* Submenu */}
                <AnimatePresence>
                  {openMenu === item.label && expanded && item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-neutral-50 dark:bg-neutral-800/30"
                    >
                      {item.subItems.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <MenuItem
                            key={sub.path}
                            label={sub.label}
                            icon={sub.icon}
                            isActive={isSubActive}
                            isExpanded={expanded}
                            onClick={() => handleSubItemClick(sub.path)}
                            level={1}
                          />
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
};
