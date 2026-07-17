"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/metadata";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Automation Audit Request — ${form.business || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Business name"
          name="business"
          value={form.business}
          onChange={handleChange}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-charcoal">
          What&apos;s eating up your team&apos;s time?
        </span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-blue"
          placeholder="Tell us a bit about your business and where manual work is slowing you down."
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-lg bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-dark"
      >
        Book My Free Automation Audit
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-charcoal">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-blue"
      />
    </label>
  );
}
