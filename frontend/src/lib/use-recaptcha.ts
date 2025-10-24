import { useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!siteKey) {
        console.warn('reCAPTCHA site key not configured');
        return null;
      }

      try {
        // Wait for reCAPTCHA to be ready
        await new Promise<void>((resolve) => {
          if (typeof window !== 'undefined' && window.grecaptcha) {
            window.grecaptcha.ready(() => resolve());
          } else {
            // Fallback if grecaptcha not loaded
            setTimeout(() => resolve(), 1000);
          }
        });

        // Execute reCAPTCHA
        if (typeof window !== 'undefined' && window.grecaptcha) {
          const token = await window.grecaptcha.execute(siteKey, { action });
          return token;
        }

        return null;
      } catch (error) {
        console.error('reCAPTCHA error:', error);
        return null;
      }
    },
    [siteKey]
  );

  return { executeRecaptcha };
}
