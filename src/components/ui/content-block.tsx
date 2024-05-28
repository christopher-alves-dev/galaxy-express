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
>(({ ...props }, ref) => <CardHeader ref={ref} {...props} />);

ContentBlockHeader.displayName = "ContentBlockHeader";

const ContentBlockTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn("text-xl", className)} {...props} />
));

ContentBlockTitle.displayName = "ContentBlockTitle";

const ContentBlockContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent
    ref={ref}
    className={cn("space-y-6 p-4", className)}
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
