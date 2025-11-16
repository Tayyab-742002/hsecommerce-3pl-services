import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, PlusIcon } from "lucide-react";

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<"div"> & {
  // Content props
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "bg-gray-800 rounded-lg relative grid h-full w-full shadow-2xl border border-gray-500/20 md:grid-cols-2",
        className
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-primary" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-primary" />
      <div className="flex flex-col justify-between md:col-span-1">
        <div className="relative h-full space-y-6 px-6 py-8 md:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl  text-primary font-heading">
            {title}
          </h1>
          <p className="text-white/80 max-w-xl text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="space-y-4">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "bg-black rounded-r-lg flex h-full w-full items-center border-l border-gray-500/50 p-6 md:col-span-1 shadow-2xl",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-2", className)} {...props}>
      <div className="bg-primary/20 rounded-lg p-3">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-bold text-sm text-primary uppercase tracking-wider">
          {label}
        </p>
        <p className="text-white/90 text-sm whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}
