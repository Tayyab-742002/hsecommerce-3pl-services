import Link from "next/link";
import { Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Package className="w-24 h-24 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4 font-heading">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The service you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-black font-bold transition-all duration-200"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

