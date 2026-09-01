"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { IconWhatsApp } from "@/components/icons";
import { COPY, getWhatsAppShareUrl } from "@/lib/site";

type WhatsAppShareLinkProps = {
  fallbackUrl?: string;
};

function normalizePageUrl(value?: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return undefined;
    }

    url.hash = "";
    url.search = "";
    return url.toString();
  } catch {
    return undefined;
  }
}

function detectCurrentPageUrl() {
  if (typeof window === "undefined") return undefined;
  return normalizePageUrl(window.location.href);
}

export function WhatsAppShareLink({ fallbackUrl }: WhatsAppShareLinkProps) {
  const normalizedFallback = normalizePageUrl(fallbackUrl);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const fallbackHref = getWhatsAppShareUrl(normalizedFallback);

  useEffect(() => {
    const pageUrl = detectCurrentPageUrl() ?? normalizedFallback;
    if (linkRef.current) {
      linkRef.current.href = getWhatsAppShareUrl(pageUrl);
    }
  }, [normalizedFallback]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const pageUrl = detectCurrentPageUrl() ?? normalizedFallback;
    const nextHref = getWhatsAppShareUrl(pageUrl);

    event.currentTarget.href = nextHref;
  }

  return (
    <a
      ref={linkRef}
      href={fallbackHref}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="campaign-close__share"
    >
      <IconWhatsApp className="campaign-close__whatsapp" />
      {COPY.shareWhatsApp}
    </a>
  );
}
