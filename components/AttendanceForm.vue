<template>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-2xl font-bold mb-4 text-center">Attendance Monitoring</h2>
        <div class="mb-4">
            <input
                v-model="name"
                type="text"
                placeholder="Enter Name"
                class="w-full px-4 py-2 border rounded-md"
            />
        </div>
        <div class="mb-4">
            <input
                v-model="reason"
                type="text"
                placeholder="Enter Reason (if absent)"
                class="w-full px-4 py-2 border rounded-md"
            />
        </div>
        <div class="flex justify-between">
            <button
                @click="markPresent"
                class="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Present
            </button>
            <button
                @click="markAbsent"
                class="bg-red-500 text-white px-4 py-2 rounded-md"
            >
                Absent
        </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAttendance } from '@/composables/useAttendance'
    const name = ref('')
    const reason = ref('')

    const { presentList, absentList } = useAttendance()

function markPresent() {
    if (name.value === '') {
        alert('Please enter a name.')
        return
    }
    const currentDate = new Date()
    const time = currentDate.toLocaleTimeString()
    const date = currentDate.toLocaleDateString()

    presentList.value.push({ name: name.value, time, date })
    name.value = ''
    reason.value = ''
}

function markAbsent() {
    if (name.value === '') {
        alert('Please enter a name.')
        return
    }
    if (reason.value === '') {
        alert('Please enter a reason for absence.')
        return
    }
    const currentDate = new Date()
    const time = currentDate.toLocaleTimeString()
    const date = currentDate.toLocaleDateString()

    absentList.value.push({ name: name.value, time, date, reason: reason.value })
    name.value = ''
    reason.value = ''
}
</script>
