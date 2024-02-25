import React from "react";
import Cursor from "react-animated-cursor";

export const AnimatedCursor = () => {
    return (
        <Cursor
            innerSize={10}
            outerSize={80}
            color='255, 255, 255'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            showSystemCursor={false}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                {
                    target: '.custom',
                    outerScale: 3,
                    innerSize: 3,
                    outerSize: 3,
                    innerScale: 3,
                }
            ]}/>
    )
}
