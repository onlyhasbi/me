import React from "react";
import Typed from "typed.js";

const TypedAnimation = ({ strings }) => {
  const typeRef = React.useRef();
  const text = React.useMemo(() => strings, [strings]);

  React.useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
    };

    const typed = new Typed(typeRef.current, options);
    return () => typed.destroy();
  }, [strings, text]);

  return <span ref={typeRef}></span>;
};

export default TypedAnimation;
