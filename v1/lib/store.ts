/**
 * Zustand Store for Token State Management
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DesignTokens } from '@/types/tokens';
import defaultTokens from '@/data/tokens.json';

interface TokenStore {
  tokens: DesignTokens;
  theme: 'light' | 'dark';
  hasUnsavedChanges: boolean;

  // Actions
  setTokens: (tokens: DesignTokens) => void;
  updateColor: (scale: string, key: string, value: string) => void;
  updateTypography: (category: string, key: string, value: string) => void;
  updateSpacing: (key: string, value: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  resetToDefaults: () => void;
  markSaved: () => void;
}

export const useTokenStore = create<TokenStore>()(
  persist(
    (set) => ({
      tokens: defaultTokens as DesignTokens,
      theme: 'dark',
      hasUnsavedChanges: false,

      setTokens: (tokens) =>
        set({ tokens, hasUnsavedChanges: true }),

      updateColor: (scale, key, value) =>
        set((state) => {
          const newTokens = { ...state.tokens };
          const colors = { ...newTokens.colors };

          if (scale === 'navy' || scale === 'cream') {
            colors[scale] = {
              ...colors[scale],
              [key]: { ...colors[scale][key], value },
            };
          } else if (scale === 'accent') {
            colors.accent = {
              ...colors.accent,
              [key]: { ...colors.accent[key as keyof typeof colors.accent], value },
            };
          } else if (scale === 'semantic') {
            colors.semantic = {
              ...colors.semantic,
              [key]: { ...colors.semantic[key as keyof typeof colors.semantic], value },
            };
          }

          newTokens.colors = colors;
          return { tokens: newTokens, hasUnsavedChanges: true };
        }),

      updateTypography: (category, key, value) =>
        set((state) => {
          const newTokens = { ...state.tokens };
          const typography = { ...newTokens.typography };

          if (category === 'scale') {
            typography.scale = {
              ...typography.scale,
              [key]: { ...typography.scale[key], value },
            };
          } else if (category === 'lineHeight') {
            typography.lineHeight = {
              ...typography.lineHeight,
              [key]: { ...typography.lineHeight[key], value },
            };
          } else if (category === 'letterSpacing') {
            typography.letterSpacing = {
              ...typography.letterSpacing,
              [key]: { ...typography.letterSpacing[key], value },
            };
          }

          newTokens.typography = typography;
          return { tokens: newTokens, hasUnsavedChanges: true };
        }),

      updateSpacing: (key, value) =>
        set((state) => {
          const newTokens = { ...state.tokens };
          newTokens.spacing = {
            ...newTokens.spacing,
            [key]: { ...newTokens.spacing[key], value },
          };
          return { tokens: newTokens, hasUnsavedChanges: true };
        }),

      setTheme: (theme) => set({ theme }),

      resetToDefaults: () =>
        set({ tokens: defaultTokens as DesignTokens, hasUnsavedChanges: false }),

      markSaved: () => set({ hasUnsavedChanges: false }),
    }),
    {
      name: 'atlas-meridia-tokens',
      partialize: (state) => ({
        tokens: state.tokens,
        theme: state.theme,
      }),
    }
  )
);
