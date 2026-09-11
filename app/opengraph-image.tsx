import { ImageResponse } from "next/og";
import { OG_IMAGE_CONTENT_TYPE, OG_IMAGE_SIZE, OgImageElement } from "@/lib/og-image";

export const alt = "ImmoZen Tanger — Vendez ou louez votre bien sans commission propriétaire";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(<OgImageElement />, size);
}
