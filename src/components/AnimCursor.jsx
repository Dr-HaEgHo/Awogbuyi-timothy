import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={0}
      color="#D7D7D7"
      outerStyle={{
        backgroundColor: "none",
        border: "1px #D7D7D7 solid",
      }}
      innerStyle={{
        background: "#D7D7D7",
      }}
      zIndex={9999999999999}
      outerAlpha={0.2}
      innerScale={1.4}
      outerScale={0}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default AnimCursor