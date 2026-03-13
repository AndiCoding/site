"use client"; // Required if using App Router
import { useEffect, useState } from 'react';
import {auth}                  from "@/firebase";

export default function TestFirebase() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    // If auth object exists and has an expected property (like app), it's initialized
    if (auth && auth.app) {
      console.log("Firebase Object:", auth);
      setStatus(`Success! Connected to Project: ${auth.app.options.projectId}`);
    } else {
      setStatus("Failed to load Firebase");
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Firebase Connection Test</h1>
      <pre>{status}</pre>
    </div>
  );
}