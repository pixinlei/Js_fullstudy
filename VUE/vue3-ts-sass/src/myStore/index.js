import {ref, reactive, toRefs} from 'vue'

const data = reactive({
    count: 1
})

// const refData = toRefs(data)

export { data }