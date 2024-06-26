import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ContentBlock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn("bg-accent", className)} {...props} />
));

ContentBlock.displayName = "ContentBlock";

const ContentBlockHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader ref={ref} className={cn("md:p-6", className)} {...props} />
));

ContentBlockHeader.displayName = "ContentBlockHeader";

const ContentBlockTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight md:text-2xl",
      className,
    )}
    {...props}
  />
));

ContentBlockTitle.displayName = "ContentBlockTitle";

const ContentBlockContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent
    ref={ref}
    className={cn("space-y-6 p-4 md:p-6", className)}
    {...props}
  />
));

ContentBlockContent.displayName = "ContentBlockContent";

export {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
  ContentBlockTitle,
};
