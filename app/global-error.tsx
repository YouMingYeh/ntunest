"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh">
      <body className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h2>出錯了！</h2>
        <pre>{error.message}</pre>
        <Button
          onClick={() => {
            reset();
          }}
        >
          重試
        </Button>
      </body>
    </html>
  );
}
