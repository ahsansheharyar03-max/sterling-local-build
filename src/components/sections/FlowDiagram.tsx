"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Briefcase,
  MessageCircle,
  Calendar,
  FileText,
  Star,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Node = {
  label: string;
  icon: LucideIcon;
};

const row1: Node[] = [
  { label: "Lead Captured", icon: UserPlus },
  { label: "New Job", icon: Briefcase },
  { label: "Follow Up", icon: MessageCircle },
];

const row2: Node[] = [
  { label: "Schedule", icon: Calendar },
  { label: "Invoice", icon: FileText },
  { label: "Review", icon: Star },
];

function NodeCard({ node, delay }: { node: Node; delay: number }) {
  const Icon = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex w-28 flex-col items-center gap-2 rounded-xl border border-line bg-white p-4 shadow-sm sm:w-32"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-light text-blue">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-center text-xs font-medium text-charcoal">{node.label}</span>
    </motion.div>
  );
}

export default function FlowDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3 sm:gap-6">
        {row1.map((node, i) => (
          <NodeCard key={node.label} node={node} delay={i * 0.1} />
        ))}
      </div>
      <div className="flex items-center gap-3 sm:gap-6">
        {row2.map((node, i) => (
          <NodeCard key={node.label} node={node} delay={0.3 + i * 0.1} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="flex w-32 flex-col items-center gap-2 rounded-xl border border-line bg-white p-4 shadow-sm"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-light text-blue">
          <BarChart3 className="h-5 w-5" />
        </span>
        <span className="text-center text-xs font-medium text-charcoal">Business Owner</span>
      </motion.div>
    </div>
  );
}
