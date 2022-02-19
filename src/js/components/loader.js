function showLoader(loaderSelector, hideClass) {
    setTimeout(()=>{
        $(loaderSelector).addClass(hideClass)
    }, 1000)

    setTimeout(()=>{
        $(loaderSelector).hide()
    }, 2000)
}
export default showLoader;