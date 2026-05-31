// Thin wrapper around lucide-react that keeps the prototype's name-based API
// (kebab-case icon names) while bundling only the icons we actually use.
import {
  Image,
  Presentation,
  Users,
  Mic,
  Check,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Scale,
  Rocket,
  MapPin,
  Calendar,
  Wine,
  ArrowLeft,
  ArrowRight,
  Ticket,
  Minus,
  Plus,
  Lock,
  Mail,
  Phone,
  Globe,
  X,
} from 'lucide-react';

const ICONS = {
  image: Image,
  presentation: Presentation,
  users: Users,
  mic: Mic,
  check: Check,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
  handshake: Handshake,
  scale: Scale,
  rocket: Rocket,
  'map-pin': MapPin,
  calendar: Calendar,
  wine: Wine,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  ticket: Ticket,
  minus: Minus,
  plus: Plus,
  lock: Lock,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  x: X,
};

export function Icon({ name, size = 20, color, style }) {
  const L = ICONS[name];
  if (!L) return null;
  return <L size={size} color={color} style={style} />;
}
