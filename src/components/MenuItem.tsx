import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  isExpanded: boolean;
  hasSubItems?: boolean;
  isOpen?: boolean;
  onClick: () => void;
  level?: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  isActive,
  isExpanded,
  hasSubItems = false,
  isOpen = false,
  onClick,
  level = 0,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center w-full py-3 
        text-body-m transition-all duration-200
        ${isExpanded ? "px-4" : "px-0 justify-center"}
        ${level > 0 && isExpanded ? "pl-12" : ""}
        ${
          isActive
            ? "bg-brand-orange/10 text-brand-orange border-l-4 border-brand-orange dark:bg-brand-orange/20"
            : "text-neutral-800 hover:bg-neutral-50 dark:text-dark-text_primary dark:hover:bg-neutral-800/50"
        }
      `}
    >
      <span
        className={`${
          isActive
            ? "text-brand-orange"
            : "text-neutral-600 dark:text-neutral-400"
        } ${
          !isExpanded && level === 0 ? "flex items-center justify-center" : ""
        }`}
      >
        {icon}
      </span>
      {isExpanded && (
        <>
          <span className="flex-1 text-left ml-3 font-medium">{label}</span>
          {hasSubItems && (
            <motion.span
              animate={{
                rotate: isOpen ? 90 : 0,
              }}
              transition={{ duration: 0.2 }}
              className={`${
                isActive
                  ? "text-brand-orange"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              <ChevronRight size={16} />
            </motion.span>
          )}
        </>
      )}
    </button>
  );
};
