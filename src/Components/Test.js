import React from "react";
import gsap from "gsap";
import "../Styling/Test.css";
const { useEffect, useRef, useState, useImperativeHandle, forwardRef } = React;

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        }
      };
    },
    [delay]
  );

  return /*#__PURE__*/ React.createElement("div", {
    className: `circle ${size}`,
    ref: el
  });
});

export default function Test() {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return /*#__PURE__*/ React.createElement(
    "div",
    
    React.createElement(Circle, {
      size: "sm",
      ref: addCircleRef,
      delay: 0
    }) /*#__PURE__*/,
    React.createElement(Circle, {
      size: "md",
      ref: addCircleRef,
      delay: 0.1
    }) /*#__PURE__*/,
    React.createElement(Circle, { size: "lg", ref: addCircleRef, delay: 0.2 })
  );
}
