<template>
    <div>
        <AttendanceForm />
        <AttendanceTable title="Present" :list="presentList" />
        <AttendanceTable title="Absent" :list="absentList" :hasReason="true" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AttendanceForm from '@/components/AttendanceForm.vue'
import AttendanceTable from '@/components/AttendanceTable.vue'
import { useAttendance } from '@/composables/useAttendance'

const { presentList, absentList } = useAttendance()
</script>
<style scoped>
</style>
