interface iConfig {
  API_URL: string;
}

export const configuration: iConfig = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000',
};
