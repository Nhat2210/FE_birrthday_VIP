export const useBreakpoints = () => {
    let windowWidth = ref(window.innerWidth);

    const onWidthChange = () => (windowWidth.value = window.innerWidth);
    onMounted(() => {window.addEventListener("resize" , onWidthChange)});
    onUnmounted(() => {window.removeEventListener("resize", onWidthChange)});

    const type = computed(() => {
        if(windowWidth.value < 480) return "mobile";
        if(windowWidth.value >=481 && windowWidth.value < 1024) return "tablet"; 
        else return "pc" 
    });
    const width = computed(() => {
        windowWidth.value;
    });
    return {width,type};
}