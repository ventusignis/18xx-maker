import React from "react";

import Text from "./Text";
import Color from "../../data/Color";

import { getFontProps  } from "../../util";

import defaultTo from "ramda/src/defaultTo";

const Diamond = (props) => {
  let { text, textColor,
        color, opacity,
        borderColor, borderWidth, width, dashed } = props;

  let scale = defaultTo(50, width) / 50;
  let x = 25 * scale;

  let font = getFontProps(props, 14 * scale);
  let strokeDashArray = dashed ? `${width / 7.142857143} ${width / 7.142857143}` : undefined;

  return (
    <Color>
      {(c,t) => (
        <g>
          <path d={`M -${x} 0 L 0 -${x} L ${x} 0 L 0 ${x} z`}
                fill={defaultTo("none", c(color))}
                fillOpacity={defaultTo(1, opacity)}
                stroke={c(defaultTo("black", borderColor))}
                strokeWidth={defaultTo(2, borderWidth)}
                strokeDasharray={strokeDashArray}
                strokeLinecap="round" />
          <Text {...font} text={text} color={textColor} />
        </g>
      )}
    </Color>
  );
};

export default Diamond;
