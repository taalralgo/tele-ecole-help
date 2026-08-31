"use client";

import { useState } from "react";
import { COPY } from "@/lib/site";
import { BANK_NAME, IBAN } from "@/lib/payments";
import { IconBank, IconChevronDown } from "@/components/icons";

export function BankTransfer() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <details className="bank-transfer group">
      <summary className="bank-transfer__summary">
        <span className="bank-transfer__label">
          <span className="bank-transfer__icon">
            <IconBank className="bank-transfer__bank-svg" />
          </span>
          <span className="bank-transfer__text font-display">
            <span className="bank-transfer__short">{COPY.bankSummaryShort}</span>
            <span className="bank-transfer__long">{COPY.bankSummary}</span>
          </span>
        </span>
        <IconChevronDown className="bank-transfer__chevron" />
      </summary>
      <div className="bank-transfer__details">
        <p>
          Banque : <strong>{BANK_NAME}</strong>
        </p>
        <p className="bank-transfer__iban">
          {IBAN}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="bank-transfer__copy font-display"
        >
          {copied ? COPY.copied : COPY.copyIban}
        </button>
        <p aria-live="polite" className="sr-only">
          {copied ? COPY.copied : ""}
        </p>
      </div>
    </details>
  );
}
