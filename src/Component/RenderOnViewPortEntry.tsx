import { Suspense, useRef } from "react";
import UseFirstViewPortEntry from "../useFirstViewPortEntry";

const RenderOnViewPortEntry: React.FC<{
  children: React.ReactNode;
  threshold: number;
  root?: HTMLElement | null;
  rootMargin?: string;
  [key: string]: unknown;
}> = ({
  children,
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  ...props
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const isEnteredViewPort = UseFirstViewPortEntry(ref, {
    threshold,
    root,
    rootMargin,
  });

  return (
    <div {...props} ref={ref as React.LegacyRef<HTMLDivElement>}>
      {isEnteredViewPort && (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      )}
    </div>
  );
};

export default RenderOnViewPortEntry;
