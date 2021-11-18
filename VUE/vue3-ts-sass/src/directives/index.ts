const directives: <Directive> = {

}

export default {
    install(Vue:any) {
        Object.keys(directives).forEach((key) => {
            Vue.directives(key, directives[key])
        })
    }
}