import type { NextConfig } from "next";
import { MAPBOX_TOKEN, MONGO_DATABASE, MONGO_URI, NEXT_PUBLIC_API_URL } from "@/lib/constants/config";

const nextConfig: NextConfig = {
  env: {
    MONGODB_URI: MONGO_URI,
    MONGO_DATABASE: MONGO_DATABASE,
    NEXT_PUBLIC_API_URL: NEXT_PUBLIC_API_URL,
    MAPBOX_TOKEN: MAPBOX_TOKEN
  },
};

export default nextConfig;
