import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
}) => {
  const handleClick = () => {
    if (!disabled) onChange(!checked);
  };

  return (
    <label
      className={`flex items-center gap-2 cursor-pointer select-none ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      }`}
    >
      <motion.button
        type="button"
        whileTap={!disabled ? { scale: 0.9 } : {}}
        onClick={handleClick}
        aria-checked={checked}
        role="checkbox"
        disabled={disabled}
        className={`relative flex h-6 w-6 items-center justify-center rounded-md border transition-colors duration-200
          ${
            disabled
              ? "border-neutral-200 bg-neutral-100"
              : checked
              ? "border-brand-orange bg-brand-orange"
              : "border-neutral-300 bg-white hover:border-brand-orange"
          }`}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={checked ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="text-white"
        >
          <Check size={16} strokeWidth={3} />
        </motion.div>
      </motion.button>

      {label && (
        <span
          className={`text-body-m ${
            disabled ? "text-neutral-400" : "text-brand-black dark:text-dark-text_primary"
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
export default Checkbox