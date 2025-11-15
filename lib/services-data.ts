import {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  Shield,
  Zap,
  TrendingUp,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  hero: {
    image: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  overview: {
    description: string;
    features: string[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  gallery: string[];
  related: string[];
}

export const services: Service[] = [
  {
    id: "warehousing",
    slug: "warehousing-storage",
    icon: Warehouse,
    title: "Warehousing & Storage",
    tagline: "Secure storage with accurate stock tracking",
    hero: {
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "10K+", label: "SQ FT Space" },
        { value: "24/7", label: "Security" },
        { value: "99.9%", label: "Accuracy" },
      ],
    },
    overview: {
      description:
        "Our state-of-the-art warehouse facilities provide secure, climate-controlled storage solutions with advanced inventory management systems. We offer real-time stock visibility, comprehensive reporting, and flexible storage options tailored to your business needs.",
      features: [
        "24/7 security and CCTV surveillance",
        "Climate-controlled facilities",
        "Real-time inventory tracking",
        "Flexible storage solutions (pallets, shelving, bulk)",
        "Advanced warehouse management system",
        "Regular stock audits and reporting",
      ],
    },
    process: {
      title: "How Our Warehousing Works",
      steps: [
        {
          number: "01",
          title: "Goods Receipt",
          description:
            "Your inventory arrives at our secure facility and is immediately logged into our WMS with full documentation and quality checks.",
        },
        {
          number: "02",
          title: "Quality Inspection",
          description:
            "Each item undergoes thorough inspection and quality control before being allocated to optimal storage locations.",
        },
        {
          number: "03",
          title: "Storage & Tracking",
          description:
            "Products are stored in climate-controlled conditions with real-time tracking accessible through your dedicated dashboard.",
        },
        {
          number: "04",
          title: "Order Fulfilment",
          description:
            "When orders come in, items are quickly retrieved and prepared for dispatch with 99.9% picking accuracy.",
        },
      ],
    },
    benefits: [
      {
        icon: Shield,
        title: "Maximum Security",
        description:
          "24/7 surveillance, access control, and insurance coverage",
      },
      {
        icon: Zap,
        title: "Fast Access",
        description: "Quick retrieval and processing for urgent orders",
      },
      {
        icon: TrendingUp,
        title: "Scalable Space",
        description: "Flexible storage that grows with your business",
      },
      {
        icon: Clock,
        title: "Real-Time Updates",
        description: "Live inventory tracking and instant notifications",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",
    ],
    related: ["pick-pack", "fba-fbm", "container"],
  },
  {
    id: "pick-pack",
    slug: "pick-pack-fulfilment",
    icon: PackageCheck,
    title: "Pick & Pack Fulfilment",
    tagline: "Fast, reliable picking & packing",
    hero: {
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Same Day", label: "Dispatch" },
        { value: "99.8%", label: "Accuracy" },
        { value: "50K+", label: "Orders/Month" },
      ],
    },
    overview: {
      description:
        "Professional pick and pack services with same-day dispatch available. Our experienced team uses advanced barcode scanning technology to ensure 99.8% picking accuracy. We integrate seamlessly with all major e-commerce platforms for automated order processing.",
      features: [
        "Same-day dispatch for urgent orders",
        "99.8% picking accuracy with barcode scanning",
        "Quality control at every stage",
        "Custom packaging solutions available",
        "Integration with all major platforms",
        "Branded packaging and inserts support",
      ],
    },
    process: {
      title: "Our Pick & Pack Process",
      steps: [
        {
          number: "01",
          title: "Order Import",
          description:
            "Orders automatically sync from your sales channels to our warehouse management system in real-time.",
        },
        {
          number: "02",
          title: "Picking",
          description:
            "Our team uses barcode scanners to pick items with precision, ensuring the right products every time.",
        },
        {
          number: "03",
          title: "Quality Check",
          description:
            "Each order undergoes quality inspection to verify contents, condition, and packaging requirements.",
        },
        {
          number: "04",
          title: "Packing & Dispatch",
          description:
            "Orders are professionally packed with appropriate materials and dispatched with your chosen carrier.",
        },
      ],
    },
    benefits: [
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Same-day dispatch available for orders before cutoff",
      },
      {
        icon: Shield,
        title: "Quality Assured",
        description: "Multiple quality checks ensure perfect orders",
      },
      {
        icon: TrendingUp,
        title: "Scalable",
        description: "Handle peak seasons without hiring extra staff",
      },
      {
        icon: Clock,
        title: "Real-Time Sync",
        description: "Instant order updates and tracking information",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?w=800&h=600&fit=crop&q=80",
    ],
    related: ["warehousing", "fba-fbm", "returns"],
  },
  {
    id: "fba-fbm",
    slug: "fba-fbm-fulfilment",
    icon: ShoppingCart,
    title: "FBA & FBM Fulfilment",
    tagline: "Amazon & multi-channel handling with free inspection",
    hero: {
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Free", label: "Inspection" },
        { value: "100%", label: "Compliant" },
        { value: "Fast", label: "Turnaround" },
      ],
    },
    overview: {
      description:
        "Expert Amazon FBA and FBM preparation services with complimentary product inspection. We handle labeling, inspection, shipment creation, and compliance to Amazon's strict requirements. Multi-channel support for seamless order management across platforms.",
      features: [
        "Free product inspection included with every order",
        "Amazon-compliant labeling and packaging",
        "FBA shipment creation and planning",
        "Multi-channel fulfilment support",
        "Fast turnaround times (24-48 hours)",
        "Full compliance with Amazon requirements",
      ],
    },
    process: {
      title: "Amazon Preparation Process",
      steps: [
        {
          number: "01",
          title: "Product Arrival",
          description:
            "Your products arrive at our facility and are immediately booked into our inventory system.",
        },
        {
          number: "02",
          title: "Free Inspection",
          description:
            "Every item receives complimentary quality inspection to ensure it meets Amazon's standards.",
        },
        {
          number: "03",
          title: "FBA Prep & Label",
          description:
            "Products are prepped according to Amazon guidelines with correct FNSKU labels and packaging.",
        },
        {
          number: "04",
          title: "Shipment Creation",
          description:
            "We create FBA shipments, book carriers, and deliver to Amazon fulfillment centers.",
        },
      ],
    },
    benefits: [
      {
        icon: Shield,
        title: "Free Inspection",
        description: "Complimentary quality checks with every FBA order",
      },
      {
        icon: Zap,
        title: "Fast Prep",
        description: "24-48 hour turnaround for most orders",
      },
      {
        icon: TrendingUp,
        title: "Multi-Channel",
        description: "FBA, FBM, and other platforms supported",
      },
      {
        icon: Clock,
        title: "Compliance",
        description: "100% Amazon requirement compliance",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
    ],
    related: ["pick-pack", "repackaging", "returns"],
  },
  {
    id: "kitting",
    slug: "kitting-bundling",
    icon: Gift,
    title: "Kitting & Bundling",
    tagline: "Ready-to-sell bundles & gift sets",
    hero: {
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Custom", label: "Bundles" },
        { value: "Fast", label: "Assembly" },
        { value: "Quality", label: "Checked" },
      ],
    },
    overview: {
      description:
        "Professional kitting and bundling services for promotional packages, gift sets, and multi-item combinations. Perfect for seasonal campaigns, product launches, and creating unique offerings that stand out in the market.",
      features: [
        "Custom bundle and kit creation",
        "Gift set assembly and presentation",
        "Promotional package preparation",
        "Shrink wrapping and sealing",
        "Quality control and inspection",
        "Support for seasonal campaigns",
      ],
    },
    process: {
      title: "Bundle Creation Process",
      steps: [
        {
          number: "01",
          title: "Bundle Design",
          description:
            "We work with you to design the perfect bundle configuration and packaging presentation.",
        },
        {
          number: "02",
          title: "Component Picking",
          description:
            "All components are picked accurately from stock and verified against bundle specifications.",
        },
        {
          number: "03",
          title: "Assembly",
          description:
            "Products are assembled into bundles with professional presentation and quality packaging.",
        },
        {
          number: "04",
          title: "Final Check",
          description:
            "Each bundle undergoes final quality inspection before being stored ready for shipment.",
        },
      ],
    },
    benefits: [
      {
        icon: Gift,
        title: "Custom Bundles",
        description: "Create unique product combinations easily",
      },
      {
        icon: Zap,
        title: "Quick Setup",
        description: "Fast bundle creation for time-sensitive campaigns",
      },
      {
        icon: Shield,
        title: "Quality Control",
        description: "Every bundle checked for completeness",
      },
      {
        icon: TrendingUp,
        title: "Increase AOV",
        description: "Bundling increases average order value",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?w=800&h=600&fit=crop&q=80",
    ],
    related: ["pick-pack", "repackaging", "fba-fbm"],
  },
  {
    id: "repackaging",
    slug: "repackaging-relabelling",
    icon: PackageOpen,
    title: "Repackaging & Relabelling",
    tagline: "Professional repack & label updates",
    hero: {
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Expert", label: "Service" },
        { value: "Compliant", label: "Labels" },
        { value: "Quality", label: "Assured" },
      ],
    },
    overview: {
      description:
        "Comprehensive repackaging and relabelling services for damaged goods, retail requirements, or branding updates. High-quality labeling with full compliance support for all UK and EU regulations.",
      features: [
        "Professional repackaging services",
        "Compliance labeling (UK/EU)",
        "Damage assessment and reporting",
        "Brand and design updates",
        "Retail-ready packaging solutions",
        "Quality assurance checks",
      ],
    },
    process: {
      title: "Repackaging Process",
      steps: [
        {
          number: "01",
          title: "Assessment",
          description:
            "Items are assessed for damage, labeling needs, or packaging requirements.",
        },
        {
          number: "02",
          title: "Preparation",
          description:
            "Products are cleaned, sorted, and prepared for new packaging or labels.",
        },
        {
          number: "03",
          title: "Repackaging",
          description:
            "Professional repackaging with new materials and compliant labeling applied.",
        },
        {
          number: "04",
          title: "Quality Check",
          description:
            "Final inspection ensures all items meet quality and compliance standards.",
        },
      ],
    },
    benefits: [
      {
        icon: Shield,
        title: "Compliance",
        description: "All labeling meets UK/EU regulations",
      },
      {
        icon: Zap,
        title: "Fast Service",
        description: "Quick turnaround for urgent relabeling",
      },
      {
        icon: TrendingUp,
        title: "Save Stock",
        description: "Recover value from damaged packaging",
      },
      {
        icon: Clock,
        title: "Brand Updates",
        description: "Easy rebranding without new production",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop&q=80",
    ],
    related: ["kitting", "fba-fbm", "returns"],
  },
  {
    id: "wholesale",
    slug: "wholesale-b2b-fulfilment",
    icon: Building2,
    title: "Wholesale (B2B) Fulfilment",
    tagline: "Bulk preparation & shipping",
    hero: {
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Bulk", label: "Processing" },
        { value: "EDI", label: "Integrated" },
        { value: "B2B", label: "Expert" },
      ],
    },
    overview: {
      description:
        "Specialized B2B fulfilment services for wholesale orders. Professional pallet management, bulk picking, and customized shipping solutions designed specifically for trade customers and distribution networks.",
      features: [
        "Bulk order processing and handling",
        "Pallet management and shipping",
        "EDI integration support",
        "Trade account management",
        "Customized B2B solutions",
        "Volume-based pricing",
      ],
    },
    process: {
      title: "B2B Fulfilment Process",
      steps: [
        {
          number: "01",
          title: "Order Receipt",
          description:
            "B2B orders received via EDI, API, or manual entry into our system.",
        },
        {
          number: "02",
          title: "Bulk Picking",
          description:
            "Large quantities picked efficiently using optimized warehouse layouts and equipment.",
        },
        {
          number: "03",
          title: "Pallet Prep",
          description:
            "Orders prepared on pallets with proper wrapping, labeling, and documentation.",
        },
        {
          number: "04",
          title: "Dispatch",
          description:
            "Shipments dispatched with appropriate carriers and full tracking information.",
        },
      ],
    },
    benefits: [
      {
        icon: Building2,
        title: "B2B Expertise",
        description: "Specialized knowledge of trade requirements",
      },
      {
        icon: Zap,
        title: "Bulk Efficiency",
        description: "Optimized processes for large volumes",
      },
      {
        icon: TrendingUp,
        title: "Scalable",
        description: "Handle growing wholesale operations",
      },
      {
        icon: Shield,
        title: "EDI Ready",
        description: "Seamless integration with your systems",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
    ],
    related: ["warehousing", "cross-docking", "container"],
  },
  {
    id: "cross-docking",
    slug: "cross-docking-service",
    icon: Truck,
    title: "Cross Docking Service",
    tagline: "Immediate sorting & shipping without storage",
    hero: {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "24-48hr", label: "Turnaround" },
        { value: "Direct", label: "Dispatch" },
        { value: "No Storage", label: "Fees" },
      ],
    },
    overview: {
      description:
        "Streamlined cross-docking operations that minimize storage time and costs. Goods are received, sorted, and shipped out within 24-48 hours for maximum efficiency in your supply chain.",
      features: [
        "24-48 hour turnaround time",
        "Direct distribution to final destinations",
        "Sorting and consolidation services",
        "No long-term storage fees",
        "Reduced handling and touchpoints",
        "Cost-effective logistics solution",
      ],
    },
    process: {
      title: "Cross Docking Process",
      steps: [
        {
          number: "01",
          title: "Inbound Receipt",
          description:
            "Shipments arrive and are immediately processed without entering long-term storage.",
        },
        {
          number: "02",
          title: "Sorting",
          description:
            "Items are quickly sorted and organized by destination or order requirements.",
        },
        {
          number: "03",
          title: "Consolidation",
          description:
            "Products are consolidated with other orders heading to the same destination.",
        },
        {
          number: "04",
          title: "Rapid Dispatch",
          description:
            "Consolidated shipments leave within 24-48 hours to their final destinations.",
        },
      ],
    },
    benefits: [
      {
        icon: Zap,
        title: "Ultra Fast",
        description: "24-48 hour facility turnaround time",
      },
      {
        icon: TrendingUp,
        title: "Cost Savings",
        description: "Eliminate long-term storage costs",
      },
      {
        icon: Truck,
        title: "Efficient",
        description: "Reduced handling and touchpoints",
      },
      {
        icon: Clock,
        title: "Quick Transit",
        description: "Faster delivery to end customers",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    ],
    related: ["warehousing", "wholesale", "container"],
  },
  {
    id: "returns",
    slug: "return-handling",
    icon: RotateCcw,
    title: "Return Handling",
    tagline: "Efficient returns, inspection & restocking",
    hero: {
      image:
        "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Fast", label: "Processing" },
        { value: "Quality", label: "Checked" },
        { value: "Detailed", label: "Reports" },
      ],
    },
    overview: {
      description:
        "Complete returns management solution including inspection, quality control, restocking, and disposal. Detailed reporting on all returned items with actionable insights to reduce future returns.",
      features: [
        "Complete returns processing",
        "Thorough quality inspection",
        "Restocking into inventory",
        "Disposal management for unsellable items",
        "Detailed return reporting and analytics",
        "Customer communication support",
      ],
    },
    process: {
      title: "Returns Management Process",
      steps: [
        {
          number: "01",
          title: "Return Receipt",
          description:
            "Returned items arrive and are logged into the system with customer information.",
        },
        {
          number: "02",
          title: "Inspection",
          description:
            "Each item undergoes detailed inspection to determine condition and resale potential.",
        },
        {
          number: "03",
          title: "Decision",
          description:
            "Items are categorized: restock, repair, repackage, or dispose based on condition.",
        },
        {
          number: "04",
          title: "Action & Report",
          description:
            "Appropriate action taken and detailed reports provided for your analysis.",
        },
      ],
    },
    benefits: [
      {
        icon: RotateCcw,
        title: "Fast Processing",
        description: "Quick return turnaround for better customer experience",
      },
      {
        icon: Shield,
        title: "Quality Checks",
        description: "Thorough inspection of every return",
      },
      {
        icon: TrendingUp,
        title: "Recover Value",
        description: "Maximize resellable inventory",
      },
      {
        icon: Clock,
        title: "Detailed Reports",
        description: "Insights to reduce future returns",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?w=800&h=600&fit=crop&q=80",
    ],
    related: ["pick-pack", "repackaging", "fba-fbm"],
  },
  {
    id: "container",
    slug: "container-unloading",
    icon: Container,
    title: "Container Unloading",
    tagline: "Professional unloading & handling of full containers",
    hero: {
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "Expert", label: "Team" },
        { value: "Fast", label: "Unloading" },
        { value: "Full", label: "Check-in" },
      ],
    },
    overview: {
      description:
        "Expert container unloading and devanning services with professional handling. Full inventory check-in, damage assessment, and immediate warehouse allocation to get your stock ready for sale quickly.",
      features: [
        "Professional unloading team",
        "Complete damage assessment",
        "Immediate inventory check-in",
        "Detailed inventory logging",
        "Fast warehouse allocation",
        "Full container devanning service",
      ],
    },
    process: {
      title: "Container Unloading Process",
      steps: [
        {
          number: "01",
          title: "Container Arrival",
          description:
            "Your container arrives at our facility and is scheduled for immediate unloading.",
        },
        {
          number: "02",
          title: "Professional Unload",
          description:
            "Our expert team carefully unloads contents with proper handling and safety procedures.",
        },
        {
          number: "03",
          title: "Check & Log",
          description:
            "Every item is checked, counted, and logged into inventory with damage assessment.",
        },
        {
          number: "04",
          title: "Storage Ready",
          description:
            "Products are allocated to storage locations and immediately available for orders.",
        },
      ],
    },
    benefits: [
      {
        icon: Shield,
        title: "Safe Handling",
        description: "Expert team with proper equipment and training",
      },
      {
        icon: Zap,
        title: "Fast Service",
        description: "Quick unloading to minimize demurrage charges",
      },
      {
        icon: TrendingUp,
        title: "Full Check-in",
        description: "Complete inventory logging and reporting",
      },
      {
        icon: Clock,
        title: "Quick to Market",
        description: "Stock ready for sale immediately",
      },
    ],

    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
    ],
    related: ["warehousing", "wholesale", "cross-docking"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getRelatedServices = (serviceId: string): Service[] => {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return [];

  return service.related
    .map((relatedId) => services.find((s) => s.id === relatedId))
    .filter((s): s is Service => s !== undefined);
};

// Serialized service type for passing to client components
export interface SerializedService {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  tagline: string;
  hero: {
    image: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  overview: {
    description: string;
    features: string[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    iconName: string;
    title: string;
    description: string;
  }[];
  gallery: string[];
  related: string[];
}

// Icon name mapping
const iconNameMap: Record<string, LucideIcon> = {
  Warehouse,
  PackageCheck,
  ShoppingCart,
  Gift,
  PackageOpen,
  Building2,
  Truck,
  RotateCcw,
  Container,
  Shield,
  Zap,
  TrendingUp,
  Clock,
};

// Helper to get icon name from service
function getIconName(icon: LucideIcon): string {
  for (const [name, IconComponent] of Object.entries(iconNameMap)) {
    if (IconComponent === icon) {
      return name;
    }
  }
  return "Package";
}

// Serialize service for client component
export function serializeService(service: Service): SerializedService {
  return {
    id: service.id,
    slug: service.slug,
    iconName: getIconName(service.icon),
    title: service.title,
    tagline: service.tagline,
    hero: service.hero,
    overview: service.overview,
    process: service.process,
    benefits: service.benefits.map((benefit) => ({
      iconName: getIconName(benefit.icon),
      title: benefit.title,
      description: benefit.description,
    })),
    gallery: service.gallery,
    related: service.related,
  };
}

// Get icon component from name
export function getIconFromName(name: string): LucideIcon {
  return iconNameMap[name] || PackageCheck;
}
