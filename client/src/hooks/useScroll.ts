import { useEffect, useRef } from 'react';

// @ts-ignore
export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0,
        };

        // @ts-ignore
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                callback();
            }
        }, options);

        // @ts-ignore
        observer.current.observe(childRef.current);

        return function onCancel() {
            if (childRef.current) {
                // @ts-ignore
                // eslint-disable-next-line
                observer.current.unobserve(childRef.current);
            }
        };
    }, [callback, childRef, parentRef]);
}
