/**
 * San Jose Maids Color Palette
 * Ocean-inspired colors: Deep ocean blues and vibrant teals
 */

export const COLORS = {
  // ===== BACKGROUNDS =====
  
  backgrounds: {
    // Primary section background - Royal blue (from header)
    primary: "rgba(26, 55, 85, 0.95)",
    
    // Secondary section background (same as primary for consistency)
    secondary: "rgba(26, 55, 85, 0.95)",
    
    // Hero gradient background - Royal blue gradient
    hero: "bg-gradient-to-br from-[#1a3755] to-[#234b73]",
    
    // Card background (for service cards, etc) - Rich royal blue (uniform)
    card: "bg-[rgba(22,48,75,0.95)]",
    
    // Input field background
    input: "bg-[#1a3755]/50",
    
    // Form container background
    form: "bg-[#1a3755]/50",
  },
  
  // ===== BRAND COLORS =====
  
  brand: {
    // Primary gold gradient
    goldGradientFrom: "#dfbd69",
    goldGradientTo: "#b8956d",
    
    // Legacy single gold (fallback)
    gold: "#dfbd69",
    goldRGB: "223, 189, 105",
    
    // Royal blue
    dark: "#1a3755",
    darkRGB: "26, 55, 85",
    
    // Muted gold (for hover states)
    goldMuted: "#b8956d",
  },
  
  // ===== TEXT COLORS =====
  
  text: {
    // Primary white text
    primary: "text-white",
    
    // Secondary white text (80% opacity)
    secondary: "text-white/80",
    
    // Muted white text (70% opacity)
    muted: "text-white/70",
    
    // Very muted (60% opacity)
    veryMuted: "text-white/60",
    
    // Brand gold accent
    accent: "text-[#dfbd69]",
    accentGradient: "bg-gradient-to-r from-[#dfbd69] to-[#b8956d] bg-clip-text text-transparent",
    
    // Gray for descriptions
    gray: "text-gray-100",
  },
  
  // ===== BORDERS & OVERLAYS =====
  
  borders: {
    light: "border-white/10",
    medium: "border-white/20",
    strong: "border-white/30",
    gold: "border-[#dfbd69]",
  },
  
  overlays: {
    // Video/image overlay
    dark: "bg-black/60",
    
    // Light overlay for hover states
    light: "bg-white/10",
    lightHover: "bg-white/15",
    
    // Card hover overlay - Slightly lighter royal blue
    cardHover: "bg-[rgba(26,55,85,0.98)]",
  },
  
  // ===== RING COLORS (for focus states) =====
  
  rings: {
    gold: "ring-[#dfbd69]",
    goldDark: "ring-[rgba(26,55,85,1)]",
    white: "ring-white/20",
  },
};

/**
 * Inline style helpers for cases where Tailwind can't be used
 * NOTE: All sections should use the same background for consistency
 */
export const INLINE_STYLES = {
  // Standard section background - Royal blue (same for all sections)
  primary: { background: 'rgba(26, 55, 85, 0.95)' },
  
  // Legacy secondary (kept for compatibility but should use primary)
  secondary: { background: 'rgba(26, 55, 85, 0.95)' },
  
  // Gold glow shadow
  goldGlow: { boxShadow: '0 0 20px rgba(223, 189, 105, 0.15)' },
  
  // Dark shadow
  darkShadow: { boxShadow: '0 0 20px rgba(26, 55, 85, 0.3)' },
};
