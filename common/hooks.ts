import { useEffect } from "react";

export const useMountEffect = handler => useEffect(handler, []);