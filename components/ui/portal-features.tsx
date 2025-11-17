"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, MapIcon, Activity } from "lucide-react";
import { ReactNode } from "react";

export function PortalFeatures() {
  return (
    <section className="bg-black py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={MapIcon}
                title="Real time location tracking"
                description="Advanced tracking system, Instantly locate all your assets."
              />
            </CardHeader>

            <div className="relative mb-6 border-t border-dashed border-white/10 sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.05),black_125%)]"></div>
              <div className="aspect-76/59 p-1 px-6">
                <div className="relative w-full h-full bg-linear-to-br from-primary/10 to-transparent rounded-lg flex items-center justify-center">
                  <MapIcon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Activity}
                title="Real-time Analytics"
                description="Monitor your operations with live data and insights."
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,black_100%)]"></div>
                <div className="aspect-76/59 border border-white/10 rounded-lg">
                  <div className="relative w-full h-full bg-linear-to-br from-primary/10 to-transparent rounded-lg flex items-center justify-center">
                    <Activity className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold text-white font-heading">
              Smart dashboard with automated notifications for order updates.
            </p>

            <div className="flex justify-center gap-6 overflow-hidden">
              <CircularUI
                label="Orders"
                circles={[{ pattern: "border" }, { pattern: "border" }]}
              />

              <CircularUI
                label="Inventory"
                circles={[{ pattern: "none" }, { pattern: "primary" }]}
              />

              <CircularUI
                label="Tracking"
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
              />

              <CircularUI
                label="Reports"
                circles={[{ pattern: "primary" }, { pattern: "border" }]}
                className="hidden sm:block"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-lg shadow-lg bg-black border-white/10",
      className
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-primary"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-primary"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-primary"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-primary"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-white/70 flex items-center gap-2 text-sm md:text-base">
      <Icon className="size-4 text-primary" />
      {title}
    </span>
    <p className="mt-8 text-xl sm:text-2xl font-semibold text-white font-heading">
      {description}
    </p>
  </div>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-linear-to-b from-primary/20 to-transparent size-fit rounded-2xl p-px">
      <div className="bg-linear-to-b from-black to-black/50 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-black bg-[repeating-linear-gradient(-45deg,#fdb913,#fdb913_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-black z-10 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-white/60 mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
