"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Banknote } from "lucide-react";

export function Helper() {
  const route = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <div data-dial-init className="fixed end-6 bottom-6 group">
        {open && (
          <Tooltip>
            <TooltipTrigger
              asChild
              onClick={() => route.push(`${pathname}/card`)}
            >
              <div className="flex flex-col items-center mb-4 space-y-2">
                <button
                  type="button"
                  className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200"
                >
                  <Banknote size={24} />
                  <span className="sr-only">banknote</span>
                </button>
              </div>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Simular pagamento PIX</p>
            </TooltipContent>
          </Tooltip>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center text-white bg-secondary rounded-full w-14 h-14"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
    </TooltipProvider>
  );
}
