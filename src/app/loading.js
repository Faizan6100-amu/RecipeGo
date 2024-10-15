"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/recipe-list");
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="text-center">
          <Skeleton className="w-16 h-16 rounded-full mb-4 animate-pulse bg-gray-500" />
          <p className="text-white text-lg font-semibold mb-2">Loading, please wait...</p>
          <p className="text-gray-300 text-sm">We’re preparing something delicious for you.</p>
        </div>
      </div>
    );
  }

  return null;
}
