import React, { useEffect, useRef } from "react";

interface ComponentProps {
}

let App: React.FC<ComponentProps> = () => {
    const canvasRef = useRef(null as null | HTMLCanvasElement);

    useEffect(() => {
        const canvasElem = canvasRef.current!;
        const gl = canvasElem.getContext("webgl")!;
        gl.clearColor(0, 0, 0, 1);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default App;