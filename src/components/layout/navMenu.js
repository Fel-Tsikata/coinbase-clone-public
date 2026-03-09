import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Smartphone,
  Shield,
  Briefcase,
  Link2,
  BarChart2,
  PieChart,
  Gem,
  CreditCard,
  Building2,
  LineChart,
  Wallet,
  ArrowRightLeft,
  Lock,
  Users,
  Blocks,
  Banknote,
  HelpCircle,
  FileText,
  Globe,
} from "lucide-react";

// Mega menu data definition
export const NAV_MENU = [
  { label: "Cryptocurrencies", link: "/explore" },
  {
    label: "Individuals",
    columns: [
      [
        {
          title: "Buy and sell",
          desc: "Buy, sell, and use crypto",
          icon: ShoppingCart,
        },
        {
          title: "Base App",
          desc: "Post, earn, trade, and chat, all in one place",
          icon: Smartphone,
        },
        {
          title: "Coinbase One",
          desc: "Get zero trading fees and more",
          icon: Shield,
        },
        {
          title: "Private Client",
          desc: "For trusts, family offices, UHNWIs",
          icon: Briefcase,
        },
        {
          title: "Onchain",
          desc: "Your gateway to everything onchain",
          icon: Link2,
        },
        {
          title: "Learn",
          desc: "Your crypto questions, answered",
          icon: FileText,
          link: "/learn",
        },
      ],
      [
        {
          title: "Advanced",
          desc: "Professional-grade trading tools",
          icon: BarChart2,
        },
        {
          title: "Earn",
          desc: "Stake your crypto and earn rewards",
          icon: PieChart,
        },
        {
          title: "Coinbase Wealth",
          desc: "Institutional-grade services for UHNW",
          icon: Gem,
        },
        {
          title: "Credit Card",
          desc: "Earn up to 4% bitcoin back",
          icon: CreditCard,
        },
        {
          title: "Debit Card",
          desc: "Spend crypto and earn rewards",
          icon: CreditCard,
        },
      ],
    ],
    promo: {
      tag: "System Update 2025",
      text: "The next chapter of Coinbase. Live on X 12/17.",
      linkLabel: "Learn more",
    },
  },
  {
    label: "Businesses",
    columns: [
      [
        {
          title: "Business",
          desc: "Crypto trading and payments for startups and SMBs",
          icon: Building2,
        },
        {
          title: "Asset Listings",
          desc: "List your asset on Coinbase",
          icon: LineChart,
        },
        {
          title: "Payments",
          desc: "The stablecoin payments stack for commerce platforms",
          icon: CreditCard,
        },
        {
          title: "Token Manager",
          desc: "The platform for token distributions, vesting, and lockups",
          icon: Lock,
        },
      ],
    ],
    promo: {
      tag: "Commerce Payments Protocol",
      text: "A new standard for onchain payments.",
      linkLabel: "Learn more",
    },
  },
  {
    label: "Institutions",
    columns: [
      [
        { heading: "Prime" },
        { title: "Trading and Financing", desc: "", icon: ArrowRightLeft },
        { title: "Custody", desc: "", icon: Lock },
        { title: "Staking", desc: "", icon: PieChart },
        { title: "Onchain Wallet", desc: "", icon: Wallet },
      ],
      [
        { heading: "Markets" },
        { title: "Exchange", desc: "", icon: LineChart },
        { title: "International Exchange", desc: "", icon: Globe },
        { title: "Derivatives Exchange", desc: "", icon: BarChart2 },
        { title: "Verified Pools", desc: "", icon: Users },
      ],
    ],
    promo: {
      tag: "Our clients",
      text: "Trusted by institutions and government.",
      linkLabel: "Learn more",
    },
  },
  {
    label: "Developers",
    columns: [
      [
        { heading: "Payments" },
        { title: "Payments", desc: "", icon: CreditCard },
        { title: "Trading", desc: "", icon: ArrowRightLeft },
        { title: "Wallets", desc: "", icon: Wallet },
        { title: "Stablecoins", desc: "", icon: Banknote },
      ],
      [
        { heading: "Solutions" },
        { title: "Banks & Brokerages", desc: "", icon: Building2 },
        { title: "Payment Firms", desc: "", icon: Briefcase },
        { title: "Startups", desc: "", icon: Blocks },
      ],
    ],
    promo: {
      tag: "World class crypto infrastructure",
      text: "Discover Coinbase's complete crypto-as-a-service platform.",
      linkLabel: "Learn more",
    },
  },
  {
    label: "Company",
    columns: [
      [
        { title: "About", desc: "", icon: Building2 },
        { title: "Affiliates", desc: "", icon: Users },
        { title: "Blog", desc: "", icon: FileText },
        { title: "Careers", desc: "", icon: Briefcase },
        { title: "Support", desc: "", icon: HelpCircle },
        { title: "Security", desc: "", icon: Shield },
      ],
    ],
    promo: {
      tag: "Learn all about Coinbase",
      text: "We're building the open financial system.",
      linkLabel: "Learn more",
    },
  },
];