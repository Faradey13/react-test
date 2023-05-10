import {useEffect, useRef} from "react";

export const useObserve = (isLoading, ref, isLoad, setPage, page) =>{
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return
        if(observer.current)
            observer.current.disconnect()


        const cb = function (entries, observer) {
            if(entries[0].isIntersecting && isLoad){
                setPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)

    },[isLoading])}