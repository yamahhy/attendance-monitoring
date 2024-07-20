import { ref } from 'vue'

const presentList = ref([])
const absentList = ref([])

export function useAttendance() {
    return { presentList, absentList }
}
