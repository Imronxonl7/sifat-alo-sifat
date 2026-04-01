import next from "next";
import React from "react";

const api = async ({ url }:{url:string}) => {
  const res = await fetch(
    `https://mjfeqkochzjqcmchbjvd.supabase.co/rest/v1/${url}?select=*`,
    {
      headers: {
        apikey: "sb_publishable_KCddhf5A2PZBV5d21suB4Q_veW88QyD",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZmVxa29jaHpqcWNtY2hianZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MjAxMDMsImV4cCI6MjA5MDE5NjEwM30.umY_60eTsTHRzO2JMTLp80YFSndn5j0X3OZbLDdJrG4",
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 120,
      },
    },
  );

  const data = await res.json();

  return { data };
};

export default api;
