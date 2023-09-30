import { useEffect, useRef, useState } from "react";

const UseFirstViewPortEntry = (
  ref: React.RefObject<HTMLElement>,
  observerOption: IntersectionObserverInit
) => {
  const [enteredViewPort, setEnteredViewPort] = useState(false);

  const observerRef = useRef(
    new IntersectionObserver(([entry]) => {
      setEnteredViewPort(entry.isIntersecting);
    }, observerOption)
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observerRef.current;

    if (enteredViewPort) {
      ob.disconnect();
      return;
    }

    if (element && !enteredViewPort) ob.observe(element);

    return () => {
      ob.disconnect();
    };
  }, [enteredViewPort, ref]);

  return enteredViewPort;
};

export default UseFirstViewPortEntry;
