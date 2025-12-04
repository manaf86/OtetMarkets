export interface AccountType {
  name: string;
  minDeposit: string;
  spread: string;
  commission: string;
  leverage: string;
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
