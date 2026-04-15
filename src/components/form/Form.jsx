import { useForm } from "@/hooks/useForm"
import { useState } from "react"

export default function ContactForm() {
  const validators = {
    firstName: (v) => (!v ? "First name is required" : ""),
    lastName: (v) => (!v ? "Last name is required" : ""),
    email: (v) => (!v ? "Email is required" : ""),
    service: (v) => (!v ? "Please select a service" : ""),
    message: (v) => (!v ? "Message is required" : ""),
  }

  const { form, errors, handleSubmit, updateField } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
    validators,
  )

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("Submitted:", data)
      })}
      className="flex flex-col gap-5"
    >
      {/* NAME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/60 text-xs mb-2 font-medium">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Jane"
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#dfbea6]/50"
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-white/60 text-xs mb-2 font-medium">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Smith"
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#dfbea6]/50"
          />
          {errors.lastName && (
            <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-white/60 text-xs mb-2 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="jane@company.com"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#dfbea6]/50"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* COMPANY */}
      <div>
        <label className="block text-white/60 text-xs mb-2 font-medium">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={(e) => updateField("company", e.target.value)}
          placeholder="Your Company Pty Ltd"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#dfbea6]/50"
        />
      </div>

      {/* SELECT */}
      <div>
        <label className="block text-white/60 text-xs mb-2 font-medium">
          Service Interest *
        </label>

        <div className="relative">
          <select
            name="service"
            value={form.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="w-full appearance-none bg-white/10 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white text-sm focus:outline-none focus:border-[#dfbea6]/50 cursor-pointer"
          >
            <option value="" disabled className="text-gray-400 bg-[#002d2e]">
              Select a service...
            </option>
            <option value="Technology" className="text-black">
              Technology
            </option>
            <option value="Accounting & Bookkeeping" className="text-black">
              Accounting & Bookkeeping
            </option>
            <option value="Customer & Business Services" className="text-black">
              Customer & Business Services
            </option>
            <option value="Multiple Services" className="text-black">
              Multiple Services
            </option>
          </select>

          {/* arrow */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">
            ▼
          </div>
        </div>

        {errors.service && (
          <p className="text-red-400 text-xs mt-1">{errors.service}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block text-white/60 text-xs mb-2 font-medium">
          Message *{" "}
          <span className="text-white/30">({form.message.length}/500)</span>
        </label>

        <textarea
          name="message"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          maxLength={500}
          rows={4}
          placeholder="Tell us about your business and what you're looking for..."
          className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#dfbea6]/50"
        />

        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-[#dfbea6] text-[#002d2e] text-sm font-bold hover:bg-[#d4ae94] transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
