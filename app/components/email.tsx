"use client";

import React, { useState } from "react";
import { z } from "zod";

const emailSchema = z.object({
  name: z
    .string()
    .min(4, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must be a valid format"),
  subject: z
    .string()
    .min(5, "Subject is required & must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

export default function EmailForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      subject,
      message,
    };

    const result = emailSchema.safeParse(data);

    if (!result.success) {
      const formattedErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || "Failed to send message. Please try again.",
        );
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setSuccess(true);

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col flex space-y-2">
      <div className="flex w-full gap-2">
        <div className="w-full">
          <input
            type="text"
            className="border w-full rounded border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800"
            placeholder="Write your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              className="text-red-600 dark:text-red-400 text-sm mt-1"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            className="border w-full rounded border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800"
            placeholder="Write Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-red-600 dark:text-red-400 text-sm mt-1"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          className="border rounded border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 w-full"
          placeholder="Write Your Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p
            id="subject-error"
            className="text-red-600 dark:text-red-400 text-sm mt-1"
          >
            {errors.subject}
          </p>
        )}
      </div>
      <div>
        <textarea
          className="border rounded border-neutral-200 bg-neutral-50 px-3 py-2 h-36 dark:border-neutral-700 dark:bg-neutral-800 w-full"
          placeholder="Write Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-red-600 dark:text-red-400 text-sm mt-1"
          >
            {errors.message}
          </p>
        )}
      </div>
      {success && (
        <p className="text-green-600 dark:text-green-400 text-sm">
          Message sent successfully! I'll get back to you soon.
        </p>
      )}
      {errors.submit && (
        <p className="text-red-600 dark:text-red-400 text-sm">
          {errors.submit}
        </p>
      )}
      <button
        type="submit"
        className="justify-center py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
