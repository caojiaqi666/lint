import { useEffect, useRef } from "react";

/** 依赖更新时触发Effect */
export const useUpdate = (callback: Function, deps: any[]) => {
	const isFirst = useRef<boolean>(true);
	if (isFirst.current) {
		isFirst.current = false;
	} else {
		useEffect(() => {
			callback();
		}, deps);
	}
};
