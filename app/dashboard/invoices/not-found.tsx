import Link from 'next/link';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceSmileIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">Well Played</h2>
      <p>Nice try bro!</p>

      {/* GIF directly */}
      <img
        src="/never_gonna.gif" // Make sure this path matches your public folder
        alt="Dance gif"
        width={300}
        className="mt-2"
      />

      <a
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </a>
    </main>
  );
}
