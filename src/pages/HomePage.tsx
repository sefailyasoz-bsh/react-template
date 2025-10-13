import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  Check,
  Boxes,
  Settings,
  Lightbulb,
} from "lucide-react";

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const technologies = [
    {
      name: "React 19",
      color: "bg-ui_blue-100 text-ui_blue-900",
      icon: "⚛️",
      description: "Latest React with modern features",
    },
    {
      name: "TypeScript",
      color: "bg-ui_blue-100 text-ui_blue-900",
      icon: "📘",
      description: "Type-safe development",
    },
    {
      name: "Redux Toolkit",
      color: "bg-secondary-violet/20 text-secondary-violet",
      icon: "🗄️",
      description: "State management made simple",
    },
    {
      name: "React Router v7",
      color: "bg-secondary-sunset/20 text-secondary-sunset",
      icon: "🛣️",
      description: "Modern routing solution",
    },
    {
      name: "Tailwind CSS",
      color: "bg-ui_green-100 text-ui_green-900",
      icon: "🎨",
      description: "Utility-first CSS framework",
    },
    {
      name: "Framer Motion",
      color: "bg-ui_yellow-100 text-ui_yellow-900",
      icon: "✨",
      description: "Smooth animations",
    },
    {
      name: "Vite",
      color: "bg-ui_orange-100 text-ui_orange-900",
      icon: "⚡",
      description: "Lightning fast build tool",
    },
    {
      name: "Lucide Icons",
      color: "bg-neutral-100 text-neutral-900",
      icon: "🎯",
      description: "Beautiful icon library",
    },
  ];

  const features = [
    {
      icon: <Code2 className="w-space-24 h-space-24" />,
      title: "Modern Stack",
      description:
        "Built with the latest React 19, TypeScript, and modern development tools for optimal performance.",
      color: "bg-ui_blue-50 border-ui_blue-200 text-ui_blue-900",
    },
    {
      icon: <Palette className="w-space-24 h-space-24" />,
      title: "BSH Design System",
      description:
        "Complete design system with carefully crafted spacing, colors, typography, and components.",
      color: "bg-brand-orange/10 border-brand-orange/20 text-brand-orange",
    },
    {
      icon: <Zap className="w-space-24 h-space-24" />,
      title: "Developer Experience",
      description:
        "Pre-configured ESLint, TypeScript, and Vite for a smooth development workflow.",
      color: "bg-ui_yellow-50 border-ui_yellow-200 text-ui_yellow-900",
    },
    {
      icon: <Shield className="w-space-24 h-space-24" />,
      title: "Type Safety",
      description:
        "Full TypeScript integration with strict typing for robust, maintainable code.",
      color: "bg-ui_green-50 border-ui_green-200 text-ui_green-900",
    },
    {
      icon: <Sparkles className="w-space-24 h-space-24" />,
      title: "Smooth Animations",
      description:
        "Framer Motion integration for delightful user interactions and micro-animations.",
      color:
        "bg-secondary-violet/10 border-secondary-violet/20 text-secondary-violet",
    },
    {
      icon: <Boxes className="w-space-24 h-space-24" />,
      title: "Component Library",
      description:
        "Pre-built components following BSH design principles with variants and proper styling.",
      color: "bg-ui_red-50 border-ui_red-200 text-ui_red-900",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-bg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-grid-margin-mobile tablet:px-grid-margin-tablet web-m:px-grid-margin-desktop py-space-40"
      >
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-space-120"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-space-8 px-space-16 py-space-8 bg-brand-orange/10 text-brand-orange rounded-full text-body-s-bold mb-space-24 border border-brand-orange/20"
          >
            <Sparkles className="w-space-16 h-space-16" />
            BSH React Template v1.0
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-h1 text-neutral-900 dark:text-dark-text_primary mb-space-24 font-light"
          >
            Build React Apps with
            <span className="block text-brand-orange font-bold">
              Modern Standards
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-xl text-neutral-600 dark:text-dark-text_secondary max-w-3xl mx-auto mb-space-40 leading-relaxed"
          >
            A comprehensive React template featuring the latest technologies,
            BSH design system, and best practices to kickstart your next project
            with confidence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col mobile:flex-row gap-space-16 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-space-8 px-space-24 py-space-16 bg-brand-orange text-brand-white rounded-button text-body-m-bold shadow-raised hover:shadow-overlay transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-space-16 h-space-16 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-space-8 px-space-24 py-space-16 border-2 border-neutral-300 dark:border-dark-border text-neutral-700 dark:text-dark-text_primary rounded-button text-body-m-bold hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
            >
              <Settings className="w-space-16 h-space-16" />
              View Components
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div variants={itemVariants} className="mb-space-120">
          <div className="text-center mb-space-64">
            <h2 className="text-h3 text-neutral-900 dark:text-dark-text_primary mb-space-16">
              Built with Powerful Technologies
            </h2>
            <p className="text-body-l text-neutral-600 dark:text-dark-text_secondary">
              Modern tools and frameworks for optimal developer experience
            </p>
          </div>

          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-space-16">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={cardHover}
                className={`flex flex-col items-center p-space-24 rounded-component-md border ${tech.color} shadow-raised hover:shadow-overlay transition-all duration-200 cursor-pointer`}
              >
                <div className="text-2xl mb-space-8">{tech.icon}</div>
                <h3 className="text-body-m-bold mb-space-4">{tech.name}</h3>
                <p className="text-body-s text-center opacity-80">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants} className="mb-space-120">
          <div className="text-center mb-space-64">
            <h2 className="text-h3 text-neutral-900 dark:text-dark-text_primary mb-space-16">
              Everything You Need to Build
            </h2>
            <p className="text-body-l text-neutral-600 dark:text-dark-text_secondary">
              Pre-configured features to accelerate your development workflow
            </p>
          </div>

          <div className="grid tablet:grid-cols-2 web-m:grid-cols-3 gap-space-24">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={cardHover}
                className={`p-space-40 rounded-component-lg border-2 ${feature.color} shadow-raised hover:shadow-floating transition-all duration-300 cursor-pointer group`}
              >
                <div className="mb-space-24 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-h5 mb-space-16">{feature.title}</h3>
                <p className="text-body-m opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-brand-orange/5 to-ui_blue-50 dark:from-dark-surface dark:to-dark-bg rounded-component-lg p-space-64 text-center border border-neutral-200 dark:border-dark-border"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Lightbulb className="w-space-40 h-space-40 text-brand-orange mx-auto mb-space-24" />
            <h2 className="text-h3 text-neutral-900 dark:text-dark-text_primary mb-space-16">
              Ready to Start Building?
            </h2>
            <p className="text-body-l text-neutral-600 dark:text-dark-text_secondary mb-space-40">
              This template includes everything you need: components, routing,
              state management, styling, and development tools. Just clone and
              start building your amazing application.
            </p>

            <div className="flex flex-col tablet:flex-row gap-space-16 justify-center">
              <div className="flex items-center gap-space-8 text-body-m text-neutral-700 dark:text-dark-text_secondary">
                <Check className="w-space-16 h-space-16 text-ui_green-700" />
                TypeScript configured
              </div>
              <div className="flex items-center gap-space-8 text-body-m text-neutral-700 dark:text-dark-text_secondary">
                <Check className="w-space-16 h-space-16 text-ui_green-700" />
                Components ready
              </div>
              <div className="flex items-center gap-space-8 text-body-m text-neutral-700 dark:text-dark-text_secondary">
                <Check className="w-space-16 h-space-16 text-ui_green-700" />
                Design system included
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-space-80 py-space-40 border-t border-neutral-200 dark:border-dark-border"
        >
          <p className="text-body-s text-neutral-500 dark:text-dark-text_secondary">
            BSH React Template • Built with ❤️ for modern React development
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
