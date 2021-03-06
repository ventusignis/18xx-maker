import React from "react";

import Text from "./Text";
import Color from "../../data/Color";

import { getFontProps  } from "../../util";

import defaultTo from "ramda/src/defaultTo";

const Hexagon = (props) => {
  let { text, textColor, color, opacity, borderColor, borderWidth, width, dashed } = props;

  let scale = defaultTo(50, width) / 50;
  let x = 25 * scale;
  let y = 21.650625 * scale;

  let font = getFontProps(props, 16 * scale);
  let strokeDashArray = dashed ? `${width / 7.142857143} ${width / 7.142857143}` : undefined;

  return (
    <Color>
      {(c,t) => (
        <g>
          <path d={`M -${x} 0 L -${x/2} -${y} L ${x/2} -${y} L ${x} 0 L ${x/2} ${y} L -${x/2} ${y} z`}
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

export default Hexagon;
