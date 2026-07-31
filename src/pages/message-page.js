import React, { useState } from "react";

export default function MessageComposer() {
  const [type, setType] = useState("marketing");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          WhatsApp Message Composer
        </h1>

        {/* Message Type */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Message Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="marketing">Marketing Message</option>
            <option value="utility">Utility Message</option>
            <option value="reminder">Reminder Message</option>
          </select>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Template Title</label>
          <input
            type="text"
            placeholder="e.g. New Offer / Payment Reminder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Message Box */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Message Text</label>
          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your WhatsApp message here..."
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Formatting Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMessage(message + " *Bold* ")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Bold
          </button>

          <button
            onClick={() => setMessage(message + " _Italic_ ")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Italic
          </button>

          <button
            onClick={() => setMessage(message + " ~Strike~ ")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Strike
          </button>
        </div>

        {/* Preview */}
        <div className="border rounded p-4 bg-gray-100 mb-6">
          <h2 className="font-semibold mb-2">Preview</h2>
          <p className="text-sm whitespace-pre-line">
            {message || "Your message preview will appear here..."}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Template
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </div>

        {/* Message Type Info */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <b>Marketing:</b> Promotions, offers, ads
          </p>
          <p>
            <b>Utility:</b> Billing, updates, confirmations
          </p>
          <p>
            <b>Reminder:</b> Follow-ups, appointments
          </p>
        </div>

      </div>
    </div>
  );
}