/**
 * ATLAS Meridia Design Tokens Type Definitions
 *
 * This file defines the TypeScript interfaces for the design token system.
 * The source of truth is /data/tokens.json
 */

export interface TokenMeta {
  name: string;
  version: string;
  updatedAt: string;
  updatedBy: 'human' | 'agent' | 'figma';
  description?: string;
}

export interface ColorValue {
  value: string;
  description?: string;
  usage?: string[];
}

export interface ColorScale {
  [key: string]: ColorValue;
}

export interface ColorTokens {
  navy: ColorScale;
  cream: ColorScale;
  accent: ColorScale;
  semantic: {
    success: ColorValue;
    error: ColorValue;
    warning: ColorValue;
  };
}

export interface FontStack {
  family: string;
  googleFonts?: string;
  weights: number[];
  description?: string;
  usage?: string;
}

export interface SizeValue {
  value: string;
  px?: string;
  description?: string;
}

export interface TypographyTokens {
  fonts: {
    display: FontStack;
    body: FontStack;
    ui: FontStack;
    mono: FontStack;
    chinese: FontStack;
  };
  scale: { [key: string]: SizeValue };
  lineHeight: { [key: string]: SizeValue };
  letterSpacing: { [key: string]: SizeValue };
}

export interface SpacingTokens {
  [key: string]: SizeValue;
}

export interface LayoutTokens {
  [key: string]: SizeValue;
}

export interface MotionTokens {
  [key: string]: {
    value: string;
    description?: string;
  };
}

export interface EffectTokens {
  borderRadius: { [key: string]: SizeValue };
  shadow: { [key: string]: { value: string; description?: string } };
}

export interface ThemeValues {
  bgPrimary: string;
  bgDeep: string;
  bgElevated: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderColor: string;
  bodyWeight: number;
  bodyTracking: string;
  accentText: string;
}

export interface ThemeTokens {
  light: ThemeValues;
  dark: ThemeValues;
}

export interface DesignTokens {
  $schema?: string;
  meta: TokenMeta;
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  layout: LayoutTokens;
  motion: MotionTokens;
  effects: EffectTokens;
  themes: ThemeTokens;
}

// Outlet types
export interface OutletDimensions {
  width: string;
  height: string;
  bleed?: string;
  safeZone?: string;
}

export interface OutletVendor {
  name: string;
  productId?: string;
  notes?: string;
}

export interface OutletSpecs {
  breakpoints?: { [key: string]: string };
  dimensions?: OutletDimensions;
  colorSpace?: 'CMYK' | 'RGB';
  resolution?: string;
  vendor?: OutletVendor;
}

export interface Outlet {
  id: string;
  name: string;
  type: 'web' | 'print';
  description: string;
  specs: OutletSpecs;
  tokenOverrides?: Partial<DesignTokens>;
  status: 'active' | 'placeholder' | 'deprecated';
}

export interface OutletConfig {
  outlets: Outlet[];
}
