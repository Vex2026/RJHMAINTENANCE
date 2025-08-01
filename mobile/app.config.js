/* eslint-env node */
export default {
  expo: {
    name: 'RJH Maintenance',
    slug: 'rjh-maintenance',
    version: '1.0.0',
    sdkVersion: '49.0.0',
    platforms: ['ios', 'android'],
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
};
