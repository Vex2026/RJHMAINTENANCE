# RJH Maintenance Mobile App

This directory contains a simple React Native application built with [Expo](https://expo.dev/) for the R.J.H-MAINTENANCE company.

## Setup

1. Install dependencies (requires Node.js and npm):
   ```bash
   cd mobile
   npm install
   ```
2. Set the Supabase environment variables in `app.config.js` or by using an `.env` file with the following values:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`

3. Start the development server:
   ```bash
   npm start
   ```
   Use the Expo CLI to run the app on an iOS simulator or a physical device.

## Functionality

Users can sign up or log in with their email and password. After authentication, the app displays a list of available services fetched from the `services` table in Supabase.
